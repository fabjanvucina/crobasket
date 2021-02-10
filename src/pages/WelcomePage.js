import React from "react";
import HeaderContainer from "../containers/HeaderContainer/HeaderContainer";
import WelcomeMessage from "../components/WelcomeMessage/WelcomeMessage";
import WelcomeLoginButtonContainer from "../containers/WelcomeLoginButtonContainer/WelcomeLoginButtonContainer";
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
      <WelcomeMessage />
      <WelcomeLoginButtonContainer />
      <FooterContainer />
    </>
  );
};

export default WelcomePage;
