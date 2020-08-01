import React from "react";
import { Router, Link } from "@reach/router"; //eslint-disable-line
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logo from "./img/crobasket_logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" id="logo" />
      </Link>
      <div id="login-container" className="login-container">
        <span className="glow">LOGIN</span>
        <AccountCircleIcon className="login-icon glow" />
      </div>
    </div>
  );
};

export default Header;
