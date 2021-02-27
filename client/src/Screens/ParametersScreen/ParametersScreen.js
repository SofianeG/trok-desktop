import React from 'react';
import GreenContainer from '../../components/GreenContainer/GreenContainer';
// import Card from './Card/Card';
// import arrowRight from '../../assets/Icon/arrowRight.svg';
import NotificationScreen from './Notifications/NotificationScreen';
import PasswordScreen from './Password/PasswordScreen';
import PremiumScreen from './Premium/PremiumScreen';
import style from './ParametersScreen.module.css';
// import Cards from './Card/Cards';

const ParametersScreen = () => {
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
          height: 420,
        }}
      >
        <div
          style={{
            width: 747,
            justifyContent: 'center',
            backgroundColor: 'pink',
          }}
        >
          {/* <div style={{ height: 60 }}> */}
          <NotificationScreen />
          <hr className={style.hrLine} />
          {/* </div> */}
          {/* <div style={{ height: 60 }}> */}
          <PasswordScreen />
          <hr className={style.hrLine} />
          {/* </div> */}
          {/* <div style={{ height: 60 }}> */}
          <PremiumScreen />
          <hr className={style.hrLine} />
          {/* </div> */}
          {/* <div style={{ height: 60 }}>
            <div>Données personnelles</div>
            <img src={arrowRight} alt="#" />

            <hr
              style={{
                width: 747,
                height: 1,
                border: 0,
                color: '#979797',
                background: '#979797',
              }}
            />
          </div>
          <div>
            <div>Mot de passe</div>
            <img src={arrowRight} alt="#" />

            <hr
              style={{
                width: 747,
                height: 1,
                border: 0,
                color: '#979797',
                background: '#979797',
              }}
            />
          </div>
          <div>
            <div>Paiements</div>
            <img src={arrowRight} alt="#" />
            <hr
              style={{
                width: 747,
                height: 1,
                border: 0,
                color: '#979797',
                background: '#979797',
              }}
            />
          </div>
          <div>
            <div>Déconnection</div>
            <img src={arrowRight} alt="#" />
            <hr
              style={{
                width: 747,
                height: 1,
                border: 0,
                color: '#979797',
                background: '#979797',
              }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ParametersScreen;
