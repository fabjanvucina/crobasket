import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";
import LoginFormContainer from "../containers/LoginFormContainer";

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
