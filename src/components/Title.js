import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import "../styles/components/Title.css";
import "../styles/misc/Uppercase.css";

const Title = ({ value, type }) => {
  return (
    <div
      className={
        type === "cityPage"
          ? "top uppercase"
          : type === "userInvites"
          ? "top userInvites"
          : type === "userInfo"
          ? "user-display-name"
          : "hometown-info"
      }
    >
      {value}
    </div>
  );
};

export default Title;
