import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { loadMe, signOut } from './services/authentication';
import './App.css';

// Components
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// General views
import HomeView from './views/HomeView';
import MapView from './views/MapView';
import ErrorView from './views/ErrorView';

// Authentication views
import SignInView from './views/Authentication/SignInView';
import SignUpView from './views/Authentication/SignUpView';

// Boards views
import AddBoardView from './views/Boards/AddBoardView';
import EditBoardView from './views/Boards/EditBoardView';
import SingleBoardView from './views/Boards/SingleBoardView';

// Booking views
import CheckOutView from './views/Booking/CheckOutView';
import ConfirmationView from './views/Booking/ConfirmationView';

// Profile views
import UserProfileView from './views/Profile/UserProfileView';
import EditProfileView from './views/Profile/EditProfileView';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      user: null,
      order: []
    };
  }

  componentDidMount() {
    loadMe()
      .then(data => {
        const user = data.user;
        this.handleUserUpdate(user);
        this.setState({
          loaded: true
        });
      })
      .then(error => {
        console.log(error);
      });
  }

  handleUserUpdate = user => {
    this.setState({
      user
    });
  };

  handleSignOut = () => {
    signOut()
      .then(() => {
        this.handleUserUpdate(null);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar user={this.state.user} onSignOut={this.handleSignOut} />
          <Switch>
            <Route path="/" component={HomeView} exact />
            <Route path="/map" component={MapView} />
            <Route path="/error" component={ErrorView} />
            {/* // Auth views */}
            <ProtectedRoute
              path="/sign-up"
              render={props => (
                <SignUpView {...props} onUserUpdate={this.handleUserUpdate} />
              )}
              authorized={!this.state.user}
              redirect="/"
            />
            <ProtectedRoute
              path="/sign-in"
              render={props => (
                <SignInView {...props} onUserUpdate={this.handleUserUpdate} />
              )}
              authorized={!this.state.user}
              redirect="/"
            />
            {/* // Boards views */}
            <ProtectedRoute
              path="/board/add"
              component={AddBoardView}
              authorized={this.state.user}
              redirect="/sign-in"
            />
            <ProtectedRoute
              path="/board/:id/edit"
              component={EditBoardView}
              authorized={this.state.user}
              redirect="/sign-in"
            />
            <ProtectedRoute
              path="/board/:id"
              authorized={this.state.user}
              redirect="/sign-in"
              render={props => (
                <SingleBoardView {...props} user={this.state.user} />
              )}
            />
            {/* // Booking views */}
            <ProtectedRoute
              path="/order/:id"
              render={props => <CheckOutView {...props} />}
              authorized={this.state.user}
              redirect="/sign-in"
            />
            <ProtectedRoute
              path="/confirmation"
              component={ConfirmationView}
              authorized={this.state.user}
              redirect="/sign-in"
            />
            {/* // Profile views */}
            <ProtectedRoute
              path="/profile/:id/edit"
              component={EditProfileView}
              authorized={this.state.user}
              redirect="/sign-in"
            />
            <ProtectedRoute
              path="/profile/:id"
              component={UserProfileView}
              authorized={this.state.user}
              redirect="/sign-in"
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
