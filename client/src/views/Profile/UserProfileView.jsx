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
    listBoards()
      .then(data => {
        this.setState({
          boards: data.boards
        });
      })
      .catch(error => {
        console.log(error);
      });

    loadMe()
      .then(data => {
        this.setState({
          user: data.user,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.boards);
    return (
      <div>
        {this.state.loaded && (
          <>
            <h3>Your details</h3>
            <h2>{this.state.user.name}</h2>
            <h3>Your boards</h3>
            <div className="boards-list">
              /// filter array based on owner?
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
