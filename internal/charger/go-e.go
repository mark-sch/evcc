package charger

import (
	"errors"
	"fmt"
	"strings"
	"time"

	"github.com/mark-sch/evcc/api"
	"github.com/mark-sch/evcc/util"
	"github.com/mark-sch/evcc/util/request"
)

// https://github.com/goecharger/go-eCharger-API-v2/

const goeCloud = "https://api.go-e.co"

var lastLpMode api.ChargeMode = api.ModeOff

// goeCloudResponse is the cloud API response
type goeCloudResponse struct {
	Success *bool             `json:"success"` // only valid for cloud payload commands
	Age     int               `json:"age"`
	Error   string            `json:"error"` // only valid for cloud payload commands
	Data    goeStatusResponse `json:"data"`
}

// Card is part of the v2 api response identifying different users
type Card struct {
	Name   string `json:"name"`
	Energy int    `json:"energy"`
	CardID bool   `json:"cardId"`
}

// goeStatusResponse is the API response if status not OK
type goeStatusResponse struct {
	Fwv string    `json:"fwv"`        // firmware version - indicates local response
	Car int       `json:"car,string"` // car status
	Alw int       `json:"alw,string"` // allow charging
	Amp int       `json:"amp,string"` // current [A]
	Eto uint64    `json:"eto,uint64"` // total energy Wh
	Err int       `json:"err,string"` // error
	Stp int       `json:"stp,string"` // stop state
	Tmp int       `json:"tmp,string"` // temperature [°C]
	Dws int       `json:"dws,string"` // energy [Ws]
	Nrg []float64 `json:"nrg"`        // voltage, current, power
	Uby int       `json:"uby,string"` // unlocked_by
	Rna string    `json:"rna"`        // RFID 1
	Rnm string    `json:"rnm"`        // RFID 2
	Rne string    `json:"rne"`        // RFID 3
	Rn4 string    `json:"rn4"`        // RFID 4
	Rn5 string    `json:"rn5"`        // RFID 5
	Rn6 string    `json:"rn6"`        // RFID 6
	Rn7 string    `json:"rn7"`        // RFID 7
	Rn8 string    `json:"rn8"`        // RFID 8
	Rn9 string    `json:"rn9"`        // RFID 9
	Rn1 string    `json:"rn1"`        // RFID 10
}

type goeStatusResponseV2 struct {
	Fwv   string    `json:"fwv"`        // firmware version - indicates local response
	Car   int       `json:"car,uint8"`  // car status
	Psm   int       `json:"psm,uint8"`  // phase switchting, 1=1-phase, 2=3-phase
	Eto   uint64    `json:"eto,uint64"` // total energy Wh
	Alw   bool      `json:"alw,bool"`   // allow charging
	Amp   int       `json:"amp,uint8"`  // current [A]
	Err   int       `json:"err,uint8"`  // error
	Wh    float64   `json:"wh,float64"` // energy in Wh since car connected
	Nrg   []float64 `json:"nrg"`        // voltage, current, power
	Cards []Card    `json:"cards"`      // cards array
}

type goeShortStatusResponseV2 struct {
	Psm bool `json:"psm,bool"` // phase switchting, 1=1-phase, 2=3-phase
	Amp bool `json:"amp,bool"` // current [A]
}

func (g *goeStatusResponse) RFIDName() string {
	switch g.Uby {
	case 1:
		return g.Rna
	case 2:
		return g.Rnm
	case 3:
		return g.Rne
	case 4:
		return g.Rn4
	case 5:
		return g.Rn5
	case 6:
		return g.Rn6
	case 7:
		return g.Rn7
	case 8:
		return g.Rn8
	case 9:
		return g.Rn9
	case 10:
		return g.Rn1
	default:
		return ""
	}
}

// GoE charger implementation
type GoE struct {
	*request.Helper
	uri, token, api string
	cache           time.Duration
	updated         time.Time
	status          goeStatusResponse
	phases          int
	apiVersion      uint8
}

func init() {
	registry.Add("go-e", NewGoEFromConfig)
}

// go:generate go run ../cmd/tools/decorate.go -f decorateGoE          -b *GoE          -r api.Charger -t "api.ChargePhases,Phases1p3p,func(int) (error)"

