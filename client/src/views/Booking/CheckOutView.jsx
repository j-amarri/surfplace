import React, { Component } from 'react';
import { loadMe } from './../../services/authentication';

class CheckoutView extends Component {
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
    loadMe()
      .then(data => {
        this.setState({
          user: data.user
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleCheckout = () => {
    console.log('checking out');
    this.props.history.push(`/confirmation`);
  };

  render(props) {
    return (
      <div className="checkout-container">
        <h1>Board checkout view</h1>
        <form onSubmit={this.handleCheckout} className="rent-link">
          <button>Rent Board</button>
        </form>
      </div>
    );
  }
}

export default CheckoutView;
