import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = props => {
  return (
    <div className="container">
      <nav>
        <a href="/">
          <img width="75px" src="/logo.png" alt="logo" />
        </a>

        <Link className="nav-link" to="/board/add">
          Add A Board
        </Link>
        {(props.user && (
          <>
            <span>{props.user.name}</span>
            <button onClick={props.onSignOut}>Sign Out</button>
          </>
        )) || (
          <>
            <Link className="nav-link" to="/sign-up">
              Sign Up
            </Link>
            <Link className="nav-link" to="/sign-in">
              Sign In
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
