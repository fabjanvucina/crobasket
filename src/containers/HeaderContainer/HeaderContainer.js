import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuContainer from "../MenuContainer/MenuContainer";
import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import OptionsTabContainer from "../OptionsTabContainer/OptionsTabContainer";
import LoginTabContainer from "../LoginTabContainer/LoginTabContainer";
import UserContext from "../../contexts/UserContext";
import "./HeaderContainer.css";
import "../../styles/Link.css";

const HeaderContainer = ({
  hideMenu,
  hideOptions,
  hideLogin,
  createInvitesActive,
  displayInvitesActive,
  profileActive
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
        createInvitesActive={createInvitesActive}
        displayInvitesActive={displayInvitesActive}
      />
      <LoginTabContainer hideLogin={hideLogin} profileActive={profileActive} />
    </div>
  );
};

export default HeaderContainer;
