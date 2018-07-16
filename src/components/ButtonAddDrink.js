import React from 'react';
import Beer from '../icons/Beer';

const ButtonAddDrink = ({ addDrink }) => (
  <button className="drink-button" onClick={addDrink} aria-label="add drink">
    <Beer color="#e7a946" />
  </button>
);

export default ButtonAddDrink;
