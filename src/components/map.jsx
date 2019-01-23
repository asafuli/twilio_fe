import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import SideBar from './sideBar';
import styled from 'styled-components';

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      className={props.className}
      defaultZoom={10}
      defaultCenter={{ lat: 47.9429235, lng: 8.4708546 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 47.9429235, lng: 8.4708546 }} />
      )}
    </GoogleMap>
  ))
);

const StyledMapComponent = styled(MyMapComponent)`
  width: 200px;
  height: 260px;
  float: right;
`;

const StyledSideBar = styled(SideBar)`
  float: left;
`;

const Map = props => {
  return (
    <div className='gallery map-container'>
      <StyledSideBar className='styled-side-bar' />
      <StyledMapComponent
        className='styled-map-component'
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
          process.env.REACT_APP_MAPS_API_KEY
        }&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `700px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default Map;
