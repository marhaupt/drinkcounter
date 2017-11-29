import React from 'react';
import { printShortTime as pst } from '../helpers';

const DrinkList = ({ drinks, removeDrink }) => {
  let lastDrink = 0;
  return (
    <ul className="drink-list">
      {drinks.map(drink => {
        const elapsed = lastDrink ? drink - lastDrink : 0;
        lastDrink = drink;
        const time = elapsed > 0 ? pst(elapsed) : '';
        const boundRemoveDrink = removeDrink.bind(null, drink);
        return (
          <li key={drink}>
            <span className="drink-time">{time}</span>
            <img
              src="./imgs/beer.svg"
              alt="small drink"
              className="small-drink"
              onClick={boundRemoveDrink}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default DrinkList;
