const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();

console.log(scanner);

function calculateDistance(rssi, txPowerNeg) {
    const N = 3; // ((txPower – rssi) / (10 * N))
    let txPower = txPowerNeg * -1;
    return Math.pow(10, (txPower - rssi) / (10 * N));
}

scanner.onadvertisement = (ad) => {
    if (ad.beaconType != 'iBeacon') {
        console.log(JSON.stringify(ad, null, '  '));
        console.log(ad.id);
    }
    
    console.log("Distance: ");
    if (ad.rssi !== undefined && ad.eddystoneUrl.txPower !== undefined)
        console.log(calculateDistance(ad.rssi, -21));
};

scanner.startScan().then(() => {
    console.log('Started to scan.')  ;
}).catch((error) => {
    console.error(error);
});

/*
{
  "id": "c6debed8f549",
  "address": "c6:de:be:d8:f5:49",
  "localName": null,
  "txPowerLevel": null,
  "rssi": -59, // signal strength
  "beaconType": "eddystoneUrl",
  "eddystoneUrl": {
    "txPower": -35,
    "url": "http://go.esti.be/"
  }
}
*/