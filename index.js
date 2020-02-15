const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();

console.log(scanner);

scanner.onadvertisement = (ad) => {
    if (ad.beaconType != 'iBeacon')
        console.log(JSON.stringify(ad, null, '  '));
};

scanner.startScan().then(() => {
    console.log('Started to scan.')  ;
}).catch((error) => {
    console.error(error);
});