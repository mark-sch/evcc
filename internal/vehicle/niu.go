package vehicle

import (
	"crypto/md5"
	"encoding/hex"
	"errors"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/mark-sch/evcc/api"
	"github.com/mark-sch/evcc/internal/vehicle/niu"
	"github.com/mark-sch/evcc/provider"
	"github.com/mark-sch/evcc/util"
	"github.com/mark-sch/evcc/util/request"
)

// Niu is an api.Vehicle implementation for Niu vehicles
type Niu struct {
	*embed
	*request.Helper
	user, password    string
	serial            string
	tokens            niu.Token
	accessTokenExpiry time.Time
	chargeStateG      func() (float64, error)
}

func init() {
	registry.Add("niu", NewNiuFromConfig)
}

// NewFordFromConfig creates a new vehicle
func NewNiuFromConfig(other map[string]interface{}) (api.Vehicle, error) {
	cc := struct {
		Title                  string
		Capacity               int64
		User, Password, Serial string
		Cache                  time.Duration
	}{
		Cache: interval,
	}

	if err := util.DecodeOther(other, &cc); err != nil {
		return nil, err
	}

	if cc.User == "" || cc.Password == "" || cc.Serial == "" {
		return nil, errors.New("missing user, password or serial")
	}

	log := util.NewLogger("niu")

	v := &Niu{
		embed:    &embed{cc.Title, cc.Capacity},
		Helper:   request.NewHelper(log),
		user:     cc.User,
		password: cc.Password,
		serial:   strings.ToUpper(cc.Serial),
	}

	v.chargeStateG = provider.NewCached(v.chargeState, cc.Cache).FloatGetter()

	return v, nil
}

// login implements the Niu oauth2 api
func (v *Niu) login() error {
	md5hash, err := md5Hash(v.password)
	if err != nil {
		return err
	}

	data := url.Values{
		"account":    []string{v.user},
		"password":   []string{md5hash},
		"grant_type": []string{"password"},
		"scope":      []string{"base"},
		"app_id":     []string{"niu_8xt1afu6"},
	}

	uri := niu.AuthURI + "/v3/api/oauth2/token"
	req, err := request.New(http.MethodPost, uri, strings.NewReader(data.Encode()), map[string]string{
		"Content-Type": "application/x-www-form-urlencoded",
	})

	if err == nil {
		var tokens niu.Token
		if err = v.DoJSON(req, &tokens); err == nil {
			v.tokens = tokens
			v.accessTokenExpiry = time.Unix(v.tokens.Data.Token.TokenExpiresIn, 0)
		}
	}

	return err
}

// md5Hash creates a MD5 hash based on a string
func md5Hash(text string) (string, error) {
	hasher := md5.New()
	_, err := hasher.Write([]byte(text))
	return hex.EncodeToString(hasher.Sum(nil)), err
}

// request implements the Niu web request
func (v *Niu) request(uri string) (*http.Request, error) {
	if v.tokens.Data.Token.AccessToken == "" || v.accessTokenExpiry.Before(time.Now()) {
		if err := v.login(); err != nil {
			return nil, err
		}
	}

	req, err := request.New(http.MethodGet, uri, nil, map[string]string{
		"token": v.tokens.Data.Token.AccessToken,
	})

	return req, err
}

// chargeState implements the api.Vehicle interface
func (v *Niu) chargeState() (float64, error) {
	var resp niu.SoC

	req, err := v.request(niu.ApiURI + "/v3/motor_data/index_info?sn=" + v.serial)
	if err == nil {
		err = v.DoJSON(req, &resp)
	}

	return float64(resp.Data.Batteries.CompartmentA.BatteryCharging), err
}

// SoC implements the api.Vehicle interface
func (v *Niu) SoC() (float64, error) {
	return v.chargeStateG()
}
