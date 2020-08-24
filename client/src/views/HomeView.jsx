import React, { Component } from 'react';
import SizeSlider from './../components/SizeSlider';
import { listBoards } from './../services/board';
import BoardCard from './../components/BoardCard';
import { NotExtended } from 'http-errors';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      boards: []
    };
  }

  componentDidMount() {
    listBoards()
      .then(data => {
        const boards = data.boards;
        this.setState({
          boards,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  filterByLevel = event => {
    const level = event.target.value;
    listBoards()
      .then(data => {
        const filteredBoards = data.boards.filter(
          board => board.level === level
        );
        this.setState({
          boards: filteredBoards,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  filterByModel = event => {
    const model = event.target.value;
    listBoards()
      .then(data => {
        const filteredBoards = data.boards.filter(
          board => board.model === model
        );
        this.setState({
          boards: filteredBoards,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <div className="header-image">
          <h1>Surf Boards</h1>
        </div>
        <div className="map-link">
          <a href="/map">🗺 Map</a>
        </div>
        <div className="filter">
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
        </div>
        <SizeSlider />
        <div className="boards-list">
          {this.state.boards.map(board => (
            <BoardCard {...board} key={board._id} />
          ))}
        </div>
      </>
    );
  }
}

export default HomeView;
