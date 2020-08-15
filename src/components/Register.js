import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import Header from "./Header";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <>
      <Header
        showOptions={false}
        loggedIn={false}
        hideLogin={true}
        hideMenu={true}
        logoCenter={true}
      />
      <RegisterForm />
    </>
  );
};

export default Register;
