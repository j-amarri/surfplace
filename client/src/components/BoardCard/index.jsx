import React from 'react';
import './style.css';

const BoardCard = ({ name, price, size, model, level, picture }) => {
  console.log(picture);
  return (
    <div className="board-card">
      <img src="/board-placeholder.jpg" alt="" />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{size}</p>
      <span>{model}</span>
      <span>{level}</span>
    </div>
  );
};

export default BoardCard;
