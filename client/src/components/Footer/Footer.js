import React from 'react';
import Logo from '../../assets/Icons/trokeo.svg';
import FB from '../../assets/HomepagePictures/fb.svg';
import Insta from '../../assets/HomepagePictures/insta.svg';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={style.Container}>
        <div className={style.TopContainer}>
          <div className={style.LogoContainer}>
            <img src={Logo} alt="#" className={style.Logo} />
          </div>
          <div className={style.ContainerLeft}>
            <div className={style.ContainerLeftTop}>
              <div>
                <div className={style.ContainerLeftTopTitle}>
                  Découvrir Trokéo
                </div>
              </div>
            </div>
            <div className={style.ContainerLeftBottom}>
              <p className={style.ContainerLeftBottomFirstText}>A propos</p>
              <p className={style.ContainerLeftBottomSecondText}>
                Questions fréquentes
              </p>
            </div>
          </div>
          <div className={style.ContainerMiddle}>
            {/* <div
            // style={{
            //   backgroundColor: 'pink',
            //   width: 133,
            // }}
            > */}
            <div className={style.ContainerMiddleTop}>Informations légales</div>
            <div className={style.ContainerMiddleBottom}>
              <p className={style.ContainerMiddleText}>CGU</p>
              <p className={style.ContainerMiddleText}>
                Politique de confidentialité
              </p>
              <p className={style.ContainerMiddleText}>Services interdits</p>
              <p className={style.ContainerMiddleText}>Mentions légales</p>
              {/* </div> */}
            </div>
          </div>
          <div className={style.ContainerRight}>
            <div style={{ width: 141 }}>
              <div className={style.ContainerRightFollowUs}>
                <p style={{ color: '#00D65B' }}> Suivez-nous</p>
              </div>
              <div className={style.ContainerRightReseauSociaux}>
                <div>
                  <img src={FB} alt="icon" />
                </div>
                <div style={{ marginLeft: 9 }}>
                  <img src={Insta} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.BottomContainer}>
          <div className={style.BottomTopContainer}>
            <div className={style.BottomContainerText}>
              Trokéo est une plateforme qui vous permet d’échanger gratuitement
              vos biens (objets) et services entre particuliers à proximité.
              Avec Trokéo, redécouvrez le troc ! Profitez de Trokéo pour vous
              libérer de choses inutiles ou proposez vos services contre ce dont
              vous avez besoin. Postez votre offre en deux clics l’application
              mobile Trokéo et laissez les trokeurs venir vous contacter pour
              vous accordez ensemble d’un bien ou service à échanger. En un mot,
              Trokéo est une solution utile, gratuite et vertueuse, alors venez
              tester une nouvelle manière de consommer !
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
