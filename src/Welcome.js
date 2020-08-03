import React from "react";
import { Router, Link } from "@reach/router"; //eslint-disable-line
import Header from "./Header";

const Welcome = () => {
  return <Header showOptions={true} loggedIn={false} />;
};

export default Welcome;
