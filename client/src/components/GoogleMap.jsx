import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import Geocode from 'react-geocode';
import AutoComplete from 'react-google-autocomplete';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

class MapContainer extends Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState(
          {
            mapPosition: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            },
            markerPosition: {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
          },
          () => {
            Geocode.fromLatLng(
              position.coords.latitude,
              position.coords.longitude
            ).then(
              response => {
                const address = response.results[0].formatted_address,
                  addressArray = response.results[0].address_components;
                const city = this.getCity(addressArray);
                this.setState({
                  address: address ? address : '',
                  city: city ? city : ''
                });
              },
              error => {
                console.log(error);
              }
            );
          }
        );
      });
    } else {
      console.error('Geolocation is not supported by this browser!');
    }
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

  onMarkerDragEnd = event => {
    let newLat = event.latLng.lat();
    let newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      response => {
        console.log('response', response);
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components;
        const city = this.getCity(addressArray);

        this.setState({
          address: address ? address : '',
          city: city ? city : '',
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

  onPlaceSelected = place => {
    const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();
    this.setState({
      address: address ? address : '',
      city: city ? city : '',
      markerPosition: {
        lat: latValue,
        lng: lngValue
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue
      }
    });
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
          <AutoComplete
            style={{
              width: '100%',
              height: '50px',
              paddingLeft: 16,
              marginTop: 2,
              marginBottom: '2rem'
            }}
            onPlaceSelected={this.onPlaceSelected}
            types={['address']}
          />
          <Marker
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            onChange={
              this.props.getUserLocation
                ? this.props.getUserLocation(this.state.markerPosition)
                : ''
            }
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
