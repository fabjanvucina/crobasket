import React from "react"; //eslint-disable-line
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "@reach/router"; //eslint-disable-line
import app from "../firebase";
import "../style/LoginContainer.css";
import "../style/Tab.css";
import "../style/Hide.css";

const LoginContainer = ({ hideLogin }) => {
  app.auth().onAuthStateChanged(function (user) {
    console.log("auth state changed");

    if (user) {
      document.getElementById(
        "displayName"
      ).innerHTML = app.auth().currentUser.displayName;
    } else {
      document.getElementById("displayName").innerHTML = "Prijavi se";
    }
  });

  return (
    <Link to="/prijava" className="link">
      <div
        id="login-container"
        className={
          hideLogin === true
            ? "login-container tab hide"
            : "login-container tab"
        }
      >
        <span className="user" id="displayName"></span>
        <AccountCircleIcon id="login-icon" />
      </div>
    </Link>
  );
};

export default LoginContainer;
