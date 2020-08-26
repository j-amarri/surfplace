import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const BoardCard = board => {
  console.log(board);
  return (
    <div className="board-card">
      <Link to={`/board/${board._id}`}>
        <img src={board.picture} alt="" />
      </Link>
      <div className="board-card-details">
        <h3>{board.name}</h3>
        <p>€{board.price.amount}/day</p>
        <div className="size-model">
          <p>{board.size}"</p>
          <p>{board.model}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
