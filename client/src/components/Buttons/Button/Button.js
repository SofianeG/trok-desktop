import React from 'react';

const Button = ({ props }) => {
  return <button className={[props.width]}>{props.title}</button>;
};

export default Button;
