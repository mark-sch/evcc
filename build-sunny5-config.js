const SubnetsPinger = require('ping-subnet');
const subnetPinger = new SubnetsPinger();
const arp = require('@network-utils/arp-lookup');
const fs = require('fs');
var foundSunny5 = false;
var foundWB = false;
var round = 1;
var inverterIP, wallboxIP = '';
var arpTable;


subnetPinger.on('host:alive', async ip => {
  arpTable.forEach (item => {
    if (item.ip == ip && item.vendor == 'Shanghai Mxchip Information Tech Co, Ltd' && !foundSunny5) {
      console.log('Found', ip, '\t', item.mac, '\t', 'Sunny5-Hybrid-Inverter');
      foundSunny5 = true;
      inverterIP = ip;
    }
    if (item.ip == ip && item.vendor == 'Keba GmbH' && !foundWB) {
      console.log('Found', ip, '\t', item.mac, '\t', 'Keba / BMW Charge Plus Wallbox');
      foundWB = true;
      wallboxIP = ip;
    }
    if (item.ip == ip && String(item.mac).startsWith('c4:5b:be') && !foundWB) {
      console.log('Found', ip, '\t', item.mac, '\t', 'go-e Charger Wallbox');
      foundWB = true;
      wallboxIP = ip;
    }
    if (foundSunny5 && foundWB) subnetPinger.emit('ping:end');
  })
});


subnetPinger.on('ping:end', () => {
  if (foundSunny5 && foundWB) {
    console.log('');
    console.log('Wallbox and Sunny5-Hybrid-Inverter found, writing new config to ' + process.argv[2] + ' and ' + process.argv[3]);

    if (fillTemplateWriteConfig(process.argv[2], process.argv[3], inverterIP, wallboxIP)) {
      if (!fs.existsSync('./evcc.yaml')) {
        fs.copyFileSync(process.argv[2], './evcc.yaml');
        console.log('Initial setup, copying new config to final destination: evcc.yaml');
        console.log('*** Your setup completed successfully ***')
        console.log('You need to restart your Sunny5Reader and EVCC service now!');
        process.exit(8);
      }
      else {
        console.log('Previous evcc.yaml config file exists. You need to check and/or overwrite with evcc.sunny5.yaml manually and restart the service later on: cp evcc.sunny5.yaml evcc.yaml');
        process.exit(1)
      }
    } else {
      console.log('Error using template files', process.argv[2], 'and/or', process.argv[3], '- Check the templates.');
      process.exit(2);
    }
  }

  if (round < 2 ) {
    round++
    console.log('Not all devices found. Performing second attempt...')
    discover();
  } else {
    console.log('Unable to find all devices. Check hardware and make sure that your Wallbox, Sunny5-Hybrid-Inverter and Sunny5-Smartbox device are in the same network subnet.')
    process.exit(3);
  }

});


function fillTemplateWriteConfig(templateEvcc, templateSunny5, inverterIP, wallboxIP) {
  var template;
  //evcc config file
  try {
    template = fs.readFileSync(templateEvcc, 'utf8');
  }
  catch(err) {
    console.log (err);
    return false
  }
  var re = /(.*uri\:\s)(.*)(\:7090\s\#\swallbox\saddress.*)/;
  var newConfigEvcc = template.replace(re, '$1' + wallboxIP + '$3');
  try {
    fs.writeFileSync(templateEvcc, newConfigEvcc);
  }
  catch(err) {
    console.log (err);
    return false
  }

  //sunny5 config file
  try {
    template = fs.readFileSync(templateSunny5, 'utf8');
  }
  catch(err) {
    console.log (err);
    return false
  }
  re = /(.*host\:\s\')(.*)(\'\,.*)/;  
  var newConfigSunny5 = template.replace(re, '$1' + inverterIP + '$3');
  try {
    fs.writeFileSync(templateSunny5, newConfigSunny5);
  }
  catch(err) {
    console.log (err);
    return false
  }

  return true;
}

async function discover() {
  let arrPing = [];
  let count = 0;
  arpTable = await arp.getTable();
  arpTable.forEach(item => {
    //console.log('Found', item.mac, item.ip, item.vendor);
    if (String(item.mac).startsWith('c4:5b:be')) {
      item.vendor = 'go-e Charger';
    }
    if (item.vendor == 'Keba GmbH' || item.vendor == 'Shanghai Mxchip Information Tech Co, Ltd' || item.vendor == 'go-e Charger') {
      console.log('Trying to ping:', item.ip, '#', item.vendor); 
      arrPing.push(item.ip);
      count++;
    }
  });
  console.log('');

  if (count > 2) {
    console.log('NOTICE: Only one wallbox and inverter can be configured automatically. More units have been found, you need to configure evcc.yaml manually.');
    console.log('');
    console.log('Aborting config file builder now.');
    process.exit(0);
  }

  subnetPinger.ping();
}

function main() {
  console.log('');
  console.log('****************************************************');
  console.log('*** Sunny5-Smartbox config file builder, v1.4    ***');
  console.log('****************************************************');
  console.log('');

  if (process.argv.length !== 4) {
    console.log('Invalid command line arguments, specify two config files:');
    console.log('node build-sunny5-config.js evcc.sunny5.yaml ../Sunny5Lib/config.js')
    process.exit(1);
  }

  console.log('Discovering network devices to detect Wallbox and Sunny5-Hybrid-Inverter IPs, please wait a moment ....');
  console.log();

  discover();
}

main();
