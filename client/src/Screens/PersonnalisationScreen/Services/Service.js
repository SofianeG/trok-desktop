import React, { useState } from 'react';
import style from './Service.module.css';

const Service = (props) => {
  const [buttonText, setButtonText] = useState(false);

  const handleClick = () => {
    setButtonText((prevState) => !prevState);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          display: props.show ? 'block' : 'none',
        }}
      >
        <div className={style.container}>
          <div className={style.TopContainer}>
            <div className={style.ServicesText}>{props.name}</div>
            {buttonText ? (
              <button
                className={style.buttonFollowed}
                onClick={() => handleClick(console.log(buttonText))}
              >
                Suit
              </button>
            ) : (
              <button // fichier en composant dans le dossier component
                className={style.buttonFollowing}
                onClick={() => handleClick(console.log(buttonText))}
              >
                Suivre
              </button>
            )}
          </div>
          <hr className={style.hrLine} />
        </div>
      </div>
    </>
  );
};

export default Service;
