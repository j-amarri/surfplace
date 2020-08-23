import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const BoardCard = ({ name, price, size, model, level, picture, _id }) => {
  return (
    <div className="board-card">
      <Link to={`/board/${_id}`}>
        <img src="/board-placeholder.jpg" alt="" />
      </Link>

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
