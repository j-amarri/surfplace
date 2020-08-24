import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadBoard, deleteBoard } from './../../services/board';
import { RangeDatePicker } from '@y0c/react-datepicker';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import 'moment/locale/ko';

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

  onChange = date => {
    console.log(date);
  };

  handleBoardDelete = event => {
    event.preventDefault();
    const id = this.props.match.params.id;

    deleteBoard(id)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const board = this.state.board;

    return (
      <>
        <div className="single-board-view">
          {(this.state.loaded && (
            <>
              <div className="single-board-image">
                {board.picture && (
                  <img src={board.picture} alt={board.name} width="100%" />
                )}
              </div>
              <div className="single-board-details">
                <div>
                  <h1>{board.name}</h1>
                  <h2>{board.size}'</h2>
                </div>
                <Link to={`/profile/${board.owner}`}>
                  <em>by {board.owner}</em>
                </Link>
                <p>{board.description}</p>
                <div className="review-price">
                  <p>⭐️⭐️⭐️⭐️⭐️ 4.6 (5 ratings)</p>
                  <h2>
                    <span>€{board.price}</span> / Day
                  </h2>
                </div>
              </div>
              <div className="booking-calendar">
                <p>Choose date(s)</p>

                <RangeDatePicker locale="ko" onChange={this.onChange} />
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
                <form onSubmit={this.handleBoardDelete}>
                  <button>🗑 Delete board</button>
                </form>
              </div>
              <div>
                <p>Reviews</p>
              </div>
            </>
          )) || <p>Loading...</p>}
        </div>
      </>
    );
  }
}
export default SingleBoardView;
