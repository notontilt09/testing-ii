import React, { Component } from 'react';
import Dashboard from './dashboard/Dashboard';
import Display from './display/Display';

import './App.css';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
  }

  ball = () => {
    if (this.state.balls === 3) {
      this.setState({
        balls: 0
      })
    } else {
      this.setState({
        balls: this.state.balls + 1
      })
    }
  }

  strike = () => {
    if (this.state.strikes === 2) {
      this.setState({
        strikes: 0
      })
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      })
    }
  }

  out = () => {
    this.setState({
      balls: 0,
      strikes: 0
    })
  }

  hit = () => {
    this.setState({
      balls: 0,
      strikes: 0
    })
  }

  render() {
    return (
      <div className="App">
        <Display 
          balls={this.state.balls} 
          strikes={this.state.strikes}
        />
        <Dashboard 
          ball={this.ball} 
          strike={this.strike} 
          out={this.out} 
          hit={this.hit}
        />
      </div>
    );
  }
}

export default App;
