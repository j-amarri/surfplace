import React, { Component } from 'react';

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

  handleCheckout = () => {
    console.log('checking out');
  };

  render(props) {
    return (
      <div className="checkout-container">
        <h1>Board checkout view</h1>
        <p>{props.name}</p>
      </div>
    );
  }
}

export default CheckoutView;
