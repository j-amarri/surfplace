import React, { Component } from 'react';
import { loadMe } from './../../services/authentication';
import { listBoards } from './../../services/board';
import { listOrders } from './../../services/order';
import BoardCard from '../../components/BoardCard';

class UserProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      boards: [],
      orders: [],
      user: null
    };
  }

  fetchData = async () => {
    const user = await loadMe();
    const boards = await listBoards();
    const ownerBoards = boards.filter(board => board.owner === user.user._id);
    const orders = await listOrders();
    const ownerOrders = orders.orders.filter(
      order => order.owner === user.user_id
    );
    this.setState({
      user: user.user,
      boards: ownerBoards,
      loaded: true,
      orders: ownerOrders
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.loaded) {
      console.log(this.state.orders);
    }
    return (
      <div>
        {this.state.loaded && (
          <>
            <h3>Your details</h3>
            <h2>{this.state.user.name}</h2>
            <h3>Your boards</h3>
            <div className="boards-list">
              {this.state.boards.map(board => (
                <BoardCard {...board} key={board._id} />
              ))}
            </div>
            <h3>Your orders</h3>
            <div className="orders-list">
              {this.state.orders.map(order => (
                <div className="order-card" key={order._id}>
                  <p>{order.product.name}</p>
                  <p>{new Date(order.startDate).toLocaleDateString()}</p>
                  {/* <Link to={`/profile/${order.product.owner}`}>
                    <em>by {order.product.owner}</em>
                  </Link> */}
                  <p>{order.total.amount}€</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default UserProfileView;
