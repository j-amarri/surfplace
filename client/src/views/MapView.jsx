import React, { Component } from 'react';
import MapContainer from './../components/GoogleMap/index';

class MapView extends Component {
  render() {
    return (
      <div>
        <div className="header-map-image">
          <h1>Find a board</h1>
        </div>
        <div className="map" style={{ width: '100%' }}>
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default MapView;
