import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";

const AcceptedInvitesPage = () => {
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

export default AcceptedInvitesPage;
