import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import Header from "./Header";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <>
      <Header
        showOptions={false}
        loggedIn={false}
        hideLogin={true}
        hideMenu={true}
        logoCenter={true}
      />
      <SignUpForm />
    </>
  );
};

export default SignUp;
