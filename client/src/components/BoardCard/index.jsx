import React from 'react';
import './style.scss';

const BoardCard = ({ name, price, size, model, level, picture }) => {
  return (
    <div className="board-card">
      <img src="/board-placeholder.jpg" alt="" />
      <div className="board-card-details">
        <h3>{name}</h3>
        <p>€{price}/day</p>
        <div className="size-model">
          <p>{size}"</p>
          <p>{model}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
