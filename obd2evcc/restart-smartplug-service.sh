#!/bin/bash

function quit {
   printf "\nAbort! The service was not restarted.\n"
   exit
}

function restart {
   printf "\nRestarting Smartplug service now...\n"
   pm2 restart sunny5smartplug

   sleep 1

   printf "\nDone!\n"
}

printf "\n"
while true; do
    read -p "Do you really wish to restart the Smartplug service [y/n]? " yn
    case $yn in
        [Yy]* ) restart; break;;
        [Nn]* ) quit;;
        * ) echo "Please answer yes or no. ";;
    esac
done
