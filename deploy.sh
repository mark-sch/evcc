#!/bin/bash

function deployLocal {
    #make
    env GOOS=linux GOARCH=arm make
    rsync --progress -e "ssh -i ~/.ssh/S5B" evcc sunny5@192.168.100.150:/home/sunny5/git/evcc/
    rsync --progress -e "ssh -i ~/.ssh/S5B" evcc.sunny5.yaml sunny5@192.168.100.150:/home/sunny5/git/evcc/
    rsync --progress -e "ssh -i ~/.ssh/S5B" build-sunny5-config.* sunny5@192.168.100.150:/home/sunny5/git/evcc/
    rsync --progress -e "ssh -i ~/.ssh/S5B" sunny5-discovery.js sunny5@192.168.100.150:/home/sunny5/git/evcc/
    rsync --progress -e "ssh -i ~/.ssh/S5B" get_latest_release.sh sunny5@192.168.100.150:/home/sunny5/git/evcc/
    rsync --progress -e "ssh -i ~/.ssh/S5B" version.txt sunny5@192.168.100.150:/home/sunny5/git/evcc/
    exit
}

function deployRemote {
    env GOOS=linux GOARCH=arm make
    rsync -av -e "ssh -A -J hub.sunny5.de:2222" evcc evcc.sunny5.yaml build-sunny5-config.* sunny5-discovery.js sunny5@$2:/home/sunny5/git/evcc/ --progress --partial
    exit
}

# check if command line argument is empty or not present
if [ "$1" == "" ] && [ "$2" == "" ]; then
    echo
    echo 'deploy.sh needs two command line arguments, local/remote and subdomain!'
    echo 'example 1: ./deploy.sh local mark'
    echo 'example 2: ./deploy.sh remote mark'
    echo
    exit
fi

if [ "$1" == "" ] || [ "$1" == "local" ]; then
        echo "Ok, deploying to local network..."
        deployLocal "$1" "$2"
else
        echo "Ok, deploying to remote host: $2.sunny5.de"
        deployRemote "$1" "$2"
fi

