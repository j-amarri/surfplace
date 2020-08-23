import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadBoard } from './../../services/board';

class SingleBoardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      board: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    loadBoard(id)
      .then(data => {
        const board = data.board;
        this.setState({
          board,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const board = this.state.board;
    return (
      <>
        <div className="single-board-view">
          {(this.state.loaded && (
            <>
              {board.picture && (
                <img
                  className="single-board-image"
                  src={board.picture}
                  alt={board.name}
                  width="100%"
                />
              )}
              <div className="single-board-details">
                <div>
                  <h1>{board.name}</h1>
                  <h2>{board.size}'</h2>
                </div>
                <em>by {board.owner}</em>
                <p>{board.description}</p>
                <div className="review-price">
                  <p>⭐️⭐️⭐️⭐️⭐️ 4.6 (5 ratings)</p>
                  <h2>
                    <span>€{board.price}</span> / Day
                  </h2>
                </div>
              </div>
              <div className="buttons">
                <Link to={`/checkout`} className="rent-link">
                  Rent board
                </Link>
                <Link
                  to={`/board/${this.props.match.params.id}/edit`}
                  className="edit-link"
                >
                  ✏️ Edit board
                </Link>
                <Link to={`/`} className="delete-link">
                  🗑 Delete board
                </Link>
              </div>
            </>
          )) || <p>Loading...</p>}
        </div>
      </>
    );
  }
}
export default SingleBoardView;
