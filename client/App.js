import React, {useState, useEffect} from 'react';
import Routes from './Routes';
import {UidContext} from './Routes/AppContext';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {getUser} from '../../client/src/actions/user.actions';

const App = () => {
  const [uid, setUid] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          setUid(res.data);
        })
        .catch((err) => console.log('no token ' + err));
    };
    fetchToken();

    if (uid) {
      dispatch(getUser(uid));
    }
  });

  return (
    <div>
      <UidContext.Provider value={uid}>
        <Routes />
      </UidContext.Provider>
    </div>
  );
};
export default App;
