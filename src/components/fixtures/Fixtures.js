import React, { Component } from 'react';
import Fixture from './Fixture';
import './Fixture.css';

class Fixtures extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div>
        <h1>Today's Matches</h1>
        <div className="section">
          <Fixture homeTeamName="Hawks" homeTeamScore="0" awayTeamName="Giants" awayTeamScore="0"/>
          <Fixture homeTeamName="Hawks" homeTeamScore="0" awayTeamName="Giants" awayTeamScore="0"/>
          <Fixture homeTeamName="Hawks" homeTeamScore="0" awayTeamName="Giants" awayTeamScore="0"/>
        </div>
      </div>
    );
  }
}

export default Fixtures;