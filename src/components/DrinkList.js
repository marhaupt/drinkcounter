import React from 'react';

const DrinkList = ({ drinks }) => {
  let lastDrink = 0;
  return (
    <ul className="drink-list">
      {drinks.map(drink => {
        const elapsed = lastDrink ? drink - lastDrink : 0;
        lastDrink = drink;
        const time = elapsed > 0 ? Math.floor(elapsed / 1000) + ' s' : '';
        return (
          <li key={drink}>
            {time}
            <img
              src="./imgs/beer.svg"
              alt="small drink"
              className="small-drink"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default DrinkList;
