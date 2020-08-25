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
    console.log('checking out');
    this.props.history.push(`/confirmation`);
  };

  render() {
    return (
      <div className="checkout-container">
        {this.state.loaded && (
          <>
            <h1>Rent your board</h1>
            <h4>
              <strong>Board name:</strong>
              {this.state.order.product.name}
            </h4>
            <h4>
              <strong>Board model:</strong>
              {this.state.order.product.model}
            </h4>
            <h4>
              <strong>Price per day:</strong>
              {this.state.order.product.price}
            </h4>
            <h4>
              <strong>Starting date:</strong>
              {this.state.order.startDate}
            </h4>
            <h4>
              <strong>End date:</strong>
              {this.state.order.endDate}
            </h4>
            <h4>
              Number of days:{' '}
              {this.state.order.endDate - this.state.order.startDate}
            </h4>
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