// NewGoEFromConfig creates a go-e charger from generic config
func NewGoEFromConfig(other map[string]interface{}) (api.Charger, error) {
	cc := struct {
		Token string
		URI   string
		Cache time.Duration
		Api   string
	}{}
	if err := util.DecodeOther(other, &cc); err != nil {
		return nil, err
	}

	if cc.Api != "" && cc.Api != "1" && cc.Api != "2" {
		return nil, errors.New("go-e config: specify api value 1 or 2")
	}
	if cc.URI != "" && cc.Token != "" {
		return nil, errors.New("go-e config: specify either an uri or a token, not both")
	}
	if cc.URI == "" && cc.Token == "" {
		return nil, errors.New("go-e config: you have to configure an uri or a token")
	}

	return NewGoE(cc.URI, cc.Token, cc.Cache, cc.Api)
}

// NewGoE creates GoE charger
func NewGoE(uri, token string, cache time.Duration, api string) (api.Charger, error) {
	c := &GoE{
		Helper:     request.NewHelper(util.NewLogger("go-e")),
		uri:        strings.TrimRight(uri, "/"),
		token:      strings.TrimSpace(token),
		api:        strings.TrimSpace(api),
		apiVersion: 1,
		phases:     3,
	}

	//optional feature / v3 Hardware / v2 API
	var switchPhases func(int) error

	if api == "2" {
		switchPhases = c.switchPhases
		c.apiVersion = 2
	}

	return decorateGoE(c, switchPhases), nil
}

func (c *GoE) translateResponse(responseV2 goeStatusResponseV2) goeStatusResponse {
	var status goeStatusResponse

	status.Fwv = responseV2.Fwv
	status.Car = responseV2.Car
	status.Amp = responseV2.Amp
	status.Nrg = responseV2.Nrg
	status.Eto = responseV2.Eto

	// v2 api uses bool
	if responseV2.Alw == true {
		status.Alw = 1
	} else {
		status.Alw = 0
	}

	//Wh is in Wh and Dws is in Deka-Watt-Seconds
	status.Dws = int(responseV2.Wh * 3600 / 10)

	// status.Uby = responseV2. <- currently not documented in v2
	status.Rna = responseV2.Cards[0].Name
	status.Rnm = responseV2.Cards[1].Name
	status.Rne = responseV2.Cards[2].Name
	status.Rn4 = responseV2.Cards[3].Name
	status.Rn5 = responseV2.Cards[4].Name
	status.Rn6 = responseV2.Cards[5].Name
	status.Rn7 = responseV2.Cards[6].Name
	status.Rn8 = responseV2.Cards[7].Name
	status.Rn9 = responseV2.Cards[8].Name
	status.Rn1 = responseV2.Cards[9].Name

	return status
}

func (c *GoE) localResponse(function, payload string) (goeStatusResponse, error) {
	var status goeStatusResponse
	var statusV2 goeStatusResponseV2
	var shortStatusV2 goeShortStatusResponseV2
	var err error

	if c.apiVersion == 1 {
		url := fmt.Sprintf("%s/%s", c.uri, function)
		if payload != "" {
			url += "?payload=" + payload
		}

		err = c.GetJSON(url, &status)
	}

	if c.apiVersion == 2 && payload == "" {
		url := fmt.Sprintf("%s/%s", c.uri, function)

		err = c.GetJSON(url, &statusV2)
		if nil == err {
			status = c.translateResponse(statusV2)
		}
	}

	if c.apiVersion == 2 && payload != "" {
		url := fmt.Sprintf("%s/%s", c.uri, function)
		url += "set?" + payload

		err = c.GetJSON(url, &shortStatusV2)
	}

	return status, err
}

func (c *GoE) cloudResponse(function, payload string) (goeStatusResponse, error) {
	var status goeCloudResponse

	url := fmt.Sprintf("%s/%s?token=%s", goeCloud, function, c.token)
	if payload != "" {
		url += "&payload=" + payload
	}

	err := c.GetJSON(url, &status)
	if err == nil && status.Success != nil && !*status.Success {
		err = errors.New(status.Error)
	}

	return status.Data, err
}

func (c *GoE) apiStatus() (status goeStatusResponse, err error) {
	if c.token == "" && c.apiVersion == 1 {
		return c.localResponse("status", "")
	}

	if c.token == "" && c.apiVersion == 2 {
		return c.localResponse("api/status?filter=fwv,car,alw,amp,err,wh,nrg,eto,psm,cards", "")
	}

	if c.token != "" && time.Since(c.updated) >= c.cache {
		status, err = c.cloudResponse("api_status", "")
		if err == nil {
			c.updated = time.Now()
			c.status = status
		}
	}

	return c.status, err
}

// apiUpdate invokes either cloud or local api
// goeStatusResponse is only valid for local api. Use Fwv if valid.
func (c *GoE) apiUpdate(payload string) (goeStatusResponse, error) {
	if c.token == "" {
		if c.apiVersion == 2 {
			return c.localResponse("api/", payload)
		}
		return c.localResponse("mqtt", payload)
	}

	status, err := c.cloudResponse("api", payload)
	if err == nil {
		// cloud api sends partial response, don't store it as status
		c.updated = time.Time{}
	}

	return status, err
}

