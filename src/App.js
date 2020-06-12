import React, { Component, useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

import NavigationHeader from './NavigationHeader';
import MapContainer from './MapContainer'
import DeviceContainer from './DeviceContainer'
import DeviceCard from './DeviceCard';

import 'bootstrap/dist/css/bootstrap.min.css';

let cardNum = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { beacons: [] };
  }

  componentDidMount() {
    fetch('https://radiant-sands-83001.herokuapp.com/')
    .then(ad => {
      if (this.state.beacons.length > 0) {
        this.state.beacons.forEach(b => {
          if (ad.id !== b.id) {
            this.setState({ beacons: [...this.state.beacons, b] });
          }
        });
      } else {
        this.setState({ beacons: [ad] });
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
  

  componentDidUpdate() {
    const interval = setInterval(() => {
      console.log('This will run every second!');
    }, 1000);
    return () => clearInterval(interval);
  }

  render() {
    return (
      <div className='App'>
        <NavigationHeader />
        <Container fluid={true} style={{ margin: 0, padding: 0 }}>
          <Row noGutters={false} mh='100'>
            <Col fluid={true}>
              <MapContainer />
            </Col>
            <Col md='3' fluid={true}>
              <DeviceContainer style={{ backgroundColor: '#f00' }}>
              </DeviceContainer>
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
              <DeviceCard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
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