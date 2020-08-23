import React, { Component } from 'react';
import WrappedMap from './../components/GoogleMap';

class MapView extends Component {
  render() {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <h1>MAP VIEW</h1>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=GOOGLE_MAPS_API_KEY`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}

export default MapView;
