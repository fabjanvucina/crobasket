import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import Header from "./Header";

const Cities = () => {
  return (
    <Header
      showOptions={false}
      loggedIn={true}
      hideLogin={false}
      hideMenu={false}
      logoCenter={false}
    />
  );
};

export default Cities;
