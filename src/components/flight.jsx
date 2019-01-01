import React from 'react';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import Tracker from './flightTracker';

const Flight = props => {
  return (
    <div className='flight-container'>
      <Tracker />
    </div>
  );
};

export default Flight;
