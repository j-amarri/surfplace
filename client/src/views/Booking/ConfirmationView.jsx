import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ConfirmationView extends Component {
  render() {
    return (
      <div>
        <h1>Booking Confirmed</h1>
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.talkinglife.co.uk%2Fwp-content%2Fuploads%2F2020%2F03%2FiStock-919118254-300x300.jpg&f=1&nofb=1" src="booked" />
            <Link to={`/rent`}>
            <em>See more boards</em>
            </Link>
      </div>
    );
  }
}

export default ConfirmationView;
