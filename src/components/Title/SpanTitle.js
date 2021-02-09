import React from "react";
import "./Title.css";
import "../../styles/Uppercase.css";

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
