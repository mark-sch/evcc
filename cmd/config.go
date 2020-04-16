package cmd

import (
	"time"

	"github.com/andig/evcc/api"
	"github.com/andig/evcc/push"
	"github.com/andig/evcc/server"
)

type config struct {
	URI        string
	Log        string
	LogFile    string
	Interval   time.Duration
	Mqtt       mqttConfig
	Influx     influxConfig
	Menu       []server.MenuConfig
	Messaging  messagingConfig
	Meters     []namedConfig
	Chargers   []typedConfig
	Vehicles   []typedConfig
	LoadPoints []loadPointConfig
}

type namedConfig struct {
	Name  string
	Other map[string]interface{} `mapstructure:",remain"`
}

type typedConfig struct {
	Name, Type string
	Other      map[string]interface{} `mapstructure:",remain"`
}

type messagingConfig struct {
	Events   map[string]push.EventTemplate
	Services []messagingService
}

type messagingService struct {
	Type  string
	Other map[string]interface{} `mapstructure:",remain"`
}

type mqttConfig struct {
	Broker   string
	User     string
	Password string
}

type influxConfig struct {
	URL      string
	Database string
	User     string
	Password string
	Interval time.Duration
}

type loadPointConfig struct {
	Name          string
	GridMeter     string // api.Meter
	PVMeter       string // api.Meter
	ChargeMeter   string // api.Meter
	Charger       string // api.Charger
	Vehicle       string // api.Vehicle
	Mode          api.ChargeMode
	Phases        int64
	MinCurrent    int64
	MaxCurrent    int64
	Steepness     int64
	GuardDuration time.Duration
	Voltage       float64
	ResidualPower float64
}
