import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import LogOut from '../Log/LogOut';
// import { UidContext } from '../../Routes/AppContext';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import style from './NavBar.module.css';

import logo from '../../assets/Icons/trokeo.svg';
import userLogo from '../../assets/Icons/icons8-user-1.svg';
// import UserPage from '../Profil/UserPage';
import edit from '../../assets/Icons/icons8-edit.svg';

const NavBar = () => {
  // const uid = useContext(UidContext);

  // const userData = useSelector((state) => state.userReducer);
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: 'LOGOUT', payload: null });
    window.localStorage.removeItem('auth');
    history.push('/login');
  };

  return (
    <div className={style.navContainer}>
      <div className={style.navContainerLeft}>
        <div style={{ display: 'flex' }}>
          <NavLink exact to="/">
            <img src={logo} alt="icon" />
          </NavLink>
        </div>
        <div style={{ display: 'flex', backgroundColor: 'blue' }}>
          <input
            className={style.input}
            placeholder="Rechercher des mots clés"
          />
        </div>
        <div
          style={{ backgroundColor: 'pink', justifyContent: 'space-between' }}
        >
          <button className={style.button}>
            <img src={edit} alt="#" className={style.editIcon} />
            Deposer une Annonce
          </button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: 320,
          justifyContent: 'space-between',
          backgroundColor: 'pink',
          alignSelf: 'center',
        }}
      >
        <div className={style.Association}>Association</div>
        <div className={style.Favorites}>Favoris</div>
        <div className={style.Messages}>Messages</div>
        <div>
          {auth !== null && (
            <>
              <div style={{ marginLeft: 10 }}>
                <NavLink to="/user" style={{ textDecoration: 'none' }}>
                  <img src={userLogo} alt="icon" />
                  &nbsp;
                  {auth.user.firstName}
                </NavLink>
              </div>
            </>
          )}
          {auth == null && (
            <NavLink to="/login" style={{ textDecoration: 'none' }}>
              <div className={style.connectionContainer}>
                <img src={userLogo} alt="#" />
                Se connecter
              </div>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
