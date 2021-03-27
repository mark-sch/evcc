package cmd

import (
	"bufio"
	"context"
	"errors"
	"fmt"
	"os"
	"strings"

	"github.com/mark-sch/evcc/server"
	"github.com/mark-sch/evcc/util"
	"github.com/mark-sch/evcc/util/request"
	"github.com/bogosj/tesla"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"github.com/thoas/go-funk"
	"golang.org/x/oauth2"
)

// teslaCmd represents the vehicle command
var teslaCmd = &cobra.Command{
	Use:   "tesla-token [name]",
	Short: "Generate Tesla access token for configured vehicle",
	Run:   runTeslaToken,
}

func init() {
	rootCmd.AddCommand(teslaCmd)
}

func codePrompt(ctx context.Context, devices []tesla.Device) (tesla.Device, string, error) {
	fmt.Println("Authentication devices:", funk.Map(devices, func(d tesla.Device) string {
		return d.Name
	}))
	if len(devices) > 1 {
		return tesla.Device{}, "", errors.New("multiple devices found, only single device supported")
	}

	fmt.Print("Please enter passcode: ")
	reader := bufio.NewReader(os.Stdin)
	code, err := reader.ReadString('\n')

	return devices[0], strings.TrimSpace(code), err
}

func generateToken(username, password string) {
	ctx := context.WithValue(context.Background(), oauth2.HTTPClient, request.NewHelper(log).Client)
	client, err := tesla.NewClient(
		ctx,
		tesla.WithMFAHandler(codePrompt),
		tesla.WithCredentials(username, password),
	)
	if err != nil {
		log.FATAL.Fatalln(err)
	}

	token, err := client.Token()
	if err != nil {
		log.FATAL.Fatalln(err)
	}

	fmt.Println()
	fmt.Println("Add the following tokens to the tesla vehicle config:")
	fmt.Println()
	fmt.Println("  tokens:")
	fmt.Println("    access:", token.AccessToken)
	fmt.Println("    refresh:", token.RefreshToken)
}

func runTeslaToken(cmd *cobra.Command, args []string) {
	util.LogLevel(viper.GetString("log"), viper.GetStringMapString("levels"))
	log.INFO.Printf("evcc %s (%s)", server.Version, server.Commit)

	// load config
	conf, err := loadConfigFile(cfgFile)
	if err != nil {
		log.FATAL.Fatal(err)
	}

	teslas := funk.Filter(conf.Vehicles, func(v qualifiedConfig) bool {
		return strings.ToLower(v.Type) == "tesla"
	}).([]qualifiedConfig)

	var vehicleConf qualifiedConfig
	if len(teslas) == 1 {
		vehicleConf = teslas[0]
	} else if len(args) == 1 {
		vehicleConf = funk.Find(teslas, func(v qualifiedConfig) bool {
			return strings.EqualFold(v.Name, args[0])
		}).(qualifiedConfig)
	}

	if vehicleConf.Name == "" {
		log.FATAL.Fatal("vehicle not found")
	}

	var credentials struct {
		User, Password string
		Other          map[string]interface{} `mapstructure:",remain"`
	}

	if err := util.DecodeOther(vehicleConf.Other, &credentials); err != nil {
		log.FATAL.Fatal(err)
	}

	generateToken(credentials.User, credentials.Password)
}
