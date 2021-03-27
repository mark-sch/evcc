package main

import (
	"embed"
	"io"
	"io/fs"
	"log"

	"github.com/mark-sch/evcc/cmd"
	"github.com/mark-sch/evcc/server"
)

//go:embed dist
var assets embed.FS

// init loads embedded assets unless live assets are already loaded
func init() {
	if server.Assets == nil {
		fsys, err := fs.Sub(assets, "dist")
		if err != nil {
			panic(err)
		}
		server.Assets = fsys
	}
}

func main() {
	// suppress deprecated: golang.org/x/oauth2: Transport.CancelRequest no longer does anything; use contexts
	// see https://github.com/golang/oauth2/issues/487
	log.SetOutput(io.Discard)

	cmd.Execute()
}
