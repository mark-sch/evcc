var configs = require('./config.js').obd2evcc;
var obd2evcc = require('./obd2evcc/obd2evcc.js');
var instances = [];

if (configs.length == 0) {
    console.log('No Sunny5-Smartplug dongle configured, nothing to do.');
    return;
}

configs.forEach(config => {
    instances.push(config);
    config.conchecker = require('./conchecker/conchecker.js');

    if (config.mode == 'AP') {
        config.checker = config.conchecker.createChecker(config.local_wifi_device, 'sunny5-smartplug', config.host, config.port);
    
        setInterval(() => {
            //run wifi checker 
            config.checker.check();
        }
        , 10 * 1000);
    }
    
    // run obd2evcc client
    config.objOBD = new obd2evcc(config.vehicle_type, config.name, config.vehicle_wltp, config.host, config.port, config.mqtt_server, config.mqtt_topic);
    config.objOBD.startClient(config.vehicle_type);
    
    console.log('********************************************');
    console.log();
});
