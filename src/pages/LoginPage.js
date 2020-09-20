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
        createActive={false}
        showActive={false}
      />
      <LoginFormContainer />
    </>
  );
};

export default LoginPage;
