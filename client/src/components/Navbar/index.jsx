import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar = props => {
  return (
    <div className="container">
      <nav>
        <a href="/welcome" className="logo">
          <img width="60px" src="/logo.png" alt="logo" />
        </a>

        <Link className="nav-link" to="/rent">
          Rent
        </Link>
                <Link className="nav-link" to="/board/add">
         Host
        </Link>
                <Link className="nav-link" to="/chat">
          Chat
        </Link>
                        <Link className="nav-link" to="/surf-conditions">
          Feel
        </Link>
        {(props.user && (
          <>
            <div className="nav-prof-signout">
              <Link className="nav-link" to={`/profile/${props.user._id}`}>
                <img
                  src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                  alt={props.user.name}
                />
              </Link>
              <button onClick={props.onSignOut}>Sign Out</button>
            </div>
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
