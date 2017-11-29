import React, { Component } from 'react';
import Timer from './components/Timer';
import ButtonAddDrink from './components/ButtonAddDrink';
import ButtonRemoveDrinks from './components/ButtonRemoveDrinks';
import DrinkCounter from './components/DrinkCounter';

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
    if (window.confirm('Really wanna start drinking again?')) {
      this.setState({
        drinks: []
      });
    }
  };

  render() {
    const { drinks } = this.state;
    const last = drinks[drinks.length - 1] || new Date().getTime();

    return (
      <main>
        <Timer lastDrink={last} howMany={drinks.length} />
        <ButtonAddDrink addDrink={this.addDrink} />
        <DrinkCounter numberOfDrinks={this.state.drinks.length} />
        <ButtonRemoveDrinks removeAllDrinks={this.removeAllDrinks} />
      </main>
    );
  }
}

export default App;
