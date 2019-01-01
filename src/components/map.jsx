import React from 'react';
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 47.9429235, lng: 8.4708546 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 47.9429235, lng: 8.4708546 }} />
      )}
    </GoogleMap>
  ))
);

const Map = props => {
  return (
    <div className='map-container'>
      <MyMapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
          process.env.REACT_APP_MAPS_API_KEY
        }&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Map;
