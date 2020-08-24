import React, { Component } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import {
//   Elements,
//   ElementsConsumer,
//   CardElement
// } from '@stripe/react-stripe-js';
// const stripeApiPublicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

// const cardOptions = {
//   style: {
//     base: {
//       fontSize: '16px',
//       color: '#424770',
//       fontFamily: 'sans-serif',
//       padding: '16px'
//     },
//     invalid: {
//       color: '#c23d4b'
//     }
//   }
// };

class CheckoutForm extends Component {
  constructor() {
    super();
    this.state = {
      address: ''
    };
  }

  handleFormSubmission = event => {
    event.preventDefault();
    this.props.onCheckout();
  };

  //   handleInputChange = event => {
  //     const { name, value } = event.target;
  //     this.setState({
  //       [name]: value
  //     });
  //   };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmission}>
          <label htmlFor="input-address"></label>
          <input id="input-address" type="text" placeholder="Your Address" />

          <button>Rent Board</button>
        </form>
      </div>
    );
  }
}

export default CheckoutForm;
