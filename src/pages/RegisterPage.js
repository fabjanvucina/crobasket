import React from "react";
import HeaderContainer from "../containers/HeaderContainer/HeaderContainer";
import RegisterFormContainer from "../containers/RegisterFormContainer/RegisterFormContainer";

const RegisterPage = () => {
  return (
    <>
      <HeaderContainer
        hideOptions={true}
        hideMenu={true}
        hideLogin={true}
        createInvitesActive={false}
        displayInvitesActive={false}
      />
      <RegisterFormContainer />
    </>
  );
};

export default RegisterPage;
