import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

export const Marker = props => {
  return (
    <Link to={`/board/${props.id}`}>
      <div className="marker">{props.price}/day</div>
    </Link>
  );
};

export default Marker;