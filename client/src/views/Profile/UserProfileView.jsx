import React, { Component } from 'react';
import { loadMe } from './../../services/authentication';

class UserProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      user: null
    };
  }

  componentDidMount() {
    loadMe()
      .then(user => {
        this.setState({
          user,
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.loaded && (
          <>
            <h1>User profile</h1>
            <h2>{this.state.user.email}</h2>
          </>
        )}
      </div>
    );
  }
}

export default UserProfileView;
