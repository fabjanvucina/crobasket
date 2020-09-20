import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";
import CitiesListContainer from "../containers/CitiesListContainer";
import Title from "../components/Title";

const CitiesPage = () => {
  return (
    <>
      <HeaderContainer
        hideOptions={true}
        hideMenu={true}
        hideLogin={true}
        createInvitesActive={false}
        displayInvitesActive={false}
      />
      <Title value="Odaberi grad" type={"cityPage"} />
      <CitiesListContainer />
    </>
  );
};

export default CitiesPage;
