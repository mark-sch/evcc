var dns = require('dns');

async function reverseLookup(ip) {
	dns.reverse(ip, async function(err, domains){
		if(err!=null)	callback(err);

		domains.forEach(async function(domain){
			await dns.lookup(domain,function(err, address, family){
				console.log(domain,'[',address,']');
				console.log('reverse:',ip==address);
			});
		});
	});
}

async function dnsReverse(strIP) {
    console.log("start");
    
    import('dns').then(async (dns) => {
        try {
            console.log(await dns.promises.reverse(strIP));
        }
        catch(ex) {};
        console.log("end");
    });
    
    
}

dnsReverse('192.168.0.114');