import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  loadBoard,
  deleteBoard,
  listBoards,
  boardBooked
} from './../../services/board';
import { createOrder } from './../../services/order';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SingleBoardView.scss';

import moment from 'moment';

class SingleBoardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      board: null,
      startDate: null,
      endDate: null,
      bookedDates: []
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    let board = null;
    loadBoard(id)
      .then(data => {
        board = data.board;
        return boardBooked(id);
      })
      .then(data => {
        const bookedDates = data.booked.map(date => moment(date).toDate());
        this.setState({ bookedDates, board, loaded: true });
      })
      .catch(error => {
        console.log(error);
      });

    // call service to retrieve orders >>> listOrders()
    // filter the order relevant to this board only
    // extract booked dates
    // push results into array
  }

  onChange = dates => {
    const [start, end] = dates;
    this.setState({ startDate: start, endDate: end });
  };

  handleOrderCreation = event => {
    event.preventDefault();
    // information from board, user ID, start/end date
    const product = this.state.board._id;
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;
    const user = this.props.user._id;
    const body = { product, startDate, endDate, user };
    createOrder(body).then(newOrder => {
      this.props.history.push(`/order/${newOrder._id}`);
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
    if (board) {
      console.log(board.owner._id);
      console.log(this.props.user._id);
    }

    return (
      <>
        <div className="single-board-view">
          {(this.state.loaded && (
            <>
              <div className="single-header">
                <h1>{board.name}</h1>
              </div>
              <div className="single-board-image">
                {board.picture && (
                  <img src={board.picture} alt={board.name} width="100%" />
                )}
              </div>
              <div className="description">
                <h5>Description</h5>
                <p>{board.description}</p>
              </div>

              <div className="description">
                <h5>Owner</h5>
                <Link to={`/profile/${board.owner._id}`}>
                  <em>{board.owner.name}</em>
                </Link>
              </div>

              <div className="reviews">
                <p>
                  <span role="img">⭐️⭐️⭐️⭐️⭐️</span> 4.6 (5 ratings)
                </p>
              </div>

              <h2>{board.size}"</h2>

              <h2>
                <span>€{board.price.amount}</span> / Day
              </h2>

              <div className="booking-calendar">
                <p>Choose date(s)</p>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.onChange}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  excludeDates={this.state.bookedDates}
                  //excludeDates={['2020-08-02T16:42:33.647+00:00']}
                  selectsRange
                  inline
                />
              </div>
              <div>
                <form onSubmit={this.handleOrderCreation} className="rent-link">
                  <button>Rent Board</button>
                </form>
                {this.props.user._id === board.owner._id && (
                  <>
                    <button className="edit-button">
                      <Link to={`/board/${this.props.match.params.id}/edit`}>
                        ✏️ Edit board
                      </Link>
                    </button>
                    <form onSubmit={this.handleBoardDelete}>
                      <button className="delete-button">🗑 Delete board</button>
                    </form>
                  </>
                )}
                <div>
                  <p>Reviews</p>
                  <form action="/" method="post">
                    <div>
                      <textarea>Hey... say something!</textarea>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )) || <p>Loading...</p>}
        </div>
      </>
    );
  }
}
export default SingleBoardView;
