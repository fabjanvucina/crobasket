import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";

const WelcomePage = () => {
  return (
    <HeaderContainer
      hideOptions={true}
      hideMenu={true}
      hideLogin={false}
      logoCenter={false}
    />
  );
};

export default WelcomePage;
