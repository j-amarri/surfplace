import React, { Component } from 'react';

class CheckoutView extends Component {
  handleCheckout = () => {
    console.log('checking out');
  };

  render() {
    return (
      <div className="checkout-container">
        <h1>Board checkout view</h1>
      </div>
    );
  }
}

export default CheckoutView;
