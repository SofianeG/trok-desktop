import React, { useState } from 'react';
import GreenContainer from '../../components/GreenContainer/GreenContainer';
import style from './PersonnalisationScreen.module.css';
import Goods from './Goods/Goods';
import Good from './Goods/Good';
import Services from './Services/Services';
import Service from './Services/Service';
import Footer from '../../components/Footer/Footer';
import arrowBottom from '../../assets/PersonnalisationScreenIcons/arrows/arrowBottom.svg';
import arrowRight from '../../assets/PersonnalisationScreenIcons/arrows/arrowRight.svg';

const PersonnalisationScreen = () => {
  const [showResultsBiens, setShowResultsBiens] = useState(false);
  const [showResultsServices, setShowResultsServices] = useState(false);

  const handleClickBiens = () => {
    setShowResultsBiens((prevState) => !prevState);
  };
  const handleClickServices = () => {
    setShowResultsServices((prevState) => !prevState);
  };

  return (
    <>
      <GreenContainer title="Personnalisation" />
      <div className={style.Container}>
        <div
          onClick={handleClickBiens}
          style={{
            fontWeight: showResultsBiens ? 'bold' : '',
            color: '#3A3A3A',
          }}
        >
          Biens
          <img src={showResultsBiens ? arrowBottom : arrowRight} alt="#" />
        </div>
        {Goods.map((item) => (
          <Good id={item.id} name={item.name} show={showResultsBiens} />
        ))}
        <hr
          style={{
            width: 747,
            height: 1,
            border: 0,
            color: '#979797',
            background: '#979797',
          }}
        />
        <div
          onClick={handleClickServices}
          style={{
            fontWeight: showResultsServices ? 'bold' : '',
            color: '#3A3A3A',
          }}
        >
          Services
          <img src={showResultsServices ? arrowBottom : arrowRight} alt="#" />
        </div>
        {Services.map((item) => (
          <Service id={item.id} name={item.name} show={showResultsServices} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default PersonnalisationScreen;
