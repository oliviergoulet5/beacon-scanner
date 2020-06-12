const BeaconScanner = require('node-beacon-scanner');
const scanner = new BeaconScanner();

const HTTP_PORT = process.env.HTTP_PORT || 8080;

let express = require('express');
let app = express();

var cors = require('cors');
app.use(cors());

function calculateDistance(rssi) {
    const N = 4; 
    let txPower = -56;
    return Math.pow(10, (txPower - rssi) / (10 * N));
}

let beacons = {
    'dd9b49e9cb7c49668d3d5fc6d4e68d4c': 1,
    'e7cf8694a0ef425999034074b544a7df': 2
}

scanner.startScan().then(() => {
    console.log('Started to scan.')  ;
}).catch(error => {
    console.error(error);
});

// Routes
app.get('/', cors(), (req, res) => {
    let promise = new Promise((resolve, reject) => {
        scanner.onadvertisement = (ad) => {
            if (ad.beaconType !== 'iBeacon') {
                if (ad.rssi !== undefined && ad.eddystoneUrl['txPower'] !== undefined) {
                    console.log('beacon: ' + beacons[ad.id] + '\tdistance: ' + calculateDistance(ad.rssi) + '\t rssi: ' + ad.rssi);
                    resolve(ad);
                }
            }
        }
    })
    .then(ad => {
        scanner.onadvertisment = null;
        console.log('Scanning paused');
        res.json(ad);
    });
});

app.listen(HTTP_PORT, () => {
    console.log('Listening on port ' + HTTP_PORT);
})

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