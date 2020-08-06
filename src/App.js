import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router"; //eslint-disable-line
import Welcome from "./Welcome";
import Login from "./Login";
import SignIn from "./SignIn";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Welcome path="/" />
        <Login path="/login" />
        <SignIn path="/signin" />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
