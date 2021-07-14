#!/bin/bash

function restartSmartplug {
  pm2 restart sunny5smartplug

  echo 
  echo Done!
  echo 
}

function updateSmartplug {
  MYPATH=$(basename "$pwd")
  if [[ MYPATH="obd2evcc" ]]
  then
    echo
  else
    mkdir obd2evcc
    cd obd2evcc
    echo created obd2evcc directory
    echo
  fi
  svn export https://github.com/mark-sch/evcc/trunk/obd2evcc ./ --force

  echo 
  echo Update complete!
  echo 
  echo Installed version:
  echo $VERSION > version.txt
  cat version.txt
  echo 
  echo You need to restart the service for any changes to take effect.
  echo

  while true; do
    read -p "Do you want to restart the Sunny5-Smartplug service now? " yn
    case $yn in
        [Yy]* ) restartSmartplug; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no. ";;
    esac
  done
}


echo
echo Smartplug-Service Update:
echo ======================================
echo 
echo Installed version:
cat version.txt 2>/dev/null
echo 

VERSION=$(svn info https://github.com/mark-sch/evcc/trunk/obd2evcc 2>&1 | grep -Po 'Rev: [0-9]+' | grep -Po [0-9]+)
echo Available version: 
echo $VERSION
echo 

while true; do
    read -p "Do you want to download and install the available version now? " yn
    case $yn in
        [Yy]* ) updateSmartplug; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no. ";;
    esac
done