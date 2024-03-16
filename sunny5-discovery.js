const http = require('http');
const zlib = require('zlib');
const username = 'admin';
const password = 'admin';

var deyeoptions = {
  hostname: '192.168.0.90',
  port: 80,
  path: '/status.html',
  auth: `${username}:${password}`
};

var luxoptions = {
  hostname: '192.168.0.45',
  port: 80,
  path: '/ap_set$.js',
  auth: `${username}:${password}`
};

function discoverDeye(options) {
    http.get(options, (res) => {
        var body = '';
      
        res.on('data', (chunk) => {
          body += chunk;
        });
      
        res.on('end', () => {
          const regex1 = /webdata_sn = "(\d+)"/;
          const regex2 = /cover_ap_ssid = "(AP_\d+)"/;
          const regex3 = /cover_sta_ssid = "(.*?)";/;
          const regex4 = /cover_sta_rssi = "(.*?)"/;
          
          const serial = String(body).match(regex1);
          const wifistick = String(body).match(regex2);
          const ssid = String(body).match(regex3);
          const rssi = String(body).match(regex4);
      
          if (serial) {
              const deye = wifistick[1] + " / " + serial[1] + " => " + ssid[1] + "@" + rssi[1];
              console.log('Found', options.hostname, '\t', options.mac, '\t', 'Deye-Hybrid-Inverter', '\t', deye);
          }
        });
      }).on('error', (error) => {
        //console.error(error);
    });      
}


function discoverLuxpower(options) {
  http.get(options, (res) => {
      const chunks = [];
    
      res.on('data', (chunk) => {
        chunks.push(chunk);
      });
    
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const regex1 = /var ap_ssid="(.*?)"/;

        const encoding = res.headers['content-encoding'];
        let body = buffer.toString();
        if (encoding === 'gzip') {
          zlib.gunzip(buffer, (err, decoded) => {
            //if (err) throw err;
            body = decoded.toString();
          });
        }
        
        const wifistick = String(body).match(regex1);
    
        if (wifistick) {
            const lux = wifistick[1];
            console.log('Found', luxoptions.hostname, '\t', luxoptions.mac, '\t', 'Luxpower-Hybrid-Inverter', '\t', lux);
        }
      });
    }).on('error', (error) => {
      //console.error(error);
  });      
}


function discoverInverter(strInverter, strHost, strMac) {
    if (strInverter == 'deye') {
      return new Promise((resolve) => {
        deyeoptions.hostname = strHost;
        deyeoptions.mac = strMac;
        discoverDeye(JSON.parse(JSON.stringify(deyeoptions)));
        resolve('Done')
      });
    }

    if (strInverter == 'lux') {
      return new Promise((resolve) => {
        luxoptions.hostname = strHost;
        luxoptions.mac = strMac;
        discoverLuxpower(JSON.parse(JSON.stringify(luxoptions)));
        resolve('Done')
      });
    }
}

module.exports = {
    discoverInverter
};