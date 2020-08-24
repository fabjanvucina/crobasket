import React from "react";
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";
import { logout } from "../firebase/authMethods.js";
import "../style/ProfilePage.css";

const ProfilePage = () => {
  let history = useHistory();

  return (
    <>
      <HeaderContainer
        hideOptions={false}
        hideMenu={false}
        hideLogin={true}
        logoCenter={false}
      />
      <div id="logoutDiv">
        <button
          id="logoutButton"
          onClick={async () => {
            await logout();
            history.push("/");
          }}
        >
          LOGOUT
        </button>
      </div>
    </>
  );
};

export default ProfilePage;
