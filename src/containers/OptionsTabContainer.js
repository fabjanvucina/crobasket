import React from "react";
import { Link } from "react-router-dom";
import "../styles/containers/OptionsTabContainer.css";
import "../styles/misc/Tab.css";
import "../styles/misc/TabActive.css";
import "../styles/misc/Hide.css";
import "../styles/misc/Link.css";

const OptionsTabContainer = ({ hideOptions, createActive, showActive }) => {
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

export default OptionsTabContainer;
