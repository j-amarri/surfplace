import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.scss';
import Marker from './../Marker';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 38.717393,
      lng: -9.140821
    },
    zoom: 6
  };

  render() {
    console.log(this.props);
    let center;
    if (this.props.latitude) {
      center = {
        lng: this.props.longitude,
        lat: this.props.latitude
      };
    } else {
      center = this.props.center;
    }
    return (
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={center}
          defaultZoom={this.props.zoom}
          onClick={this.props.handleClick}
        >
          {this.props.latitude && (
            <Marker
              icon="/logo.png"
              lat={this.props.latitude}
              lng={this.props.longitude}
              text="My Marker"
            />
          )}
        </GoogleMapReact>
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
