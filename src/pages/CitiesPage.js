import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";
import CitiesContainer from "../containers/CitiesContainer";
import Title from "../components/Title";

const CitiesPage = () => {
  return (
    <>
      <HeaderContainer
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
