import React, { Component } from 'react';
import './Fixture.css';

class Fixture extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  
  // TODO: revisit later 
  // increaseScore() {
  //   this.setState({
  //     score: this.state.score + 2
  //   });
  // }    

  render() {
    return (
      <div className="row">
        <h2 className="name">{this.props.homeTeamName}</h2>
        <h2 className="score">{this.props.homeTeamScore}</h2>
        <h2 className="score"> - </h2>
        <h2 className="score">{this.props.awayTeamScore}</h2>
        <h2 className="name">{this.props.awayTeamName}</h2>
      </div>
    );  
  }
}

export default Fixture;