import React, { Component } from 'react';

class App extends Component {
  state = {
    drinks: []
  };

  addDrink = _ => {
    const now = new Date().getTime();

    const updatedDrinks = [...this.state.drinks, now];

    this.setState({
      drinks: updatedDrinks
    });
  };

  render() {
    return (
      <main>
        <button className="drink-button" onClick={this.addDrink}>
          <img src="./imgs/beer.svg" alt="" />
        </button>
        <p className="drink-count">{this.state.drinks.length}</p>
      </main>
    );
  }
}

export default App;
