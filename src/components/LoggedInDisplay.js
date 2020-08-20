import React from "react";
import "../style/LoginStatusDisplay.css";

const LoggedInDisplay = ({ displayName }) => {
  return (
    <span className="user" id="displayName">
      {displayName}
    </span>
  );
};

export default LoggedInDisplay;
