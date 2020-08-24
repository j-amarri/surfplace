import React, { Component } from 'react';
import { loadMe } from './../../services/authentication';
import { listBoards } from './../../services/board';
import BoardCard from '../../components/BoardCard';

class UserProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      boards: [],
      user: null
    };
  }

  componentDidMount() {
    loadMe()
      .then(data => {
        this.setState({
          user: data.user
        });
      })
      .catch(error => {
        console.log(error);
      });

    listBoards()
      .then(data => {
        const ownerBoards = data.boards.filter(
          board => board.owner === this.state.user._id
        );
        this.setState({
          boards: ownerBoards,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.loaded && (
          <>
            <h3>Your details</h3>
            <h2>{this.state.user.name}</h2>
            <h3>Your boards</h3>
            <div className="boards-list">
              {this.state.boards.map(board => (
                <BoardCard {...board} key={board._id} />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default UserProfileView;
