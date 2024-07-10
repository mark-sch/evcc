package charger

import (
	"fmt"
	"time"

	"github.com/mark-sch/evcc/api"
	"github.com/mark-sch/evcc/internal/charger/tinybox"
	"github.com/mark-sch/evcc/provider"
	"github.com/mark-sch/evcc/provider/mqtt"
	"github.com/mark-sch/evcc/util"
)

func init() {
	registry.Add("tinybox", NewTinyboxFromConfig)
}

// Tinybox configures generic charger and charge meter for an Tinybox loadpoint
type Tinybox struct {
	api.Charger
	currentPowerG func() (float64, error)
	totalEnergyG  func() (float64, error)
	currentsG     []func() (float64, error)
}

// NewTinyboxFromConfig creates a new configurable charger
func NewTinyboxFromConfig(other map[string]interface{}) (api.Charger, error) {
	cc := struct {
		mqtt.Config `mapstructure:",squash"`
		Topic       string
		Timeout     time.Duration
		ID          int
	}{
		Topic:   tinybox.RootTopic,
		Timeout: tinybox.Timeout,
		ID:      1,
	}

	if err := util.DecodeOther(other, &cc); err != nil {
		return nil, err
	}

	log := util.NewLogger("tinybox")

	return NewTinybox(log, cc.Config, cc.ID, cc.Topic, cc.Timeout)
}

// NewTinybox creates a new configurable charger
func NewTinybox(log *util.Logger, mqttconf mqtt.Config, id int, topic string, timeout time.Duration) (*Tinybox, error) {
	client, err := mqtt.RegisteredClientOrDefault(log, mqttconf)
	if err != nil {
		return nil, err
	}

	// timeout handler
	//timer := provider.NewMqtt(log, client,
	//		fmt.Sprintf("%s/system/%s", topic, tinybox.TimestampTopic), "", 1, timeout,
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
	connection := stringG(fmt.Sprintf("%s/%s", topic, tinybox.ConfiguredTopic))
	if isConnected, err := connection(); err != nil || isConnected != "online" {
		return nil, fmt.Errorf("Tinybox loadpoint %d is not online", id)
	}

	// adapt plugged/charging to status
	plugged := boolG(fmt.Sprintf("%s/lp/%d/%s", topic, id, tinybox.PluggedTopic))
	charging := boolG(fmt.Sprintf("%s/lp/%d/%s", topic, id, tinybox.ChargingTopic))
	status := provider.NewTinyboxStatusProvider(plugged, charging).StringGetter

	// remaining getters
	enabled := boolG(fmt.Sprintf("%s/lp/%d/%s", topic, id, tinybox.EnabledTopic))

	// setters
	enable := provider.NewMqtt(log, client,
		fmt.Sprintf("%s/lp/%d/%s", topic, id, tinybox.EnableTopic),
		"", 1, timeout).BoolSetter(tinybox.EnableTopic)
	maxcurrent := provider.NewMqtt(log, client,
		fmt.Sprintf("%s/lp/%d/%s", topic, id, tinybox.MaxCurrentTopic),
		"", 1, timeout).IntSetter(tinybox.MaxCurrentTopic)

	// meter getters
	currentPowerG := floatG(fmt.Sprintf("%s/lp/%d/%s", topic, id, tinybox.ChargePowerTopic))
	totalEnergyG := floatG(fmt.Sprintf("%s/lp/%d/%s", topic, id, tinybox.ChargeTotalEnergyTopic))

	var currentsG []func() (float64, error)
	for i := 1; i <= 3; i++ {
		current := floatG(fmt.Sprintf("%s/lp/%d/%s%d", topic, id, tinybox.CurrentTopic, i))
		currentsG = append(currentsG, current)
	}

	charger, err := NewConfigurable(status, enabled, enable, maxcurrent)
	if err != nil {
		return nil, err
	}

	res := &Tinybox{
		Charger:       charger,
		currentPowerG: currentPowerG,
		totalEnergyG:  totalEnergyG,
		currentsG:     currentsG,
	}

	return res, nil
}

var _ api.Meter = (*Tinybox)(nil)

// CurrentPower implements the api.Meter interface
func (m *Tinybox) CurrentPower() (float64, error) {
	return m.currentPowerG()
}

var _ api.MeterEnergy = (*Tinybox)(nil)

// TotalEnergy implements the api.MeterEnergy interface
func (m *Tinybox) TotalEnergy() (float64, error) {
	return m.totalEnergyG()
}

var _ api.MeterCurrent = (*Tinybox)(nil)

// Currents implements the api.MeterCurrent interface
func (m *Tinybox) Currents() (float64, float64, float64, error) {
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
