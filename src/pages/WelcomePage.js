import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";
import WelcomeImageContainer from "../containers/WelcomeImageContainer";
import FooterContainer from "../containers/FooterContainer";

const WelcomePage = () => {
  return (
    <>
      <HeaderContainer
        hideOptions={true}
        hideMenu={true}
        hideLogin={false}
        createInvitesActive={false}
        displayInvitesActive={false}
      />
      <WelcomeImageContainer />
      <FooterContainer />
    </>
  );
};

export default WelcomePage;
