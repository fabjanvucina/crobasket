import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import Header from "./Header";

const Welcome = () => {
  return (
    <Header
      showOptions={true}
      loggedIn={false}
      hideLogin={false}
      hideMenu={false}
      logoCenter={false}
    />
  );
};

export default Welcome;
