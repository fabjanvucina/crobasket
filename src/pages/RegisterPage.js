import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";
import RegisterFormContainer from "../containers/RegisterFormContainer";

const RegisterPage = () => {
  return (
    <>
      <HeaderContainer
        hideOptions={true}
        hideMenu={true}
        hideLogin={true}
        createActive={false}
        showActive={false}
      />
      <RegisterFormContainer />
    </>
  );
};

export default RegisterPage;
