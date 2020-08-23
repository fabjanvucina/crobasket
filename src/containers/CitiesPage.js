import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import Header from "./Header";
import Title from "../components//Title";
import CitiesContainer from "./CitiesContainer";

const CitiesPage = () => {
  return (
    <>
      <Header
        hideOptions={true}
        hideMenu={true}
        hideLogin={true}
        logoCenter={false}
      />
      <Title value="Odaberi grad" />
      <CitiesContainer />
    </>
  );
};

export default CitiesPage;
