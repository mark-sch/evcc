package charger

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"net"
	"strings"

	"github.com/lunixbochs/struc"
	"github.com/mark-sch/evcc/api"
	"github.com/mark-sch/evcc/internal/charger/tplink"
	"github.com/mark-sch/evcc/util"
)

// TPLink charger implementation
type TPLink struct {
	uri          string
	standbypower float64
}

func init() {
	registry.Add("tplink", NewTPLinkFromConfig)
}

// NewTasmotaFromConfig creates a TP-Link charger from generic config
func NewTPLinkFromConfig(other map[string]interface{}) (api.Charger, error) {
	cc := struct {
		URI          string
		StandbyPower float64
	}{}

	if err := util.DecodeOther(other, &cc); err != nil {
		return nil, err
	}

	if cc.URI == "" {
		return nil, errors.New("missing uri")
	}

	return NewTPLink(cc.URI, cc.StandbyPower)
}

// NewTPLink creates TP-Link charger
func NewTPLink(uri string, standbypower float64) (*TPLink, error) {
	c := &TPLink{
		uri:          strings.TrimRight(uri, "/"),
		standbypower: standbypower,
	}
	return c, nil
}

// Enabled implements the Charger.Enabled interface
func (c *TPLink) Enabled() (bool, error) {
	sysResp, err := c.execCmd(`{"system":{"get_sysinfo":null}}`)
	if err != nil {
		return false, err
	}

	var systemResponse tplink.SystemResponse
	if err := json.Unmarshal(sysResp, &systemResponse); err != nil {
		return false, err
	}

	if err := systemResponse.System.GetSysinfo.ErrCode; err != 0 {
		return false, fmt.Errorf("get_sysinfo error %d", err)
	}

	if !strings.Contains(systemResponse.System.GetSysinfo.Feature, "ENE") {
		return false, errors.New(systemResponse.System.GetSysinfo.Model + " not supported, energy meter feature missing")
	}

	return int(1) == systemResponse.System.GetSysinfo.RelayState, err
}

// Enable implements the Charger.Enable interface
func (c *TPLink) Enable(enable bool) error {
	cmd := `{"system":{"set_relay_state":{"state":0}}}`
	if enable {
		cmd = `{"system":{"set_relay_state":{"state":1}}}`
	}

	// Execute TP-Link set_relay_state command
	sysResp, err := c.execCmd(cmd)
	if err != nil {
		return err
	}

	var systemResponse tplink.SystemResponse
	if err := json.Unmarshal(sysResp, &systemResponse); err != nil {
		return err
	}

	if err := systemResponse.System.SetRelayState.ErrCode; err != 0 {
		return fmt.Errorf("set_relay_state error %d", err)
	}

	return nil
}

// MaxCurrent implements the Charger.MaxCurrent interface
func (c *TPLink) MaxCurrent(current int64) error {
	return nil
}

// Status implements the Charger.Status interface
func (c *TPLink) Status() (api.ChargeStatus, error) {
	power, err := c.CurrentPower()

	switch {
	case power > 0:
		return api.StatusC, err
	default:
		return api.StatusB, err
	}
}

var _ api.Meter = (*TPLink)(nil)

// CurrentPower implements the api.Meter interface
func (c *TPLink) CurrentPower() (float64, error) {
	emeResp, err := c.execCmd(`{"emeter":{"get_realtime":null}}`)
	if err != nil {
		return 0, err
	}

	var emeterResponse tplink.EmeterResponse
	if err := json.Unmarshal(emeResp, &emeterResponse); err != nil {
		return 0, err
	}

	if err := emeterResponse.Emeter.GetRealtime.ErrCode; err != 0 {
		return 0, fmt.Errorf("get_realtime error %d", err)
	}

	power := emeterResponse.Emeter.GetRealtime.Power

	// ignore standby power
	if power < c.standbypower {
		power = 0
	}

	return power, err
}

// execCmd executes an TP-Link Smart Home Protocol command and provides the response
func (c *TPLink) execCmd(cmd string) ([]byte, error) {
	// encode command message
	// encResult provides the encrypted plug command
	encCommand := bytes.Buffer{}
	var ekey byte = 171 // Encryption initialization vector
	for i := 0; i < len(cmd); i++ {
		ekey = ekey ^ cmd[i]
		encCommand.WriteByte(ekey)
	}
	// Pack command msg
	pkgCommand := bytes.Buffer{}
	type tpPkg struct {
		Size int `struc:"int32,big,sizeof=Msg"`
		Msg  []byte
	}
	m := &tpPkg{1, encCommand.Bytes()}
	if err := struc.Pack(&pkgCommand, m); err != nil {
		return nil, err
	}

	// send command message on port 9999 to plug in local network
	// open connection via TP-Link Smart Home Protocol port 9999
	conn, err := net.Dial("tcp", c.uri)
	if err != nil {
		return nil, err
	}

	_, err = conn.Write(pkgCommand.Bytes())
	if err != nil {
		return nil, err
	}

	// encResponse receives the encrypted plug response
	b := make([]byte, 2048)

	count, err := conn.Read(b)
	if err != nil {
		return nil, err
	}

	encResponse := b[:count]

	// decode response message
	// decResponse provides the decrypted smart plug response
	decResponse := bytes.Buffer{}
	var dkey byte = 171 // Reset initialization vector
	for i := 4; i < len(encResponse); i++ {
		dec := dkey ^ encResponse[i]
		dkey = encResponse[i]
		decResponse.WriteByte(dec)
	}
	return decResponse.Bytes(), nil
}
