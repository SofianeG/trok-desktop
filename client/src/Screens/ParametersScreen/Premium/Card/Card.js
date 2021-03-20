import React from 'react';

const Card = ({ subTitle, title, id, image }) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: 239,
          height: 296,
          border: 1,
          borderColor: 'red',
        }}
      >
        <div key={id}>
          <div>{title}</div>
          <img src={image} style={{ width: 163, height: 162 }} alt="#" />
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
