import React from "react";
import { Link } from "react-router-dom";
import "../style/OptionsContainer.css";
import "../style/Tab.css";
import "../style/TabActive.css";
import "../style/Hide.css";
import "../style/Link.css";

const OptionsContainer = ({ hideOptions, createActive, showActive }) => {
  return (
    <div
      id="options-container"
      className={
        hideOptions === false ? "options-container" : "options-container hide"
      }
    >
      <div className={showActive ? " option tab tab-active" : "option tab"}>
        Tražim ekipu
      </div>
      <Link to="/pozivnica" className="link">
        <div className={createActive ? " option tab tab-active" : "option tab"}>
          Nedostaju mi igrač/i
        </div>
      </Link>
    </div>
  );
};

export default OptionsContainer;
