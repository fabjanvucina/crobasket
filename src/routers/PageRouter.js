import React, { useContext, useEffect } from "react"; //eslint-disable-line
import app from "../firebase/firebase.js"; //eslint-disable-line
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CitiesPage from "../pages/CitiesPage";
import ProfilePage from "../pages/ProfilePage";
import UserContext from "../contexts/UserContext";

const PageRouter = () => {
  const authState = useContext(UserContext); //eslint-disable-line
  console.log("is authenticated:", authState.isAuthenticated);

  useEffect(() => {
    app.auth().onAuthStateChanged((/* user */) => {
      console.log("auth state changed");
      /* console.log(user);
      if (user) {
        setUser({
          isAuthenticated: true,
          displayName: app.auth().currentUser.displayName
        });
      } else {
        setUser({
          isAuthenticated: false,
          displayName: ""
        });
      } */
    });
  }, [authState]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {authState.isAuthenticated ? (
            <Redirect to="/profil" />
          ) : (
            <WelcomePage />
          )}
        </Route>

        <Route exact path="/prijava">
          {authState.isAuthenticated ? (
            <Redirect to="/profil" />
          ) : (
            <LoginPage />
          )}
        </Route>

        <Route exact path="/registracija">
          {authState.isAuthenticated ? (
            <Redirect to="/profil" />
          ) : (
            <RegisterPage />
          )}
        </Route>

        <Route exact path="/profil">
          {authState.isAuthenticated ? (
            <ProfilePage />
          ) : (
            <Redirect to="/prijava" />
          )}
        </Route>

        <Route exact path="/gradovi">
          {authState.isAuthenticated ? (
            <CitiesPage />
          ) : (
            <Redirect to="/prijava" />
          )}
        </Route>

        {/* <WelcomePage path="/" />
        <LoginPage path="/prijava" />
        <RegisterPage path="/registracija" />
        <ProfilePage path="/profil" />
        <CitiesPage path="/gradovi" /> */}
      </Switch>
    </Router>
  );
};

export default PageRouter;
