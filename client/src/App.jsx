import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';

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
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" component={HomeView} exact />
            <Route path="/map" component={MapView} />
            <Route path="/error" component={ErrorView} />
            // Auth views
            <Route path="/sign-up" component={SignUpView} />
            <Route path="/sign-in" component={SignInView} />
            // Boards views
            <Route path="/board/add" component={AddBoardView} />
            <Route path="/board/:id/edit" component={EditBoardView} />
            <Route path="/board/:id" component={SingleBoardView} />
            // Booking views
            <Route path="/checkout" component={CheckOutView} />
            <Route path="/confirmation" component={ConfirmationView} />
            // Profile views
            <Route path="/profile/:id/edit" component={EditProfileView} />
            <Route path="/profile/:id" component={UserProfileView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
