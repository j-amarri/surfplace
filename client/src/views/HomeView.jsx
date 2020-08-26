import React, { Component } from 'react';
// import SizeSlider from './../components/SizeSlider';
import { listBoards } from './../services/board';
import BoardCard from './../components/BoardCard';
import { Link } from 'react-router-dom';

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      boards: [],
      model: null,
      size: null,
      level: null
    };
  }

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

  filterByLevel = event => {
    const level = event.target.value;
    this.setState({ level });
  };

  filterByModel = event => {
    const model = event.target.value;
    this.setState({ model });
  };

  get filteredBoardsList() {
    const model = this.state.model;
    const level = this.state.level;
    const size = this.state.size;
    return this.state.boards
      .filter(board => (model ? board.model === model : true))
      .filter(board => (size ? board.size === size : true))
      .filter(board => (level ? board.level === level : true));
  }

  render() {
    const boardsToShow = this.filteredBoardsList;
    return (
      <>
        <div className="header-image">
          <h1>Surf Boards</h1>
        </div>

        <div className="filter-options">
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
          <div className="map-link">
            <a href="/map">Map</a>
          </div>
        </div>
        {/* <SizeSlider /> */}
        <div className="boards-list">
          {boardsToShow.map(board => (
            <BoardCard {...board} key={board._id} />
          ))}
        </div>

        <div className="host-board">
          <p>Make money with your surf boards!</p>
          <Link to="/board/add">
            <button>Host your board</button>
          </Link>
        </div>
      </>
    );
  }
}

export default HomeView;
