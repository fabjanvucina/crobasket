import React, { useState, useContext, useEffect } from "react"; //eslint-disable-line
import { Link, useHistory } from "react-router-dom";
import { Divider } from "antd";
import UserContext from "../../contexts/UserContext";
import ProfileOption from "../../components/ProfileOption/ProfileOption";
import { logout } from "../../firebase/authMethods.js";
import "./ProfileOptionsContainer.css";
import "../../styles/Divider.css";

const ProfileOptionsContainer = () => {
  let history = useHistory();
  const [user, setUser] = useContext(UserContext); //eslint-disable-line

  return (
    <div className="profile-options-container">
      <Link to="objavljene-pozivnice" className="link">
        <ProfileOption value="Objavljene pozivnice" />
      </Link>
      <Divider />
      <Link to="prihvacene-pozivnice" className="link">
        <ProfileOption value="Prihvaćene pozivnice" />
      </Link>
      <Divider />
      <ProfileOption
        value="Odjava"
        logout={true}
        handleLogout={async () => {
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
        }}
      />
    </div>
  );
};

export default ProfileOptionsContainer;
