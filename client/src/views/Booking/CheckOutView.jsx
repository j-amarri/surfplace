import React, { Component } from 'react';
import CheckoutForm from './../../components/CheckOutForm';

class CheckoutView extends Component {
  handleCheckout = () => {
    console.log('checking out');
  };

  render() {
    return (
      <div className="checkout-container">
        <h1>Board checkout view</h1>
        <CheckoutForm onCheckout={this.handleCheckout} />
      </div>
    );
  }
}

export default CheckoutView;
