import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";
import Title from "../components/Title";
import UserContext from "../contexts/UserContext";
import { logout } from "../firebase/authMethods.js";
import "../style/ProfilePage.css";

const handleLogout = async () => {
  await logout();
  localStorage.setItem("isAuthenicated", false);
  localStorage.setItem("displayName", "");
};

const ProfilePage = () => {
  let history = useHistory();
  const [user, setUser] = useContext(UserContext); //eslint-disable-line

  return (
    <>
      <HeaderContainer
        hideOptions={false}
        hideMenu={false}
        hideLogin={true}
        logoCenter={false}
      />
      <Title value={user.displayName} />
      <div id="logoutDiv">
        <button
          id="logoutButton"
          onClick={async () => {
            await handleLogout();
            /* await logout();
            setUser({
              isAuthenticated: false,
              displayName: ""
            }); */
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
