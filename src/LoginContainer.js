import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const LoginContainer = ({ loggedIn }) => {
  return (
    <div id="login-container" className="login-container tab">
      <span className={loggedIn === false ? "login" : "login-hidden"}>
        LOGIN
      </span>
      <span className={loggedIn === true ? "user" : "user-hidden"}>
        John Doe
      </span>
      <AccountCircleIcon id="login-icon" />
    </div>
  );
};

export default LoginContainer;
