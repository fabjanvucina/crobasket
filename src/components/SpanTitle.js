import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import "../styles/components/Title.css";
import "../styles/misc/Uppercase.css";

const SpanTitle = ({ value, type }) => {
  return (
    <span
      className={
        type === "cityPage"
          ? "city-page uppercase"
          : type === "userInfo"
          ? "user-display-name"
          : "hometown-info"
      }
    >
      {value}
    </span>
  );
};

export default SpanTitle;
