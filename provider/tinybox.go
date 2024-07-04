package provider

import (
	"github.com/mark-sch/evcc/api"
	"github.com/mark-sch/evcc/util"
)

// TinyboxStatus implements status conversion from Tinybox to api.Status
type TinyboxStatus struct {
	plugged, charging func() (bool, error)
}

// NewTinyboxStatusProviderFromConfig creates TinyboxStatus from given configuration
func NewTinyboxStatusProviderFromConfig(other map[string]interface{}) (func() (string, error), error) {
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

	o := NewTinyboxStatusProvider(plugged, charging)

	return o.StringGetter, nil
}

// NewTinyboxStatusProvider creates provider for Tinybox status converted from MQTT topics
func NewTinyboxStatusProvider(plugged, charging func() (bool, error)) *TinyboxStatus {
	return &TinyboxStatus{
		plugged:  plugged,
		charging: charging,
	}
}

// StringGetter returns string from Tinybox charging/ plugged status
func (o *TinyboxStatus) StringGetter() (string, error) {
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
