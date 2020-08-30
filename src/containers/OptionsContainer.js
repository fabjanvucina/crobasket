import React from "react";
import { Link } from "react-router-dom";
import "../style/OptionsContainer.css";
import "../style/Tab.css";
import "../style/Hide.css";
import "../style/Link.css";

const OptionsContainer = ({ hideOptions }) => {
  return (
    <div
      id="options-container"
      className={
        hideOptions === false ? "options-container" : "options-container hide"
      }
    >
      <div className="option tab">Tražim ekipu</div>
      <Link to="/pozivnica" className="link">
        <div className="option tab">Nedostaju mi igrač/i</div>
      </Link>
    </div>
  );
};

export default OptionsContainer;
