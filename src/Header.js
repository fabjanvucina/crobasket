import React from "react";
import { Router, Link } from "@reach/router"; //eslint-disable-line
import MenuDrawer from "./MenuDrawer";
import HeaderLogo from "./HeaderLogo";
import OptionsContainer from "./OptionsContainer";
import LoginContainer from "./LoginContainer";

const Header = ({ showOptions, loggedIn }) => {
  return (
    <div className="header">
      <MenuDrawer />
      <Link to="/">
        <HeaderLogo />
      </Link>
      <OptionsContainer showOptions={showOptions} />
      <LoginContainer loggedIn={loggedIn} />
    </div>
  );
};

export default Header;
