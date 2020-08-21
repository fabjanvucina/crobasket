import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router"; //eslint-disable-line
import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import Cities from "./Cities";
import Profile from "./Profile";
import UserContext from "../contexts/UserContext";
import "../style/style.css";

const App = () => {
  const userHook = useState({ isAuthenticated: false, displayName: "" });
  return (
    <React.StrictMode>
      <UserContext.Provider value={userHook}>
        <Router>
          <Welcome path="/" />
          <Login path="/prijava" />
          <Register path="/registracija" />
          <Profile path="/profil" />
          <Cities path="/gradovi" />
        </Router>
      </UserContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
