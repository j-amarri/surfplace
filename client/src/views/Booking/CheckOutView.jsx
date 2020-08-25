import React, { Component } from 'react';
import { loadMe } from './../../services/authentication';
import { loadOrder } from './../../services/order';

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
        console.log('component', data);
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
        {this.state.loaded && (
          <>
            <h1>Rent your board</h1>
            <h4>
              <strong>Board name:</strong>
              {order.product.name}
            </h4>
            <h4>
              <strong>Board model:</strong>
              {order.product.model}
            </h4>
            <h4>
              <strong>Price per day:</strong>
              {order.product.price}
            </h4>
            <h4>
              <strong>Starting date:</strong>
              {order.startDate}
            </h4>
            <h4>
              <strong>End date:</strong>
              {order.endDate}
            </h4>
            <h4>Days: {order.days}</h4>
            <h4>Price: {order.total.amount}</h4>
            <form onSubmit={this.handleCheckout} className="rent-link">
              <button>Rent Board</button>
            </form>
          </>
        )}
      </div>
    );
  }
}

export default CheckoutView;
