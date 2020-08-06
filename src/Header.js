import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import MenuDrawer from "./MenuDrawer";
import HeaderLogo from "./HeaderLogo";
import OptionsContainer from "./OptionsContainer";
import LoginContainer from "./LoginContainer";

const Header = ({ showOptions, loggedIn, hideLogin, hideMenu, logoCenter }) => {
  return (
    <div className={logoCenter === true ? "header-center" : "header"}>
      <MenuDrawer hideMenu={hideMenu} />
      <Link to="/">
        <HeaderLogo logoCenter={logoCenter} />
      </Link>
      <OptionsContainer showOptions={showOptions} />
      <LoginContainer loggedIn={loggedIn} hideLogin={hideLogin} />
    </div>
  );
};

export default Header;
