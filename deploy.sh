#!/bin/bash
#make
env GOOS=linux GOARCH=arm make
rsync --progress -e "ssh -i ~/.ssh/S5B" evcc sunny5@192.168.0.185:/home/sunny5/git/evcc/
rsync --progress -e "ssh -i ~/.ssh/S5B" evcc.sunny5.yaml sunny5@192.168.0.185:/home/sunny5/git/evcc/
rsync --progress -e "ssh -i ~/.ssh/S5B" build-sunny5-config.js sunny5@192.168.0.185:/home/sunny5/git/evcc/
rsync --progress -e "ssh -i ~/.ssh/S5B" get_latest_release.sh sunny5@192.168.0.185:/home/sunny5/git/evcc/
rsync --progress -e "ssh -i ~/.ssh/S5B" version.txt sunny5@192.168.0.185:/home/sunny5/git/evcc/
