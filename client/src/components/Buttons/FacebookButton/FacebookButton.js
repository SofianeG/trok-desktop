import React from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import FB from '../../../assets/Icons/icons8-facebook_f.svg';
import style from './FacebookButton.module.css';

const FacebookButton = () => {
  // const responseFacebook = (response) => {
  //   console.log(response);
  //   axios({
  //     method: 'POST',
  //     url: `${process.env.REACT_APP_API_URL}api/user/facebookLogin`,
  //     data: { accessToken: response.accessToken, userID: response.userID },
  //   }).then((response) => {
  //     console.log('Facebook login Success', response);
  //   });
  // };

  return (
    <div>
      <FacebookLogin
        // appId="468542737859720"
        // autoLoad={false}
        // callback={responseFacebook}
        cssClass={style.button_FB}
        render={(renderProps) => (
          <div>
            <img src={FB} alt="icon" />
            <button>Login avec Facebook</button>
          </div>
        )}
      />
    </div>
  );
};

export default FacebookButton;
