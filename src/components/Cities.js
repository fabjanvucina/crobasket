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

/*
TODO: wait for issue resolve and refactor branch merge 
      merge header optimisation branch
      create profile component and conditionally link to it
      implement bootleg logout
*/
