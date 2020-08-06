import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "@reach/router"; //eslint-disable-line

const LoginContainer = ({ loggedIn, hideLogin }) => {
  return (
    <Link to="/login" className="link">
      <div
        id="login-container"
        className={
          hideLogin === true
            ? "login-container tab hide"
            : "login-container tab"
        }
      >
        <span className={loggedIn === false ? "login" : "login hide"}>
          Prijavi se
        </span>

        <span className={loggedIn === true ? "user" : "user hide"}>
          John Doe
        </span>
        <AccountCircleIcon id="login-icon" />
      </div>
    </Link>
  );
};

export default LoginContainer;
