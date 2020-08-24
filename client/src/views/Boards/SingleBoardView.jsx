import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadBoard, deleteBoard } from './../../services/board';
import { createOrder } from './../../services/order';
import { RangeDatePicker } from '@y0c/react-datepicker';
import '@y0c/react-datepicker/assets/styles/calendar.scss';
import 'moment/locale/ko';

class SingleBoardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      board: null,
      startDate: null,
      endDate: null
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

  onChange = (...data) => {
    const startDate = data[0];
    const endDate = data[1];
    this.setState({ startDate, endDate });
  };

  handleOrderCreation = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    // information from board, user ID, start/end date
    const product = this.state.board._id;
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;
    const user = this.props.user._id;
    const body = { product, startDate, endDate, user };
    createOrder(body).then(newOrder => {
      console.log(newOrder);
      this.props.history.push(`/checkout/${newOrder._id}`);
    });
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
                <Link to={`/profile/${board.owner._id}`}>
                  <em>by {board.owner.name}</em>
                </Link>
                <p>{board.description}</p>
                <div className="review-price">
                  <p>
                    {' '}
                    <span role="img">⭐️⭐️⭐️⭐️⭐️</span> 4.6 (5 ratings)
                  </p>
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
                <form onSubmit={this.handleOrderCreation} className="rent-link">
                  <button>Rent Board</button>
                </form>
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
