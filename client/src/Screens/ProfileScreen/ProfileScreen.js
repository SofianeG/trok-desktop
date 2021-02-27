import React from 'react';
import style from './Profile.module.css';
import { useSelector } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import Footer from '../../components/Footer/Footer';
import GreenContainer from '../../components/GreenContainer/GreenContainer';
// import UploadImage from '../../components/Profil/UploadImage';

const ProfileScreen = () => {
  const userData = useSelector((state) => state.userReducer);

  return (
    <>
      <GreenContainer title="Mise à Jour Profil" />
      <div className={style.Container}>
        <div className={style.PictureContainer}>
          <img alt="#" className={style.Picture} src={userData.selectedFile} />
          <form className={style.textPicture}>Changer ma photo de profil</form>
        </div>
        <div>
          <div className={style.InputContainerFirstName}>
            <p className={style.labelFirstName}>Nom</p>
            <input className={style.InputFirstName} />
          </div>
          <div className={style.InputContainerLastName}>
            <p className={style.labelLastName}>Prénom</p>
            <input className={style.InputLastName} />
          </div>
          <hr className={style.line} />
        </div>
        <div className={style.AboutContainer}>
          <p className={style.AboutText}>A propos</p>
          <input className={style.AboutInput} />
        </div>
        <hr className={style.line} />
        <div className={style.EmailContainer}>
          <p className={style.labelEmail}>Email</p>
          <input className={style.InputEmail} />
        </div>
        <hr className={style.line} />
        <div className={style.TelephoneContainer}>
          <p className={style.labelTelephone}>Telephone</p>
          <input className={style.InputTelephone} />
        </div>
        <hr className={style.line} />
        <div className={style.GenderContainer}>
          <p className={style.labelGender}>Genre</p>
          <div>
            <select className={style.InputGenderSelect}>
              <option value="" classname={style.InputGenderOption}>
                Selectionner
              </option>
              <option value="Homme" classname={style.InputGenderOption}>
                Homme
              </option>
              <option value="Femme" classname={style.InputGenderOption}>
                Femme
              </option>
            </select>
          </div>
        </div>
        <hr className={style.line} />
        <div className={style.GeolocalisationContainer}>
          <p className={style.GeolocalisationText}>Géolocalisation</p>
          <Switch
            // checked={state.checkedB}
            // onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </div>
        <div className={style.ButtonRegisterContainer}>
          <button className={style.ButtonRegister}>Enregistrer</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileScreen;
