import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WelcomeView.scss';

class WelcomeView extends Component {
  render() {
    return (
      <div>
        <div className="welcome-container">
          <div className="welcome-title">
            <h1>Surf Place</h1>
            <p>The place you can count on for all things surf.</p>
          </div>
          <div className="welcome-buttons">
            <button className="welcome-rent-button">
              <Link to={`/rent`}>
                <span role="img" aria-label="wave">
                  🌊
                </span>{' '}
                Rent
              </Link>
            </button>
            <button className="welcome-host-button">
              <Link to={`/board/add`}>
                <span role="img" aria-label="money">
                  💰
                </span>{' '}
                Host
              </Link>
            </button>
            <button className="welcome-chat-button">
              <Link to={`/chat`}>
                <span role="img" aria-label="chat">
                  💬
                </span>{' '}
                Chat
              </Link>
            </button>
            <button className="welcome-feel-button">
              <Link to={`/surf-conditions`}>
                <span role="img" aria-label="sun">
                  ☀️
                </span>{' '}
                Feel
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeView;
