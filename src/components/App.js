import React, { useState, useContext, createContext } from "react"; //eslint-disable-line
import { render } from "react-dom";
import { Router, Link } from "@reach/router"; //eslint-disable-line
import Welcome from "./Welcome";
import Login from "./Login";
import SignUp from "./SignUp";
import Cities from "./Cities";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Welcome path="/" />
        <Login path="/prijava" />
        <SignUp path="/registracija" />
        <Cities path="/gradovi" />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
