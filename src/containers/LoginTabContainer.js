import React, { useContext, useEffect } from "react"; //eslint-disable-line
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.js"; //eslint-disable-line
import UserContext from "../contexts/UserContext";
import LoggedInDisplay from "../components/LoggedInDisplay";
import LoggedOutDisplay from "../components/LoggedOutDisplay";
import "../styles/containers/LoginTabContainer.css";
import "../styles/misc/Tab.css";
import "../styles/misc/Hide.css";

const LoginTabContainer = ({ hideLogin }) => {
  const [user] = useContext(UserContext); //eslint-disable-line

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

export default LoginTabContainer;
