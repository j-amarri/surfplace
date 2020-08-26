import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.scss';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 38.717393,
      lng: -9.140821
    },
    zoom: 14
  };

  render() {
    // const center = {
    //   // lng: this.props.coordinates[0],
    //   // lat: this.props.coordinates[1]
    //   lat: 38.717393,
    //   lng: -9.140821
    // };
    return (
      <div style={{ height: '60vh', width: '60vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this.props.handleClick}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default Map;

// {this.props.markers &&
//   this.props.markers.map(marker => (
//     <Marker
//       key={marker._id}
//       id={marker._id}
//       lat={marker.lat}
//       lng={marker.lng}
//       price={marker.price}
//     />
//   ))}
