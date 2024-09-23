package smartbox

import "time"

// predefined Tinybox topic names
const (
	Timeout = 5 * time.Second

	// root topic
	RootTopic = "smartbox"

	// alive
	TimestampTopic = "Timestamp"

	// status
	PluggedTopic    = "plugState"
	ChargingTopic   = "chargeState"
	ConfiguredTopic = "updated"

	// getter/setter
	EnabledTopic    = "enabled"
	EnableTopic     = "enable"
	MaxCurrentTopic = "maxcurrent"

	// charge power
	ChargePowerTopic       = "power"
	ChargeTotalEnergyTopic = "energy"

	// general measurements
	PowerTopic   = "W"
	SoCTopic     = "%Soc"
	CurrentTopic = "currL" // 1..3

	// configuration
	PvConfigured      = "boolPVConfigured"
	BatteryConfigured = "boolHouseBatteryConfigured"
)
