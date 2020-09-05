import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";
import InvitesFilterContainer from "../containers/InvitesFilterContainer"; //eslint-disable-line

import UserContext from "../contexts/UserContext";

const DisplayInvitesPage = () => {
  let history = useHistory(); //eslint-disable-line
  const [user, setUser] = useContext(UserContext); //eslint-disable-line

  return (
    <>
      <HeaderContainer
        hideOptions={false}
        hideMenu={false}
        hideLogin={false}
        createActive={false}
        showActive={true}
      />
    </>
  );
};

export default DisplayInvitesPage;
