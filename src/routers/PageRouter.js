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
  const [user, setUser] = useContext(UserContext); //eslint-disable-line
  console.log("is authenticated:", user.isAuthenticated);

  useEffect(() => {
    app.auth().onAuthStateChanged((/* user */) => {
      console.log("auth state changed");
      /* if (user) {
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
  }, [setUser]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user.isAuthenticated ? <Redirect to="/profil" /> : <WelcomePage />}
        </Route>

        <Route exact path="/prijava">
          {user.isAuthenticated ? <Redirect to="/profil" /> : <LoginPage />}
        </Route>

        <Route exact path="/registracija">
          {user.isAuthenticated ? <Redirect to="/profil" /> : <RegisterPage />}
        </Route>

        <Route exact path="/profil">
          {user.isAuthenticated ? <ProfilePage /> : <Redirect to="/prijava" />}
        </Route>

        <Route exact path="/gradovi">
          {user.isAuthenticated ? <CitiesPage /> : <Redirect to="/prijava" />}
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
