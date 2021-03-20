import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import GreenContainer from '../../components/GreenContainer/GreenContainer';
import NotificationScreen from './Notifications/NotificationScreen';
import PasswordScreen from './Password/PasswordScreen';
import PremiumScreen from './Premium/PremiumScreen';

import style from './ParametersScreen.module.css';

const ParametersScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: 'LOGOUT', payload: null });
    window.localStorage.removeItem('auth');
    history.push('/login');
  };
  return (
    <div>
      <GreenContainer title="Paramètres" />
      {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: 93 }}>
        <Card />
      </div> */}
      <div
        style={{
          justifyContent: 'center',
          backgroundColor: 'blue',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 93,
          // height: 420,
        }}
      >
        <div
          style={{
            width: 747,
            justifyContent: 'center',
            backgroundColor: 'pink',
          }}
        >
          <NotificationScreen />
          <hr className={style.hrLine} />
          <PasswordScreen />
          <hr className={style.hrLine} />
          <PremiumScreen />
          <hr className={style.hrLine} />
          <div style={{ height: 60 }}>
            <div>Données personnelles</div>
            <hr className={style.hrLine} />
          </div>
          <div>
            <div>Paiements</div>
            <hr className={style.hrLine} />
          </div>
          <div>
            <div onClick={logout}>Déconnection</div>
            <hr className={style.hrLine} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParametersScreen;
