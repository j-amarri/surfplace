import React from 'react';
import './ChatView.scss';

function Chat() {
  return (
    <div>
      <div className="header-chat-image">
        <h1>Surf Chats</h1>
      </div>
      <div className="chat-box">
        <form>
          <label for="chat">Join the conversation!</label>
          <input type="text" placeholder="Write message here"></input>
          <button>Send</button>
        </form>
        <p className="chat-left">
          <strong>Tyler: </strong>Hey that was a sick surf session!
        </p>
        <p className="chat-left">
          <strong>Alessandro:</strong> Heck yeah!
        </p>
      </div>
    </div>
  );
}

export default Chat;
