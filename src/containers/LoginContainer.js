import React, { useContext, useEffect } from "react"; //eslint-disable-line
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.js"; //eslint-disable-line
import UserContext from "../contexts/UserContext";
import LoggedInDisplay from "../components/LoggedInDisplay";
import LoggedOutDisplay from "../components/LoggedOutDisplay";
import "../style/LoginContainer.css";
import "../style/Tab.css";
import "../style/Hide.css";

const LoginContainer = ({ hideLogin }) => {
  const authState = useContext(UserContext); //eslint-disable-line

  /*   useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
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
      }
    });
  }, [setUser]); */

  return (
    <Link
      to={authState.isAuthenticated ? "/profil" : "/prijava"}
      className="link"
    >
      <div
        id="login-container"
        className={
          hideLogin === true
            ? "login-container tab hide"
            : "login-container tab"
        }
      >
        {authState.isAuthenticated ? (
          <LoggedInDisplay displayName={authState.displayName} />
        ) : (
          <LoggedOutDisplay />
        )}
        <AccountCircleIcon id="login-icon" />
      </div>
    </Link>
  );
};

export default LoginContainer;
