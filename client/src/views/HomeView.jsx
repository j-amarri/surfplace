import React, { Component } from 'react';
import { listBoards } from './../services/board';
import BoardCard from './../components/BoardCard';

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

  render() {
    return (
      <>
        <div className="header-image">
          <h1>Surf Boards</h1>
        </div>
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
