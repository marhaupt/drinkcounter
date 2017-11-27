import React, { Component } from 'react';
import { prettyPrintTime } from './helpers';

class App extends Component {
  state = {
    drinks: []
  };

  componentWillUpdate(nextProps, nextState) {
    console.log(nextState);
  }

  addDrink = _ => {
    const now = new Date().getTime();

    const updatedDrinks = [...this.state.drinks, now];

    this.setState({
      drinks: updatedDrinks
    });
  };

  render() {
    const { drinks } = this.state;
    const last = drinks[drinks.length - 1] || new Date().getTime();

    return (
      <main>
        <Timer lastDrink={last} howMany={drinks.length}/>
        <button className="drink-button" onClick={this.addDrink}>
          <img src="./imgs/beer.svg" alt="" />
        </button>
        <p className="drink-count">{this.state.drinks.length}</p>
      </main>
    );
  }
}

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

export default App;
