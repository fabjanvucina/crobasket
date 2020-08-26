import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuContainer from "./MenuContainer";
import HeaderLogo from "../components/HeaderLogo";
import OptionsContainer from "./OptionsContainer";
import LoginContainer from "./LoginContainer";
import UserContext from "../contexts/UserContext";
import "../style/HeaderContainer.css";
import "../style/Link.css";

const HeaderContainer = ({ hideMenu, hideOptions, hideLogin }) => {
  const authState = useContext(UserContext);

  return (
    <div className="header">
      <MenuContainer hideMenu={hideMenu} />
      <Link to={authState.isAuthenticated ? "/gradovi" : "/"}>
        <HeaderLogo />
      </Link>
      <OptionsContainer hideOptions={hideOptions} />
      <LoginContainer hideLogin={hideLogin} />
    </div>
  );
};

export default HeaderContainer;
