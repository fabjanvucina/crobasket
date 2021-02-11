import React, { useEffect } from "react";
import HeaderContainer from "../containers/HeaderContainer/HeaderContainer";
import ProfileOptionsContainer from "../containers/ProfileOptionsContainer/ProfileOptionsContainer";
import "../styles/LogoutButton.css";

const ProfilePage = () => {
  useEffect(() => {
    document.body.classList.remove("dark");
  }, []);
  return (
    <>
      <HeaderContainer
        hideOptions={false}
        hideMenu={false}
        hideLogin={false}
        createInvitesActive={false}
        displayInvitesActive={false}
        profileActive={true}
      />
      <ProfileOptionsContainer />
    </>
  );
};

export default ProfilePage;
