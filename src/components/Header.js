import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import MenuDrawer from "./MenuDrawer";
import HeaderLogo from "./HeaderLogo";
import OptionsContainer from "./OptionsContainer";
import LoginContainer from "./LoginContainer";
import "../style/Header.css";
import "../style/Link.css";

const Header = ({ logoCenter, hideMenu, hideOptions, hideLogin }) => {
  return (
    <div className={logoCenter === true ? "header-center" : "header"}>
      {hideMenu === true ? <div className="menu"></div> : <MenuDrawer />}
      <Link to="/">
        <HeaderLogo logoCenter={logoCenter} />
      </Link>
      <OptionsContainer hideOptions={hideOptions} />
      <LoginContainer hideLogin={hideLogin} />
    </div>
  );
};

export default Header;
