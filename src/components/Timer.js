import React, { Component } from 'react';
import { prettyPrintTime } from '../helpers';

class Timer extends Component {
  state = {
    drinkingTime: 0
  };

  componentDidMount() {
    // TODO: look at this to make it more efficient
    this.timer = setInterval(this.getDrinkTime, 100);
  }

  getDrinkTime = _ => {
    const now = new Date().getTime();
    const last = this.props.lastDrink;

    this.setState({
      drinkingTime: now - last
    });
  };

  render() {
    return (
      <p className="drinking-time">
        {this.props.howMany === 0 ? 'Order something!' : prettyPrintTime(this.state.drinkingTime)}
      </p>
    );
  }
}

export default Timer;
