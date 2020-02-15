import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { render } from '@testing-library/react';

const mapStyles = {
    width: '100%',
    height: '100%'
  };

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: -1.2884,
                    lng: 36.8233
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBcHWqAV0IFoTYNfTRoP_h0xB7nY3uLUVA'
})(MapContainer);