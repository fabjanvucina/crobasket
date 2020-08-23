import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router"; //eslint-disable-line
import WelcomePage from "./WelcomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import CitiesPage from "./CitiesPage";
import ProfilePage from "./ProfilePage";
import UserContext from "../contexts/UserContext";
import HometownContext from "../contexts/HometownContext";
import "../style/style.css";

const App = () => {
  const userHook = useState({ isAuthenticated: false, displayName: "" });
  const hometownHook = useState("");
  return (
    <React.StrictMode>
      <UserContext.Provider value={userHook}>
        <HometownContext.Provider value={hometownHook}>
          <Router>
            <WelcomePage path="/" />
            <LoginPage path="/prijava" />
            <RegisterPage path="/registracija" />
            <ProfilePage path="/profil" />
            <CitiesPage path="/gradovi" />
          </Router>
        </HometownContext.Provider>
      </UserContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
