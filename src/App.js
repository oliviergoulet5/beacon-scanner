import React from 'react';
import './App.css';

import NavigationHeader from './NavigationHeader';
import MapContainer from './MapContainer'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavigationHeader />
      <MapContainer />
    </div>
  );
}

export default App;
