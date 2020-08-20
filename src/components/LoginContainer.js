import React, { useContext, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "@reach/router";
import app from "../firebase";
import UserContext from "../UserContext";
import LoggedInDisplay from "./LoggedInDisplay";
import LoggedOutDisplay from "./LoggedOutDisplay";
import "../style/LoginContainer.css";
import "../style/Tab.css";
import "../style/Hide.css";

const LoginContainer = ({ hideLogin }) => {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      console.log("auth state changed");

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
  }, [setUser]);

  return (
    <Link to={user.isAuthenticated ? "/profil" : "/prijava"} className="link">
      <div
        id="login-container"
        className={
          hideLogin === true
            ? "login-container tab hide"
            : "login-container tab"
        }
      >
        {user.isAuthenticated ? (
          <LoggedInDisplay displayName={user.displayName} />
        ) : (
          <LoggedOutDisplay />
        )}
        <AccountCircleIcon id="login-icon" />
      </div>
    </Link>
  );
};

export default LoginContainer;
