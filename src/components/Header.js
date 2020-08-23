import React, { useContext } from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import MenuDrawer from "./MenuDrawer";
import HeaderLogo from "./HeaderLogo";
import OptionsContainer from "./OptionsContainer";
import LoginContainer from "./LoginContainer";
import UserContext from "../contexts/UserContext";
import "../style/Header.css";
import "../style/Link.css";

const Header = ({ hideMenu, hideOptions, hideLogin }) => {
  const [user] = useContext(UserContext);

  return (
    <div className="header">
      <MenuDrawer hideMenu={hideMenu} />
      <Link to={user.isAuthenticated ? "/gradovi" : "/"}>
        <HeaderLogo />
      </Link>
      <OptionsContainer hideOptions={hideOptions} />
      <LoginContainer hideLogin={hideLogin} />
    </div>
  );
};

export default Header;
