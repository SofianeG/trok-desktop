import React from 'react';
import { Card1, Card2, Card3 } from './CardContainer';
import style from './Card.module.css';
import { useHistory } from 'react-router-dom';

const Card = () => {
  const history = useHistory();

  const handleClick = (cardObject) => {
    console.log('clicked card is ', cardObject);
    if (cardObject === 1) {
      history.push('/profile');
    } else if (cardObject === 2) {
      history.push('/personnalisation');
    } else if (cardObject === 8) {
      history.push('/about');
    } else if (cardObject === 5) {
      history.push('/parametres');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        {Card1.map((card) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                // justifyContent: 'center',
              }}
            >
              <div
                key={card.id}
                onClick={() => handleClick(card.id)}
                className={style.CardContainer}
              >
                <img src={card.icon} style={{ marginTop: 20 }} alt="#" />
                <p>{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {Card2.map((card) => {
          return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div
                key={card.id}
                onClick={() => handleClick(card.id)}
                className={style.CardContainer}
              >
                <img src={card.icon} style={{ marginTop: 20 }} alt="#" />
                <p>{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        {Card3.map((card) => {
          return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div
                key={card.id}
                onClick={() => handleClick(card.id)}
                className={style.CardContainer}
              >
                <img src={card.icon} style={{ marginTop: 20 }} alt="#" />
                <p>{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
