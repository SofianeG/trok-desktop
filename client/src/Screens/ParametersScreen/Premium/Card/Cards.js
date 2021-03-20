import React from 'react';
import Card from './Card';
import CardsPremium from './CardsPremium';

const Cards = ({ show }) => {
  return (
    <div
      style={{
        display: show ? 'block' : 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: 239,
          height: 296,
        }}
      >
        {CardsPremium.map((item) => (
          <>
            <Card
              subtitle={item.subTitle}
              title={item.title}
              id={item.id}
              image={item.image}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default Cards;
