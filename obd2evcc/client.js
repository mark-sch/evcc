var obd2evcc = require('./obd2evcc/obd2evcc.js');
var conchecker = require('./conchecker/conchecker.js');
var configs = require('./config.js').obd2evcc;

if (configs.length == 0) {
    console.log('No Sunny5-Smartplug dongle configured, nothing to do.');
    process.exit(0);
}

if (configs.length > 1) {
    console.log('More than one Smartplug dongle configured, starting only with first config item...');
    console.log('');
}
var config = configs[0];
const port = config.port;
const host = config.host;
const vehicle_type = config.vehicle_type;
const vehicle_wltp = config.vehicle_wltp;
const vehicle_name = config.name;
const mqtt_server = config.mqtt_server;
const local_wifi_device = config.local_wifi_device;

if (config.mode == 'AP') {
    const checker = conchecker.createChecker(local_wifi_device, 'sunny5-smartplug', host, port);

    setInterval(() => {
        //run wifi checker 
        checker.check();
    }
    , 10 * 1000);
}

// run obd2evcc client
let objODB = new obd2evcc(vehicle_type, vehicle_name, vehicle_wltp, host, port, mqtt_server);
objODB.startClient(vehicle_type);

console.log('********************************************');
console.log();