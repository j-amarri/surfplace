import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = props => {
  return (
    <div className="container">
      <nav>
        <a href="/welcome">
          <img width="75px" src="/logo.png" alt="logo" />
        </a>

        <Link className="nav-link" to="/board/add">
          Host Board
        </Link>
        {(props.user && (
          <>
            <button onClick={props.onSignOut}>Sign Out</button>
            <Link className="nav-link" to={`/profile/${props.user._id}`}>
              <img
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                alt={props.user.name}
              />
            </Link>
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
