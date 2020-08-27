import React, { Component } from 'react';
import Map from './../components/Map/index';

class MapView extends Component {
  render() {
    // const boardsToShow = this.filteredBoardsList;
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
            <a href="/">List</a>
          </div>
        </div>
        {/* <SizeSlider /> */}
        <div className="boards-list">
          {/* {boardsToShow.map(board => (
            <BoardCard {...board} key={board._id} />
          ))} */}
        </div>
        <div className="map" style={{ width: '100%' }}>
          <Map />
        </div>
      </div>
    );
  }
}

export default MapView;
