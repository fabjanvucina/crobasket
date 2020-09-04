import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuContainer from "./MenuContainer";
import HeaderLogo from "../components/HeaderLogo";
import OptionsTabContainer from "./OptionsTabContainer";
import LoginTabContainer from "./LoginTabContainer";
import UserContext from "../contexts/UserContext";
import "../styles/containers/HeaderContainer.css";
import "../styles/misc/Link.css";

const HeaderContainer = ({
  hideMenu,
  hideOptions,
  hideLogin,
  createActive,
  showActive
}) => {
  const [user] = useContext(UserContext);

  return (
    <div className="header">
      <MenuContainer hideMenu={hideMenu} />
      <Link to={user.isAuthenticated ? "/gradovi" : "/"}>
        <HeaderLogo />
      </Link>
      <OptionsTabContainer
        hideOptions={hideOptions}
        createActive={createActive}
        showActive={showActive}
      />
      <LoginTabContainer hideLogin={hideLogin} />
    </div>
  );
};

export default HeaderContainer;
