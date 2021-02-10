import React from "react";
import HeaderContainer from "../containers/HeaderContainer/HeaderContainer";
import LoginFormContainer from "../containers/LoginFormContainer/LoginFormContainer";

const LoginPage = () => {
  return (
    <>
      <HeaderContainer
        hideOptions={true}
        hideMenu={true}
        hideLogin={true}
        createInvitesActive={false}
        displayInvitesActive={false}
      />
      <LoginFormContainer />
    </>
  );
};

export default LoginPage;
