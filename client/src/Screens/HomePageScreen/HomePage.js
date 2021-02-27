import React from 'react';
import style from './HomePage.module.css';

import Footer from '../../components/Footer/Footer';
import ListImages from './ListImagesCard/ListImages';
import ListImage from './ListImagesCard/ListImage';

//ICON STORE
import appleStore from '../../assets/HomepagePictures/downloadAppImages/applestore.svg';
import googlePlay from '../../assets/HomepagePictures/downloadAppImages/googleplay.svg';

//ICON IPHONE
import iphone1 from '../../assets/HomepagePictures/downloadAppImages/iphone1.png';
import iphone2 from '../../assets/HomepagePictures/downloadAppImages/iphone2.png';
import iphone3 from '../../assets/HomepagePictures/downloadAppImages/iphone3.png';
import iphone4 from '../../assets/HomepagePictures/downloadAppImages/iphone4.png';

const HomePage = () => {
  return (
    <>
      <div>
        <div className={style.picture}>
          <div className={style.container}>
            <div className={style.containerLeft}>
              <div className={style.containerLeftTitle}>
                <div>Le troc participatif et solidaire !</div>
              </div>
              <div className={style.containerLeftText}>
                Recherchez autour de vous ce dont vous avez besoin et faites de
                la place dans vos placards !
              </div>
            </div>
            <div className={style.containerRight}>
              <div className={style.containerRightSquare}>
                <div style={{ backgroundColor: 'yellow' }}>
                  <div style={{ fontSize: 10, fontFamily: 'Open Sans' }}>
                    Que recherchez vous ?
                  </div>
                  <div
                    style={{
                      marginTop: 3,
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <div
                      style={{ backgroundColor: 'blue', alignSelf: 'center' }}
                    >
                      <input type="radio" />
                      <label
                        style={{
                          fontSize: 10,
                          fontFamily: 'Open Sans',
                          backgroundColor: 'pink',
                        }}
                      >
                        Un bien
                      </label>
                    </div>
                    <div>
                      <input type="radio" />
                      <label
                        style={{
                          fontSize: 10,
                          fontFamily: 'Open Sans',
                          backgroundColor: 'red',
                        }}
                      >
                        Un service
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontFamily: 'Open Sans' }}>
                    Sélectionner la/les catégorie(s) associée(s)
                  </div>
                  <select
                    style={{
                      width: 196,
                      height: 28,
                      marginTop: 11,
                      fontSize: 10,
                      fontFamily: 'Open Sans',
                      borderRadius: 4,
                      backgroundColor: 'white',
                    }}
                  >
                    <option value="1">Categories</option>
                  </select>
                </div>
                <div>
                  <div style={{ marginBottom: 20 }}>
                    <div style={{ fontSize: 10, fontFamily: 'Open Sans' }}>
                      Choississez la localisation ?
                    </div>
                    <div style={{ marginTop: 7 }}>
                      <input
                        style={{
                          width: 196,
                          height: 34,
                          borderRadius: 4,
                          fontSize: 10,
                          fontFamily: 'Open Sans',
                        }}
                        placeholder="Entrez une ville"
                      />
                    </div>
                  </div>
                  <button
                    style={{
                      width: 243,
                      height: 37,
                      borderRadius: 26,
                      borderColor: '#00D65B',
                      color: '#00D65B',
                      fontSize: 10,
                      fontFamily: 'Open Sans',
                    }}
                  >
                    Lancer la recherche
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          style={{
            height: 276,
            backgroundColor: '#F3F5F5',
            fontFamily: 'Open Sans',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              height: 68,
            }}
          >
            <div>Comment ça marche ?</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            {ListImages.map((item) => (
              <ListImage id={item.id} image={item.image} text={item.text} />
            ))}
          </div> */}
        <div className={style.downloadAppContainer}>
          <div className={style.downloadAppContainerLeft}>
            <div className={style.downloadAppContainerLeftCenter}>
              <div
                className={style.downloadAppContainerLeftCenterTextContainer}
              >
                <div className={style.downloadAppContainerLeftCenterTitle}>
                  Téléchargez l’application
                </div>
                <div className={style.downloadAppContainerLeftCenterSubtitle}>
                  Facilitez vos échanges en téléchargeant gratuitement
                  l’application Trokéo !
                </div>
              </div>
              <div>
                <a href="https://www.apple.com/fr/ios/app-store/">
                  <img
                    alt="#"
                    src={appleStore}
                    className={style.downloadAppContainerAppleStore}
                  />
                </a>
                <a href="https://play.google.com/store">
                  <img
                    alt="#"
                    src={googlePlay}
                    className={style.downloadAppContainerPlayStore}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={style.downloadAppContainerRight}>
            <div>
              <img
                alt="#"
                src={iphone1}
                className={style.downloadAppContainerRightFirstImage}
              />
              <img
                alt="#"
                src={iphone2}
                style={{ width: 88, marginBottom: 11, marginLeft: 11 }}
                className={style.downloadAppContainerRightSecondImage}
              />
              <img
                alt="#"
                src={iphone3}
                style={{ width: 88, marginLeft: 11 }}
                className={style.downloadAppContainerRightThirdImage}
              />
              <img
                alt="#"
                src={iphone4}
                style={{ width: 88, marginBottom: 11, marginLeft: 11 }}
                className={style.downloadAppContainerRightFourthImage}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
