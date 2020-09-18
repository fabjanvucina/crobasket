import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";

const WelcomePage = () => {
  return (
    <HeaderContainer
      hideOptions={true}
      hideMenu={true}
      hideLogin={false}
      createInvitesActive={false}
      displayInvitesActive={false}
    />
  );
};

export default WelcomePage;
