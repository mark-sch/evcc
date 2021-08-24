#!/bin/bash

function updateEVCC {
  cp evcc evcc.bin.backup
  wget https://github.com/mark-sch/evcc/releases/download/$VERSION/evcc_$VERSION\_linux_arm64.tar.gz -q --show-progress -O evcc.tar.gz
  tar -xzf evcc.tar.gz
  rm evcc.tar.gz

  echo 
  echo Update complete!
  echo 
  echo Installed version:
  echo $VERSION > version.txt
  cat version.txt
  echo 
  echo You need to restart the evcc.service now for any changes to take effect.
}


echo
echo EV Charge Controller Update:
echo ======================================
echo 
echo Installed version:
cat version.txt
echo 

VERSION=$(curl -s https://github.com/mark-sch/evcc/releases/latest/download 2>&1 | grep -Po [0-9]+\.[0-9]+\.[0-9]+)
echo Available version: 
echo $VERSION
echo 

echo Caution: Please consider that you might need to update the evcc.yaml config file manually after an update.
echo 

while true; do
    read -p "Do you want to download and install the available version now [y/n]? " yn
    case $yn in
        [Yy]* ) updateEVCC; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no. ";;
    esac
done
