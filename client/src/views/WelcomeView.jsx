import React, { Component } from 'react';
import MapContainer from './../components/GoogleMap';
import { Link } from 'react-router-dom';
import './WelcomeView.scss';

class WelcomeView extends Component {
  render() {
    return (
      <div>
        <div className="welcome-container">
          <div className="welcome-title">
            <p>the</p>
            <h1>Surf Place</h1>
          </div>
          <div className="welcome-buttons">
            <div className="button-container">
              <button className="welcome-rent-button">
                <Link to={`/`}>🌊 Rent</Link>
              </button>
              <button className="welcome-host-button">
                <Link to={`/board/add`}>💰 Host</Link>
              </button>
            </div>
            <div className="button-container">
              <button className="welcome-chat-button">
                <Link to={`/chat`}>💬 Chat</Link>
              </button>
              <button className="welcome-feel-button">
                <Link to={`/surf-conditions`}>☀️ Feel</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="map" style={{ width: '100%' }}>
          <MapContainer />
        </div>
      </div>
    );
  }
}

export default WelcomeView;
