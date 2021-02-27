import React from 'react';
import style from './Card.module.css';

const Card = (props) => {
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
        <img src={props.image} className={style.image} alt="#" />
      </div>
      <div className={style.rightContainer}>
        <div style={{ width: 447 }}>
          <div className={style.title}> {props.title} </div>
          <div className={style.subtitle}>{props.subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
