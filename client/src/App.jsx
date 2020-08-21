import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import AddBoardView from './views/Boards/AddBoardView';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <h1>Surfplace</h1>
          <h3>Project 3 Ironhack</h3>
          <Switch>
            <Route path="/board/add" component={AddBoardView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
