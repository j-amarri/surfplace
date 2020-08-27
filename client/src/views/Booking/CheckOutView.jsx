import React, { Component } from 'react';
// import { loadMe } from './../../services/authentication';
import { loadOrder } from './../../services/order';
// import moment from 'moment';

class CheckoutView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      order: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    loadOrder(id)
      .then(data => {
        this.setState({
          order: data,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleCheckout = () => {
    this.props.history.push(`/confirmation`);
  };

  render() {
    const order = this.state.order;
    return (
      <div className="checkout-container">
        <div className="header-image">
          <h1>Your order</h1>
        </div>
        {this.state.loaded && (
          <>
            <p>Board: {order.product.name}</p>
            <p>Model: {order.product.model}</p>
            <p>Price: {order.product.price.amount}/day</p>
            <p>
              Dates: from {new Date(order.startDate).toLocaleDateString()} to{' '}
              {new Date(order.endDate).toLocaleDateString()}
            </p>
            <h3>Total price: {order.total.amount}€</h3>
            <form onSubmit={this.handleCheckout}>
              <button className="checkout-button">Checkout</button>
            </form>
          </>
        )}
      </div>
    );
  }
}

export default CheckoutView;
