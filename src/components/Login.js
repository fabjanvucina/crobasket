import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <Header
        hideOptions={true}
        hideMenu={true}
        hideLogin={true}
        logoCenter={true}
      />
      <LoginForm />
    </>
  );
};

export default Login;
