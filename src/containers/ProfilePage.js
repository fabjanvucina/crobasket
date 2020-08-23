import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import Header from "./Header";
import { logout } from "../firebase/authMethods.js";
import "../style/ProfilePage.css";

const ProfilePage = () => {
  return (
    <>
      <Header
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
