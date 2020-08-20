import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import Header from "./Header";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <>
      <Header
        hideOptions={true}
        hideMenu={true}
        hideLogin={true}
        logoCenter={true}
      />
      <RegisterForm />
    </>
  );
};

export default Register;
