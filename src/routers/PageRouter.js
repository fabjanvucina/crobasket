import React, { useContext, useEffect } from "react";
import app from "../firebase/firebase.js";
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
import CreateInvitePage from "../pages/CreateInvitePage";
import DisplayInvitesPage from "../pages/DisplayInvitesPage";
import CreatedInvitesPage from "../pages/CreatedInvitesPage";
import AcceptedInvitesPage from "../pages/AcceptedInvitesPage";
import UserContext from "../contexts/UserContext";
import HometownContext from "../contexts/HometownContext";

const profileRedirect = (isAuthenticated, hometown) => {
  if (!isAuthenticated) {
    return <Redirect to="/prijava" />;
  } else if (hometown === "") {
    return <Redirect to="/gradovi" />;
  } else {
    return <ProfilePage />;
  }
};

const PageRouter = () => {
  const [user, setUser] = useContext(UserContext);
  const [hometown] = useContext(HometownContext);

  useEffect(() => {
    app.auth().onAuthStateChanged(() => {
      console.log("auth state changed");
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
          {profileRedirect(user.isAuthenticated, hometown)}
        </Route>

        <Route exact path="/gradovi">
          {user.isAuthenticated ? <CitiesPage /> : <Redirect to="/prijava" />}
        </Route>

        <Route exact path="/organiziraj-basket">
          {user.isAuthenticated ? (
            <CreateInvitePage />
          ) : (
            <Redirect to="/prijava" />
          )}
        </Route>

        <Route exact path="/pridruzi-se-ekipi">
          {user.isAuthenticated ? (
            <DisplayInvitesPage />
          ) : (
            <Redirect to="/prijava" />
          )}
        </Route>

        <Route exact path="/objavljene-pozivnice">
          {user.isAuthenticated ? (
            <CreatedInvitesPage />
          ) : (
            <Redirect to="/prijava" />
          )}
        </Route>

        <Route exact path="/prihvacene-pozivnice">
          {user.isAuthenticated ? (
            <AcceptedInvitesPage />
          ) : (
            <Redirect to="/prijava" />
          )}
        </Route>
      </Switch>
    </Router>
  );
};

export default PageRouter;