// Status implements the api.Charger interface
func (c *GoE) Status() (api.ChargeStatus, error) {
	status, err := c.apiStatus()
	if err != nil {
		return api.StatusNone, err
	}

	switch status.Car {
	case 1:
		return api.StatusA, nil
	case 2:
		return api.StatusC, nil
	case 3, 4:
		return api.StatusB, nil
	default:
		return api.StatusNone, fmt.Errorf("car unknown result: %d", status.Car)
	}
}

// Enabled implements the api.Charger interface
func (c *GoE) Enabled() (bool, error) {
	status, err := c.apiStatus()
	if err != nil {
		return false, err
	}

	switch status.Alw {
	case 0:
		return false, nil
	case 1:
		return true, nil
	default:
		return false, fmt.Errorf("alw unknown result: %d", status.Alw)
	}
}

// Enable implements the api.Charger interface
func (c *GoE) Enable(enable bool) error {
	var b int
	var parameter string

	if c.apiVersion == 2 {
		parameter = "frc"
		if enable {
			b = 2
		} else {
			b = 1
		}
	} else {
		parameter = "alw"
		if enable {
			b = 1
		}
	}
	_, err := c.apiUpdate(fmt.Sprintf("%s=%d", parameter, b))
	return err
}

// MaxCurrent implements the api.Charger interface
func (c *GoE) MaxCurrent(current int64) error {
	var parameter string

	if c.apiVersion == 2 {
		parameter = "amp"
	} else {
		parameter = "amx"
	}

	_, err := c.apiUpdate(fmt.Sprintf("%s=%d", parameter, current))
	return err
}

var _ api.Meter = (*GoE)(nil)

// CurrentPower implements the api.Meter interface
func (c *GoE) CurrentPower() (float64, error) {
	status, err := c.apiStatus()
	var power float64

	if len(status.Nrg) == 16 && c.apiVersion == 2 {
		power = float64(status.Nrg[11])
	}
	if len(status.Nrg) == 16 && c.apiVersion == 1 {
		power = float64(status.Nrg[11]) * 10
	}
	return power, err
}

var _ api.ChargeRater = (*GoE)(nil)

// TotalEnergy implements the MeterEnergy interface
func (c *GoE) TotalEnergy() (float64, error) {
	status, err := c.apiStatus()
	energy := float64(status.Eto) / 1000
	return energy, err
}

// ChargedEnergy implements the api.ChargeRater interface
func (c *GoE) ChargedEnergy() (float64, error) {
	status, err := c.apiStatus()
	energy := float64(status.Dws) / 3.6e5 // Deka-Watt-Seconds to kWh (100.000 == 0,277kWh)
	return energy, err
}

var _ api.MeterCurrent = (*GoE)(nil)

// Currents implements the api.MeterCurrent interface
func (c *GoE) Currents() (float64, float64, float64, error) {
	status, err := c.apiStatus()
	if len(status.Nrg) == 16 && c.apiVersion == 1 {
		return float64(status.Nrg[4]) / 10, float64(status.Nrg[5]) / 10, float64(status.Nrg[6]) / 10, nil
	}
	if len(status.Nrg) == 16 && c.apiVersion == 2 {
		return float64(status.Nrg[4]), float64(status.Nrg[5]), float64(status.Nrg[6]), nil
	}
	return 0, 0, 0, err
}

// phases implements the api.ChargePhases interface
func (c *GoE) switchPhases(phases int) error {
	var err error

	if c.apiVersion == 2 && phases == 3 {
		var parameter string
		parameter = "psm"

		_, err = c.apiUpdate(fmt.Sprintf("%s=%d", parameter, 2))
		c.phases = phases
		return err
	}

	if c.apiVersion == 2 && phases == 1 {
		var parameter string
		parameter = "psm"

		_, err = c.apiUpdate(fmt.Sprintf("%s=%d", parameter, 1))
		c.phases = phases
		return err
	}

	return err
}

func (c *GoE) LoadpointMode(mode api.ChargeMode, lpCS api.ChargeStatus) error {
	var err error

	if mode != lastLpMode {
		if mode == api.ModeNow {
			c.switchPhases(3)
		}
		if mode == api.ModePV {
			c.switchPhases(1)
		}
		if mode == api.ModeMinPV {
			c.switchPhases(1)
		}

		lastLpMode = mode
	}

	return err
}
