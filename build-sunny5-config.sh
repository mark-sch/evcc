#!/bin/bash

export LANGUAGE=en #important for arp -a to work correctly
node build-sunny5-config.js  evcc.sunny5.yaml ../Sunny5Lib/config.js

function norestart {
   printf "Ok, the service will not be restarted.\n\n"
   exit
}

function restartEvcc {
   printf "\nRestarting evcc.service now...\n"
   sudo systemctl restart evcc.service

   sleep 1

   printf "\nDone!"
   sudo systemctl status evcc.service
   printf "\n"
   printf "!!! Take a look into the EVCC EVENTLOG to check proper operation (Link inside Account Menu) !!!\n"
}

function restartSunny5Reader {
   printf "\nRestarting sunny5reader now...\n"
   pm2 restart sunny5reader

   sleep 1


   printf "\nDone!"
}

printf "\n"
while true; do
    read -p "Do you wish to restart the evcc.service? " yn
    case $yn in
        [Yy]* ) restartEvcc; break;;
        [Nn]* ) norestart; break;;
        * ) echo "Please answer yes or no. ";;
    esac
done

printf "\n"
while true; do
    read -p "Do you wish to restart the Sunny5-Reader service (inverter communication)? " yn
    case $yn in
        [Yy]* ) restartSunny5Reader; break;;
        [Nn]* ) norestart; break;;
        * ) echo "Please answer yes or no. ";;
    esac
done