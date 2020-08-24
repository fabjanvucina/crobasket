import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import "../style/OptionsContainer.css";
import "../style/Tab.css";
import "../style/Hide.css";

const OptionsContainer = ({ hideOptions }) => {
  return (
    <div
      id="options-container"
      className={
        hideOptions === false ? "options-container" : "options-container hide"
      }
    >
      <span className="option tab">Tražim ekipu</span>
      <span className="option tab">Nedostaju mi igrač/i</span>
    </div>
  );
};

export default OptionsContainer;
