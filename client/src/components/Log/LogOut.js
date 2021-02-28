import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';

const LogOut = () => {
  const removeCookie = (key) => {
    if (window !== 'undefined') {
      cookie.remove('jwt', { expires: 1 });
    }
  };

  const logout = async () => {
    await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    })
      .then((res) => res.removeCookie('jwt'))
      .catch((err) => console.log(err));

    window.location = '/login';
  };

  return (
    <p onClick={logout} style={{ color: 'red', cursor: 'pointer' }}>
      X
    </p>
  );
};

export default LogOut;
