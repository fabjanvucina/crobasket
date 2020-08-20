import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import Header from "./Header";

const Cities = () => {
  return (
    <Header
      hideOptions={true}
      hideMenu={true}
      hideLogin={false}
      logoCenter={false}
    />
  );
};

export default Cities;
