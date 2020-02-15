const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();

const key = 'AIzaSyBcHWqAV0IFoTYNfTRoP_h0xB7nY3uLUVA';

function calculateDistance(rssi) {
    const N = 4; // ((txPower – rssi) / (10 * N))
    let txPower = -56;
    return Math.pow(10, (txPower - rssi) / (10 * N));
}

let beacons = {
    'dd9b49e9cb7c49668d3d5fc6d4e68d4c': 1,
    'e7cf8694a0ef425999034074b544a7df': 2
}

scanner.onadvertisement = (ad) => {
    if (ad.beaconType != 'iBeacon') {
        if (ad.rssi !== undefined && ad.eddystoneUrl['txPower'] !== undefined)
            console.log('beacon: ' + beacons[ad.id] + '\tdistance: ' + calculateDistance(ad.rssi) + '\t rssi: ' + ad.rssi);
    }
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