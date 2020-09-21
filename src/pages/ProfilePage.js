import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";
import SpanTitle from "../components/SpanTitle";
import UserContext from "../contexts/UserContext";
import HometownContext from "../contexts/HometownContext";
import ProfileOptionsContainer from "../containers/ProfileOptionsContainer";
import "../styles/pages/ProfilePage.css";

const ProfilePage = () => {
  let history = useHistory(); //eslint-disable-line
  const [user, setUser] = useContext(UserContext); //eslint-disable-line
  const [hometown] = useContext(HometownContext); //eslint-disable-line

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

      {/*       <div id="logoutDiv">
        <button
          id="logoutButton"
          onClick={async () => {
            await handleLogout(setUser, history);
          }}
        >
          LOGOUT
        </button>
      </div> */}
    </>
  );
};

export default ProfilePage;
