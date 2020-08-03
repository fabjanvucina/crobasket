import React from "react";
import { Router, Link } from "@reach/router"; //eslint-disable-line
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./img/crobasket_logo.jpg";

const Header = ({ showOptions, loggedIn }) => {
  return (
    <div className="header">
      {/* <div className="menu tab">
        <MenuIcon id="menu" />
      </div> */}
      <Link to="/">
        <img src={logo} className="logo" alt="logo" id="logo" />
      </Link>

      <div
        id="options-container"
        className={
          showOptions === true
            ? "options-container"
            : "options-container-hidden"
        }
      >
        <span className="option tab">Tražim ekipu</span>
        <span className="option tab">Nedostaju mi igrač/i</span>
      </div>
      <div id="login-container" className="login-container tab">
        <span className={loggedIn === false ? "login" : "login-hidden"}>
          LOGIN
        </span>
        <span className={loggedIn === true ? "user" : "user-hidden"}>
          John Doe
        </span>
        <AccountCircleIcon id="login-icon" />
      </div>
    </div>
  );
};

export default Header;
