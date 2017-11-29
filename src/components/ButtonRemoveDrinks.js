import React from 'react';

const ButtonRemoveDrinks = ({removeAllDrinks}) => (
  <button className="remove-drinks" onClick={removeAllDrinks} aria-label="remove drinks">Remove drinks...</button>
)

export default ButtonRemoveDrinks;
