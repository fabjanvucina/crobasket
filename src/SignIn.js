import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import Header from "./Header";
import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <>
      <Header
        showOptions={false}
        loggedIn={false}
        hideLogin={true}
        hideMenu={true}
        logoCenter={true}
      />
      <SignInForm />
    </>
  );
};

export default SignIn;
