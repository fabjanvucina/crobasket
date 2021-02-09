import React from "react";
import "../styles/components/LoginStatusDisplay.css";

const LoggedInDisplay = ({ displayName }) => {
  return (
    <span className="user" id="displayName">
      {displayName}
    </span>
  );
};

export default LoggedInDisplay;
