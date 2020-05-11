import React, { Component } from 'react';
import './App.css';
import Team from "./team.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Team name="Hawks" />
        <Team name="Eagles" />
      </div>
    );
  }
}

export default App;