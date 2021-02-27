import React from 'react';
import style from './GreenContainer.module.css';

const GreenContainer = (props) => {
  return (
    <div className={style.container}>
      <p className={style.text}>{props.title}</p>
    </div>
  );
};

export default GreenContainer;
