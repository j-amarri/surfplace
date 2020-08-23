import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import loadBoard from './../../services/board.js';

class SingleBoardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      boards: []
    };
  }

  render() {
    return (
      <>
        <div className="header-image">
          <h1>Surf Boards</h1>
        </div>
        {/* <div className="boards-list">
          <BoardCard {...board} key={board._id} />
        </div> */}
      </>
    );
  }
}
export default SingleBoardView;
