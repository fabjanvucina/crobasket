import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";

const CreatedInvitesPage = () => {
  return (
    <HeaderContainer
      hideOptions={false}
      hideMenu={false}
      hideLogin={false}
      createInvitesActive={false}
      displayInvitesActive={false}
    />
  );
};

export default CreatedInvitesPage;
