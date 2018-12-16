import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class Flight extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        zoom={14}
        initialCenter={{ lat: -1.23, lng: 36.2 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apikey: `${process.env.MAPS_API_KEY}`
})(Flight);
