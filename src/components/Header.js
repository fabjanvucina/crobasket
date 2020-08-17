import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import MenuDrawer from "./MenuDrawer";
import HeaderLogo from "./HeaderLogo";
import OptionsContainer from "./OptionsContainer";
import LoginContainer from "./LoginContainer";
import "../style/Header.css";
import "../style/Link.css";

const Header = (props) => {
  return (
    <div className={props.logoCenter === true ? "header-center" : "header"}>
      <MenuDrawer hideMenu={props.hideMenu} />
      <Link to="/">
        <HeaderLogo logoCenter={props.logoCenter} />
      </Link>
      <OptionsContainer showOptions={props.showOptions} />
      <LoginContainer hideLogin={props.hideLogin} />
    </div>
  );
};

export default Header;
