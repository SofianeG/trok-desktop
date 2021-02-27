import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// import NavBar from '../components/NavBar/NavBar';
import HomePage from '../Screens/HomePageScreen/HomePage';
// import UserPage from '../components/Profil/UserPage';
// import PersonnalisationScreen from '../Screens/PersonnalisationScreen/PersonnalisationScreen';
// import SignInForm from '../Screens/SignInFormScreen/SignInForm';
// import SignUpForm from '../Screens/SignUpFormScreen/SignUpForm';
// import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
// import AboutScreen from '../Screens/AboutScreen/AboutScreen';
// import ParametersScreen from '../Screens/ParametresScreen/ParametersScreen';

const index = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        {/* <Route path="/login" exact component={SignInForm} />
        <Route path="/register" exact component={SignUpForm} /> */}
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/user" exact component={UserPage} />
        <Route path="/profile" exact component={ProfileScreen} />
        <Route path="/about" exact component={AboutScreen} />
        <Route path="/parametres" exact component={ParametersScreen} />
        <Route
          path="/personnalisation"
          exact
          component={PersonnalisationScreen}
        /> */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;
