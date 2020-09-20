import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import HeaderContainer from "../containers/HeaderContainer";
import Title from "../components/Title";
import UserContext from "../contexts/UserContext";
import { logout } from "../firebase/authMethods.js";
import "../styles/pages/ProfilePage.css";

const handleLogout = async (setUser, history) => {
  await logout();
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("displayName");
  localStorage.removeItem("hometown");
  localStorage.removeItem("phoneNumber");
  localStorage.removeItem("uid");
  setUser({
    isAuthenticated: false,
    displayName: "",
    phoneNumber: "",
    uid: ""
  });
  history.push("/");
};

const ProfilePage = () => {
  let history = useHistory();
  const [user, setUser] = useContext(UserContext);

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
      <Title value={user.displayName} />
      <div id="logoutDiv">
        <button
          id="logoutButton"
          onClick={async () => {
            await handleLogout(setUser, history);
          }}
        >
          LOGOUT
        </button>
      </div>
    </>
  );
};

export default ProfilePage;
