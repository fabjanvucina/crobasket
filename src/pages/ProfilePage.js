import React, { useContext } from "react";
import { Link } from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer/HeaderContainer";
import SpanTitle from "../components/Title/SpanTitle";
import UserContext from "../contexts/UserContext";
import HometownContext from "../contexts/HometownContext";
import ProfileOptionsContainer from "../containers/ProfileOptionsContainer/ProfileOptionsContainer";
import "../styles/LogoutButton.css";

const ProfilePage = () => {
  const [user] = useContext(UserContext);
  const [hometown] = useContext(HometownContext);

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
      <SpanTitle value={user.displayName} type="userInfo" />
      <Link to="gradovi" className="link">
        <SpanTitle value={hometown} type="hometown" />
      </Link>
    </>
  );
};

export default ProfilePage;
