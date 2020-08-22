import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = props => {
  return (
    <nav>
      <Link to="/">SurfPlace</Link>
      <Link to="/board/add">Add A Board</Link>
      {(props.user && (
        <>
          <span>{props.user.name}</span>
          <button onClick={props.onSignOut}>Sign Out</button>
        </>
      )) || (
        <>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/sign-in">Sign In</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
