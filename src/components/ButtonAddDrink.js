import React from 'react';

const ButtonAddDrink = ({ addDrink }) => (
  <button className="drink-button" onClick={addDrink} aria-label="add drink">
    <img src="./imgs/beer.svg" alt="" />
  </button>
);

export default ButtonAddDrink;
