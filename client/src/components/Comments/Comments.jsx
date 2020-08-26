import React, { useState } from 'react';
import { Button, Input } from 'antd';
const { TextArea } = Input;

function Comments() {
  const [Comment, setComment] = useState('');

  const handleChange = event => {
    setComment(event.currentTarget.value);
  };

  const onSubmit = event => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="header-map-image">
        <h1>Surf Place Chat</h1>
      </div>

      {/* Comment Lists */}

      {/* Root Comment Form */}
      <form style={{ display: 'flex' }} onSubmit={onSubmit}>
        <TextArea
          style={{ width: '100%', borderRadius: '5px' }}
          onChange={handleChange}
          value
          placeholder="write some comments"
        />
        <br />
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default Comments;
