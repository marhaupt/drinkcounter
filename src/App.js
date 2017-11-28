import React, { Component } from 'react';
import Timer from './components/Timer'

class App extends Component {
  state = {
    drinks: []
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem('drinks');

    if (localStorageRef) {
      this.setState({
        drinks: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('drinks', JSON.stringify(nextState.drinks));
  }

  addDrink = _ => {
    const now = new Date().getTime();

    const updatedDrinks = [...this.state.drinks, now];

    this.setState({
      drinks: updatedDrinks
    });
  };

  removeAllDrinks = () => {
    if(window.confirm('Really wanna start drinking again?')) {
      this.setState({
        drinks: []
      });
    }
  }

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
        <button className="remove-drinks" onClick={this.removeAllDrinks}>Remove drinks...</button>
      </main>
    );
  }
}

export default App;
