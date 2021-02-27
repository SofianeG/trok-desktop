import React from 'react';

const Card = (props) => {
  return (
    <div
      style={{
        backgroundColor: 'blueviolet',
        width: '100%',
        paddingLeft: 64,
        height: 213,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ width: 141, backgroundColor: 'yellow' }}>
        <img src={props.image} alt="#" />
        <p
          style={{
            fontSize: 11,
            fontFamily: 'Open Sans',
            textAlign: 'center',
            backgroundColor: 'green',
          }}
        >
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Card;
