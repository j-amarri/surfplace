import React, { Component } from 'react';
import { signUp } from './../../services/authentication';
import './style.scss';

class AuthenticationSignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      level: '',
      picture: ''
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmission = event => {
    event.preventDefault();
    const { name, email, password, level, picture } = this.state;
    const body = { name, email, password, level, picture };
    signUp(body)
      .then(data => {
        const { user } = data;
        this.props.onUserUpdate(user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="auth-form">
        <div>
          <h1>Sign Up</h1>
          <p>
            Welcome to Surfplace! Create your account, we only need few
            information.
          </p>
        </div>
        <form onSubmit={this.handleFormSubmission}>
          <input
            id="input-name"
            type="text"
            name="name"
            placeholder="Your name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />

          <input
            id="input-email"
            type="email"
            name="email"
            placeholder="Your email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />

          <input
            id="input-password"
            type="password"
            name="password"
            placeholder="Your password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />

          <select name="level" onChange={this.handleInputChange} required>
            <option value="">What is your level?</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Professional">Professional</option>
          </select>

          {/* <label htmlFor="input-picture">Profile Picture</label>
          <input
            id="input-picture"
            type="file"
            name="picture"
            onChange={this.handleInputChange}
          /> */}

          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default AuthenticationSignUpView;
