import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";
import { logout } from "../firebase/authMethods.js";
import "../style/ProfilePage.css";

const ProfilePage = () => {
  return (
    <>
      <HeaderContainer
        hideOptions={false}
        hideMenu={false}
        hideLogin={true}
        logoCenter={false}
      />
      <div id="logoutDiv">
        <button id="logoutButton" onClick={() => logout()}>
          LOGOUT
        </button>
      </div>
    </>
  );
};

export default ProfilePage;
