import React from "react";
import "../styles/components/ProfileOption.css";

const ProfileOption = ({ value, logout, handleLogout }) => {
  return (
    <>
      {logout ? (
        <div
          role="button"
          tabIndex={0}
          className="profile-option logout"
          onClick={handleLogout}
          onKeyDown={handleLogout}
        >
          {value}
        </div>
      ) : (
        <div className="profile-option">{value}</div>
      )}
    </>
  );
};

export default ProfileOption;
