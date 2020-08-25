import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      address: '',
      city: '',
      area: '',
      state: '',
      zoom: 15,
      mapPosition: {
        lat: 0,
        lng: 0
      },
      markerPosition: {
        lat: 0,
        lng: 0
      }
    };
  }

  getCity = addressArray => {
    let city = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        'administrative_area_level_2' === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };

  getState = addressArray => {
    let state = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        'administrative_area_level_1' === addressArray[i].types[0]
      ) {
        state = addressArray[i].long_name;
        return state;
      }
    }
  };

  onMarkerDragEnd = event => {
    let newLat = event.latLng.lat();
    let newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      response => {
        console.log('response', response);
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components;
        const city = this.getCity(addressArray);
        const state = this.getState(addressArray);

        this.setState({
          address: address ? address : '',
          city: city ? city : '',
          state: state ? state : '',
          markerPosition: {
            lat: newLat,
            lng: newLng
          },
          mapPosition: {
            lat: newLat,
            lng: newLng
          }
        });
      },
      error => {
        console.log(error);
      }
    );
  };

  render() {
    const MapWithAMarker = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng
          }}
        >
          <Marker
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng
            }}
          >
            <InfoWindow>
              <div>
                <p>Lat: {this.state.markerPosition.lat}</p>
                <p>Lon: {this.state.markerPosition.lng}</p>
              </div>
            </InfoWindow>
          </Marker>
        </GoogleMap>
      ))
    );
    return (
      <div>
        <MapWithAMarker
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default MapContainer;
