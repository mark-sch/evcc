package main

import (
	"log"

	compile "github.com/mark-sch/evcc/server"
	"github.com/mark-sch/evcc/soc/server/server"
	"github.com/mark-sch/evcc/soc/server/ui"
)

func main() {
	log.Printf("soc-server %s (%s)", compile.Version, compile.Commit)

	go ui.Run()
	go server.Run()

	select {}
}
