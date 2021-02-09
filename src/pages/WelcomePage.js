import React from "react";
import HeaderContainer from "../containers/HeaderContainer/HeaderContainer";
import WelcomeImageContainer from "../containers/WelcomeImageContainer/WelcomeImageContainer";
import FooterContainer from "../containers/FooterContainer/FooterContainer";

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
