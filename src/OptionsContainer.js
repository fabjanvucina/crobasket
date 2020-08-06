import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line

const OptionsContainer = ({ showOptions }) => {
  return (
    <div
      id="options-container"
      className={
        showOptions === true ? "options-container" : "options-container hide"
      }
    >
      <span className="option tab">Tražim ekipu</span>
      <span className="option tab">Nedostaju mi igrač/i</span>
    </div>
  );
};

export default OptionsContainer;
