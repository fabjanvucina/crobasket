import React, { useContext } from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import MenuContainer from "./MenuContainer";
import HeaderLogo from "../components/HeaderLogo";
import OptionsContainer from "./OptionsContainer";
import LoginContainer from "./LoginContainer";
import UserContext from "../contexts/UserContext";
import "../style/HeaderContainer.css";
import "../style/Link.css";

const HeaderContainer = ({ hideMenu, hideOptions, hideLogin }) => {
  const [user] = useContext(UserContext);

  return (
    <div className="header">
      <MenuContainer hideMenu={hideMenu} />
      <Link to={user.isAuthenticated ? "/gradovi" : "/"}>
        <HeaderLogo />
      </Link>
      <OptionsContainer hideOptions={hideOptions} />
      <LoginContainer hideLogin={hideLogin} />
    </div>
  );
};

export default HeaderContainer;
