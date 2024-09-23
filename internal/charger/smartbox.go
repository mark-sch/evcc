package charger

import (
	"errors"
	"fmt"
	"time"

	"github.com/mark-sch/evcc/api"
	"github.com/mark-sch/evcc/internal/charger/smartbox"
	"github.com/mark-sch/evcc/provider"
	"github.com/mark-sch/evcc/provider/mqtt"
	"github.com/mark-sch/evcc/util"
)

func init() {
	registry.Add("smartbox", NewSmartboxFromConfig)
}

// Smartbox configures generic charger and charge meter for an Smartbox loadpoint
type Smartbox struct {
	api.Charger
	currentPowerG func() (float64, error)
	totalEnergyG  func() (float64, error)
	currentsG     []func() (float64, error)
}

// NewSmartboxFromConfig creates a new configurable charger
func NewSmartboxFromConfig(other map[string]interface{}) (api.Charger, error) {
	cc := struct {
		mqtt.Config `mapstructure:",squash"`
		Topic       string
		Timeout     time.Duration
		ID          int
	}{
		Timeout: smartbox.Timeout,
		ID:      1,
	}

	if err := util.DecodeOther(other, &cc); err != nil {
		return nil, err
	}

	if cc.Topic == "" {
		return nil, errors.New("Smartbox charger config: specify a topic")
	}

	log := util.NewLogger("smartbox")
	return NewSmartbox(log, cc.Config, cc.ID, "sunny5/"+cc.Topic, cc.Timeout)
}

// NewSmartbox creates a new configurable charger
func NewSmartbox(log *util.Logger, mqttconf mqtt.Config, id int, topic string, timeout time.Duration) (*Smartbox, error) {
	client, err := mqtt.RegisteredClientOrDefault(log, mqttconf)
	if err != nil {
		return nil, err
	}

	// timeout handler
	//timer := provider.NewMqtt(log, client,
	//		fmt.Sprintf("%s/system/%s", topic, smartbox.TimestampTopic), "", 1, timeout,
	//).IntGetter()
	timer := provider.NewMqtt(log, client,
		fmt.Sprintf("%s/log", topic), "", 1, timeout,
	).StringGetter()

	// getters
	boolG := func(topic string) func() (bool, error) {
		g := provider.NewMqtt(log, client, topic, "", 1, 0).BoolGetter()
		return func() (val bool, err error) {
			if val, err = g(); err == nil {
				_, err = timer()
			}
			return val, err
		}
	}

	floatG := func(topic string) func() (float64, error) {
		g := provider.NewMqtt(log, client, topic, "", 1, 0).FloatGetter()
		return func() (val float64, err error) {
			if val, err = g(); err == nil {
				_, err = timer()
			}
			return val, err
		}
	}

	stringG := func(topic string) func() (string, error) {
		g := provider.NewMqtt(log, client, topic, "", 1, 0).StringGetter()
		return func() (val string, err error) {
			if val, err = g(); err == nil {
				_, err = timer()
			}
			return val, err
		}
	}

	// check if loadpoint configured
	connection := stringG(fmt.Sprintf("%s/%d/%s", topic, id, smartbox.ConfiguredTopic))
	isConnected, err := connection()
	if err != nil || isConnected == "" {
		return nil, fmt.Errorf("Smartbox loadpoint %d is not online", id)
	}

	// adapt plugged/charging to status
	plugged := boolG(fmt.Sprintf("%s/%d/%s", topic, id, smartbox.PluggedTopic))
	charging := boolG(fmt.Sprintf("%s/%d/%s", topic, id, smartbox.ChargingTopic))
	status := provider.NewSmartboxStatusProvider(plugged, charging).StringGetter

	// remaining getters
	enabled := boolG(fmt.Sprintf("%s/%d/%s", topic, id, smartbox.EnabledTopic))

	// setters
	enable := provider.NewMqtt(log, client,
		fmt.Sprintf("%s/%d/%s", topic, id, smartbox.EnableTopic),
		"", 1, timeout).BoolSetter(smartbox.EnableTopic)
	maxcurrent := provider.NewMqtt(log, client,
		fmt.Sprintf("%s/%d/%s", topic, id, smartbox.MaxCurrentTopic),
		"", 1, timeout).IntSetter(smartbox.MaxCurrentTopic)

	// meter getters
	currentPowerG := floatG(fmt.Sprintf("%s/%d/%s", topic, id, smartbox.ChargePowerTopic))
	totalEnergyG := floatG(fmt.Sprintf("%s/%d/%s", topic, id, smartbox.ChargeTotalEnergyTopic))

	var currentsG []func() (float64, error)
	for i := 1; i <= 3; i++ {
		current := floatG(fmt.Sprintf("%s/%d/%s%d", topic, id, smartbox.CurrentTopic, i))
		currentsG = append(currentsG, current)
	}

	charger, err := NewConfigurable(status, enabled, enable, maxcurrent)
	if err != nil {
		return nil, err
	}

	res := &Smartbox{
		Charger:       charger,
		currentPowerG: currentPowerG,
		totalEnergyG:  totalEnergyG,
		currentsG:     currentsG,
	}

	return res, nil
}

var _ api.Meter = (*Smartbox)(nil)

// CurrentPower implements the api.Meter interface
func (m *Smartbox) CurrentPower() (float64, error) {
	return m.currentPowerG()
}

var _ api.MeterEnergy = (*Smartbox)(nil)

// TotalEnergy implements the api.MeterEnergy interface
func (m *Smartbox) TotalEnergy() (float64, error) {
	return m.totalEnergyG()
}

var _ api.MeterCurrent = (*Smartbox)(nil)

// Currents implements the api.MeterCurrent interface
func (m *Smartbox) Currents() (float64, float64, float64, error) {
	var currents []float64
	for _, currentG := range m.currentsG {
		c, err := currentG()
		if err != nil {
			return 0, 0, 0, err
		}

		currents = append(currents, c)
	}

	return currents[0], currents[1], currents[2], nil
}
