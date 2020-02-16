import React, { useEffect, useState } from 'react';
import './App.css';

import NavigationHeader from './NavigationHeader';
import MapContainer from './MapContainer'
import DevicesContainer from './DevicesContainer'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [ beacons ] = useState([ ]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
    }, 1000);
    return () => clearInterval(interval);
  }, []); // 2nd arg as [] means prop/state doesnt matter for rendering

  return (
    <div className='App'>
      <NavigationHeader />
      <MapContainer />
      <DevicesContainer />
    </div>
  );
}

export default App;

/*
    setTimeout(1000, () => {
      console.log('test');
      fetch('http://localhost:8080/', { headers: myHeaders })
      .then(ad => {
        console.log('boo');
        if (this.state.beacons.length > 0) {
          this.state.beacons.forEach(b => {
            if (ad.id !== b.id) {
              console.log(ad.id + ' added');
              this.setState({ beacons: [...this.state.beacons, b] });
            }
          });
        } else {
          console.log(ad);
          this.setState({ beacons: [ad] });
        }
      })
      .catch(err => {
        console.log(err);
      })
    })
    */
