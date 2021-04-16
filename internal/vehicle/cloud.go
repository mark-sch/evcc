package vehicle

import (
	"context"
	"errors"
	"os"
	"time"

	"github.com/mark-sch/evcc/api"
	"github.com/mark-sch/evcc/internal/vehicle/cloud"
	"github.com/mark-sch/evcc/provider"
	"github.com/mark-sch/evcc/soc/proto/pb"
	"github.com/mark-sch/evcc/util"
	"github.com/mark-sch/evcc/util/request"
)

// Cloud is an api.Vehicle implementation for Cloud cars
type Cloud struct {
	*embed
	token        string
	brand        string
	config       map[string]string
	client       pb.VehicleClient
	vehicleID    int64
	chargeStateG func() (float64, error)
}

func init() {
	registry.Add("cloud", NewCloudFromConfig)
}

// NewCloudFromConfig creates a new vehicle
func NewCloudFromConfig(other map[string]interface{}) (api.Vehicle, error) {
	cc := struct {
		Token    string
		Title    string
		Capacity int64
		Brand    string
		Other    map[string]string `mapstructure:",remain"`
		Cache    time.Duration
	}{
		Cache: interval,
	}

	if err := util.DecodeOther(other, &cc); err != nil {
		return nil, err
	}

	if cc.Token == "" {
		return nil, errors.New("missing required token")
	}

	if host := os.Getenv("GRPC_URI"); host != "" {
		cloud.Host = host
	}

	log := util.NewLogger("cloud")
	client, err := cloud.Client(log, cloud.Host)

	v := &Cloud{
		embed:  &embed{cc.Title, cc.Capacity},
		token:  cc.Token,
		brand:  cc.Brand,
		config: cc.Other,
		client: client,
	}

	if err == nil {
		err = v.prepareVehicle()
	}

	v.chargeStateG = provider.NewCached(v.chargeState, cc.Cache).FloatGetter()

	return v, err
}

// prepareVehicle obtains new vehicle handle from cloud server
func (v *Cloud) prepareVehicle() error {
	req := &pb.NewRequest{
		Token:  v.token,
		Type:   v.brand,
		Config: v.config,
	}

	ctx, cancel := context.WithTimeout(context.Background(), 3*request.Timeout)
	defer cancel()

	res, err := v.client.New(ctx, req)
	if err == nil {
		v.vehicleID = res.VehicleId
	}

	return err
}

// chargeState implements the api.Vehicle interface
func (v *Cloud) chargeState() (float64, error) {
	req := &pb.SoCRequest{
		Token:     v.token,
		VehicleId: v.vehicleID,
	}

	ctx, cancel := context.WithTimeout(context.Background(), request.Timeout)
	defer cancel()

	res, err := v.client.SoC(ctx, req)
	if errors.As(err, &cloud.ErrVehicleNotAvailable) && v.prepareVehicle() == nil {
		req.VehicleId = v.vehicleID
		res, err = v.client.SoC(ctx, req)
	}

	return res.GetSoc(), err
}

// SoC implements the api.Vehicle interface
func (v *Cloud) SoC() (float64, error) {
	return v.chargeStateG()
}
