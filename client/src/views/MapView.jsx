import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { listBoards } from './../services/board';
import Marker from './../components/Marker';

class MapView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      boards: []
    };
  }
  static defaultProps = {
    center: {
      lat: 38.717393,
      lng: -9.140821
    },
    zoom: 6
  };

  componentDidMount() {
    listBoards()
      .then(data => {
        const boards = data;
        this.setState({
          boards,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // const boardsToShow = this.filteredBoardsList;
    if (this.state.loaded) {
      console.log(this.state);
    }
    return (
      <div>
        <div className="header-map-image">
          <h1>Find a board</h1>
        </div>
        <div className="filter-options">
          <div className="filter-dropdown">
            <select
              name="filter-level"
              id="filter-level"
              onChange={this.filterByLevel}
            >
              <option value="">Level</option>
              <option value="All levels">All levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Professional">Professional</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <select
              name="filter-model"
              id="filter-model"
              onChange={this.filterByModel}
            >
              <option value="">All models</option>
              <option value="Fish">Fish</option>
              <option value="Shortboard">Shortboard</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Gun">Gun</option>
              <option value="Funboard">Funboard</option>
              <option value="Longboard">Longboard</option>
            </select>
          </div>
          <div className="map-link">
            <a href="/rent">List</a>
          </div>
        </div>
        {this.state.loaded && (
          <div style={{ height: '60vh', width: '60vh' }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              onClick={this.props.handleClick}
            >
              {this.state.boards.map(board => (
                <Marker
                  key={board._id}
                  lat={board.location.coordinates[0]}
                  lng={board.location.coordinates[1]}
                />
              ))}
            </GoogleMapReact>
          </div>
        )}

        {/* <div className="map" style={{ width: '100%' }}>
          <Map />
        </div> */}
      </div>
    );
  }
}

export default MapView;
