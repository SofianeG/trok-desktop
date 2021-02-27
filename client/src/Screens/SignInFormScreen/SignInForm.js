import React, { useState, useContext } from 'react';
import axios from 'axios';

import style from './SignInForm.module.css';

import { UidContext } from '../../Routes/AppContext';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import UserPage from '../../components/Profil/UserPage';

import GoogleButton from '../../components/Buttons/GoogleButton/GoogleButton';
import FacebookButton from '../../components/Buttons/FacebookButton/FacebookButton';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userData = useSelector((state) => state.userReducer);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();
  const history = useHistory();

  const HandleLogin = (e) => {
    e.preventDefault();

    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');

    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = '/login';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {uid ? (
        <>
          <UserPage />
        </>
      ) : (
        <div style={{ marginTop: 100 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className={style.Container}>
              <div style={{ width: '80%' }}>
                <form onSubmit={HandleLogin} id="sign-up-form">
                  <div style={{ backgroundColor: 'pink' }}>
                    <h1 className={style.title}>Bienvenue</h1>
                    <p className={style.subtitle}>
                      L’application éco-responsable et solidaire de troc
                      d’objets et de services entre particuliers !
                    </p>
                    <GoogleButton />
                    <FacebookButton />
                  </div>
                  <div style={{ textAlign: 'center', marginTop: 31 }}></div>
                  <div
                    style={{
                      backgroundColor: 'pink',
                      justifyContent: 'flex-start',
                    }}
                  >
                    <label htmlFor="email" style={{ fontSize: 11 }}>
                      Votre adresse email
                    </label>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={style.input}
                  />
                  <div className="email error"></div>
                  <br />
                  <label htmlFor="password" style={{ fontSize: 11 }}>
                    Votre mot de passe
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={style.input}
                  />
                  <div className="password error"></div>
                  <div
                    style={{
                      fontSize: 8,
                      color: '#9E9E9E',
                      textDecoration: 'underline',
                    }}
                  >
                    Mot de passe oublié
                  </div>
                  <br />
                  <div className={style.button_continuer_container}>
                    <input
                      type="submit"
                      value="Continuer"
                      className={style.button_continuer}
                    />
                  </div>
                  <NavLink to="/register">
                    <p className={style.register}>M'inscrire</p>
                  </NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInForm;
