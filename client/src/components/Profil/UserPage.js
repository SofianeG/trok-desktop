import React, { useContext } from 'react';
import { UidContext } from '../../Routes/AppContext';
import { useSelector } from 'react-redux';
import { dateParser } from '../../Routes/Utils';
import style from './UserPage.module.css';
import yellowStars from '../../assets/Icons/icons8-star-yellow.svg';
import whiteStars from '../../assets/Icons/icons8-star-white.svg';

import Card from './Card';
import Footer from '../Footer/Footer';

const UserPage = () => {
  const uid = useContext(UidContext);

  const userData = useSelector((state) => state.userReducer);

  return (
    <>
      <div style={{ justifyContent: 'space-between' }}>
        <div className={style.GreenContainer} />
        <div className={style.ContainerCard}>
          <div className={style.ContainerCardTop}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <div className={style.ContainerCardTopLeft}>
                <div className={style.pictureContainer}>
                  <img
                    src={userData.selectedFile}
                    alt="#"
                    className={style.picture}
                  />
                </div>
                <div className={style.ContainerCardTopLeftRight}>
                  <div>{userData.firstName}</div>
                  <div style={{ marginTop: 2, marginBottom: 2 }}>
                    Membre depuis le {dateParser(userData.createdAt)}
                  </div>
                  <div>
                    <img alt="#" src={yellowStars} />
                    <img alt="#" src={yellowStars} />
                    <img alt="#" src={yellowStars} />
                    <img alt="#" src={whiteStars} />
                  </div>
                </div>
              </div>
              <div style={{ alignSelf: 'flex-end' }}>
                <button className={style.Ratings}>Voir les avis</button>
              </div>
            </div>
            <hr
              style={{
                borderBottom: 0,
                color: '#979797',
                width: 705,
                height: 1,
              }}
            />
            <div className={style.ContainerCardBottom}>
              <div className={style.ContainerTextBottom}>
                <div className={style.AboutTitle}>A propos</div>
                <div className={style.AboutText}>
                  Bonjour je suis dispo pour vous aidez pour vos tache
                  bricolage, montage, peinture et demenagement et vous pouvez
                  voir mes avis.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 200, marginBottom: 215 }}>
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserPage;
