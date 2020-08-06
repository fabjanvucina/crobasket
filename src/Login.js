import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <Header
        showOptions={false}
        loggedIn={false}
        hideLogin={true}
        hideMenu={true}
        logoCenter={true}
      />
      <LoginForm />
    </>
  );
};

export default Login;
