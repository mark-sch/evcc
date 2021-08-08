#!/bin/bash

node build-smartplug-config.js

function norestart {
   printf "Ok, the service will not be restarted.\n\n"
   exit
}

function restartSmartplug {
   printf "\nRestarting smartplug service now...\n"
   pm2 restart sunny5smartplug

   sleep 1

   printf "\nDone!"
   printf "\n"
   printf "!!! Take a look into the SMARTPLUG EVENTLOG and check ioBroker mqtt data for correct soc data !!!\n"
}


printf "\n"
while true; do
    read -p "Do you wish to restart the smartplug service? " yn
    case $yn in
        [Yy]* ) restartSmartplug; break;;
        [Nn]* ) norestart; break;;
        * ) echo "Please answer yes or no. ";;
    esac
done
