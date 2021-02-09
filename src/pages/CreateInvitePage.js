import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";
import InviteFormContainer from "../containers/InviteFormContainer";
import UserContext from "../contexts/UserContext";

const CreateInvitePage = () => {
  let history = useHistory(); //eslint-disable-line
  const [user, setUser] = useContext(UserContext); //eslint-disable-line

  return (
    <>
      <HeaderContainer
        hideOptions={false}
        hideMenu={false}
        hideLogin={false}
        createInvitesActive={true}
        displayInvitesActive={false}
      />
      <InviteFormContainer />
    </>
  );
};

export default CreateInvitePage;
