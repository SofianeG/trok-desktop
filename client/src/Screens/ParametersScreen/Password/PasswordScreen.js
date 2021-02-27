import React, { useState } from 'react';
import eyeIcon from '../../../assets/Icon/icons8-eye.svg';
import redCross from '../../../assets/Icon/icons8-cancel.svg';
import style from './Password.module.css';
import arrowRight from '../../../assets/Icon/arrowRight.svg';
import arrowBottom from '../../../assets/Icon/arrowBottom.svg';

const PasswordScreen = () => {
  const [showResultsPassword, setShowResultsPassword] = useState(false);

  const handleClickPassword = () => {
    setShowResultsPassword((prevState) => !prevState);
  };
  return (
    <div style={{ height: 281 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onClick={handleClickPassword}
      >
        <div>Mot de passe</div>
        <img src={showResultsPassword ? arrowBottom : arrowRight} alt="#" />
      </div>
      <div style={{ display: showResultsPassword ? 'block' : 'none' }}>
        <div>
          <input
            style={{ width: 344, height: 42, borderColor: '#BFBDBD' }}
            placeholder="Ancien mot de passe"
          />
          <div style={{ textDecoration: 'underline', fontSize: 12 }}>
            Mot de passe oublié
          </div>
        </div>
        <div className={style.inputContainer}>
          <input
            style={{
              width: 344,
              height: 42,
              borderColor: '#BFBDBD',
            }}
            placeholder="Nouveau mot de passe"
          />
          <div>
            <eyeIcon />
            <redCross />
          </div>
          <div style={{ fontSize: 12 }}>
            Il doit contenir au moins 8 caractères.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordScreen;
