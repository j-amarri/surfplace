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
                <Link to={`/`}><span role="img" alt="aria-label">🌊</span> Rent</Link>
              </button>
              <button className="welcome-host-button">
                <Link to={`/board/add`}><span role="img" alt="aria-label">💰</span> Host</Link>
              </button>
              <button className="welcome-chat-button">
                <Link to={`/chat`}><span role="img" alt="aria-label">💬</span> Chat</Link>
              </button>
              <button className="welcome-feel-button">
                <Link to={`/surf-conditions`}><span role="img" alt="aria-label">☀️</span> Feel</Link>
              </button>
            </div>
      </div>
      </div>
    );
  }
}

export default WelcomeView;
