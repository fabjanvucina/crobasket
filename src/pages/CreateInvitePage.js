import React from "react";
import HeaderContainer from "../containers/HeaderContainer/HeaderContainer";
import InviteFormContainer from "../containers/InviteFormContainer/InviteFormContainer";

const CreateInvitePage = () => {
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
