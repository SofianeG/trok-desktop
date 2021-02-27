import React from 'react';
import GreenContainer from '../../components/GreenContainer/GreenContainer';
import Footer from '../../components/Footer/Footer';
import Card from './AboutCard/Card';
import Cards from './AboutCard/Cards';
import style from './AboutScreen.module.css';

const AboutScreen = () => {
  return (
    <div>
      <GreenContainer title="A propos de Trokéo" />
      <div className={style.containerCard}>
        <Card
          id={Cards[0].id}
          title={Cards[0].title}
          subtitle={Cards[0].subTitle}
          image={Cards[0].image}
        />
        <Card
          id={Cards[1].id}
          title={Cards[1].title}
          subtitle={Cards[1].subTitle}
          image={Cards[1].image}
        />
        <Card
          id={Cards[2].id}
          title={Cards[2].title}
          subtitle={Cards[2].subTitle}
          image={Cards[2].image}
        />
      </div>
      <Footer />
    </div>
  );
};

export default AboutScreen;
