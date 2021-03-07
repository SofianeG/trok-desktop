import React from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import G from '../../../assets/Icons/icons8-google.svg';
import style from './GoogleButton.module.css';

const GoogleButton = () => {
  //   const responseSuccessGoogle = (response) => {
  //     console.log(response);
  //     axios({
  //       method: 'POST',
  //       url: `${process.env.REACT_APP_API_URL}api/user/googleLogin`,
  //       data: { tokenId: response.tokenId },
  //     }).then((response) => {
  //       console.log('Google login Success', response);
  //     });
  //   };

  // const responseErrorGoogle = (response) => {
  //   console.log('[Login failed] res :', response);
  // };

  return (
    <div>
      <GoogleLogin
        // clientId="66744854908-b0ako8jl000jnat52216is95ma1c66c5.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            className={style.button_G}
            // onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Login avec Google
          </button>
        )}
        // onSuccess={responseSuccessGoogle}
        // onFailure={responseErrorGoogle}
        // cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleButton;
