import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router"; //eslint-disable-line
import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import Cities from "./Cities";
import "../style/style.css";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Welcome path="/" />
        <Login path="/prijava" />
        <Register path="/registracija" />
        <Cities path="/gradovi" />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
