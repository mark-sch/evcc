package provider

import (
	"github.com/mark-sch/evcc/api"
	"github.com/mark-sch/evcc/util"
)

// SmartboxStatus implements status conversion from Smartbox to api.Status
type SmartboxStatus struct {
	plugged, charging func() (bool, error)
}

// NewSmartboxStatusProviderFromConfig creates SmartboxStatus from given configuration
func NewSmartboxStatusProviderFromConfig(other map[string]interface{}) (func() (string, error), error) {
	cc := struct {
		Plugged, Charging Config
	}{}
	if err := util.DecodeOther(other, &cc); err != nil {
		return nil, err
	}

	plugged, err := NewBoolGetterFromConfig(cc.Plugged)

	var charging func() (bool, error)
	if err == nil {
		charging, err = NewBoolGetterFromConfig(cc.Charging)
	}

	if err != nil {
		return nil, err
	}

	o := NewSmartboxStatusProvider(plugged, charging)

	return o.StringGetter, nil
}

// NewSmartboxStatusProvider creates provider for Smartbox status converted from MQTT topics
func NewSmartboxStatusProvider(plugged, charging func() (bool, error)) *SmartboxStatus {
	return &SmartboxStatus{
		plugged:  plugged,
		charging: charging,
	}
}

// StringGetter returns string from Smartbox charging/ plugged status
func (o *SmartboxStatus) StringGetter() (string, error) {
	charging, err := o.charging()
	if err != nil {
		return "", err
	}
	if charging {
		return string(api.StatusC), nil
	}

	plugged, err := o.plugged()
	if err != nil {
		return "", err
	}
	if plugged {
		return string(api.StatusB), nil
	}

	return string(api.StatusA), nil
}
