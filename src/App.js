import React from 'react';
import './App.css';

import NavigationHeader from './NavigationHeader';
import MapContainer from './MapContainer'
import DevicesContainer from './DevicesContainer'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavigationHeader />
      <MapContainer />
      <DevicesContainer />
    </div>
  );
}

export default App;
