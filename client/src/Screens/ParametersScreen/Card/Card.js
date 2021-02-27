import React from 'react';
import Cards from './Cards';

const Card = () => {
  return (
    <div
      style={{
        width: 747,
        backgroundColor: 'grey',
        height: 420,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {Cards.map((item) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            key={item.id}
            onClick={() => console.log(item.id)}
          >
            <div>{item.name}</div>
            <img src={item.icon} alt="#" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
