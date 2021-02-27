import React from 'react';
import CardsPremium from './CardsPremium';

const Card = () => {
  return (
    <div>
      {CardsPremium.map((item) => (
        <div>
          <div>{item.title}</div>
          <img src={item.image} alt="#" />
        </div>
      ))}
    </div>
  );
};

export default Card;
