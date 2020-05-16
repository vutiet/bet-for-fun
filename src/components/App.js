import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Fixtures from './fixtures/Fixtures';
import Leaderboard from './leaderboard/Leaderboard';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Fixtures} />
            <Route path="/leaderboard" exact component={Leaderboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;