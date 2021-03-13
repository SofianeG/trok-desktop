import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

//COMPONENTS
import HomePage from '../Screens/HomePageScreen/HomePage';
import UserPage from '../components/Profil/UserPage';
import PersonnalisationScreen from '../Screens/PersonnalisationScreen/PersonnalisationScreen';
import SignInForm from '../Screens/SignInFormScreen/SignInForm';
import SignUpForm from '../Screens/SignUpFormScreen/SignUpForm';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import AboutScreen from '../Screens/AboutScreen/AboutScreen';
import ParametersScreen from '../Screens/ParametersScreen/ParametersScreen';

const index = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/login" exact component={SignInForm} />
        <Route path="/register" exact component={SignUpForm} />
        <Route path="/" exact component={HomePage} />
        <PrivateRoute path="/user" exact component={UserPage} />
        <PrivateRoute path="/profile" exact component={ProfileScreen} />
        <PrivateRoute path="/about" exact component={AboutScreen} />
        <PrivateRoute path="/parameters" exact component={ParametersScreen} />
        <PrivateRoute
          path="/personnalisation"
          exact
          component={PersonnalisationScreen}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default index;
