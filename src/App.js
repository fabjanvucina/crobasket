import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router"; //eslint-disable-line
import Welcome from "./Welcome";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Welcome path="/" />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
