package tinybox

import "time"

// predefined Tinybox topic names
const (
	Timeout = 15 * time.Second

	// root topic
	RootTopic = "wbec"

	// alive
	TimestampTopic = "Timestamp"

	// status
	PluggedTopic    = "plugState"
	ChargingTopic   = "chargeState"
	ConfiguredTopic = "connection"

	// getter/setter
	EnabledTopic    = "enabled"
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
