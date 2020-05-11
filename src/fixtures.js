import React, { Component } from 'react';
import Fixture from "./fixture.js"
import styles from "./fixtures.module.css"

class Fixtures extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  render() {
    return (
      <div>
        <h1>Today's Matches</h1>
        <div className={styles.section}>
          <Fixture homeTeamName="Hawks" homeTeamScore="0" awayTeamName="Giants" awayTeamScore="0"/>
          <Fixture homeTeamName="Hawks" homeTeamScore="0" awayTeamName="Giants" awayTeamScore="0"/>
          <Fixture homeTeamName="Hawks" homeTeamScore="0" awayTeamName="Giants" awayTeamScore="0"/>
        </div>
      </div>
    );
  }
}

export default Fixtures;