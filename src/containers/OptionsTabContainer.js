import React from "react";
import { Link } from "react-router-dom";
import "../styles/containers/OptionsTabContainer.css";
import "../styles/misc/Tab.css";
import "../styles/misc/TabActive.css";
import "../styles/misc/Hide.css";
import "../styles/misc/Link.css";

const OptionsTabContainer = ({
  hideOptions,
  createInvitesActive,
  displayInvitesActive
}) => {
  return (
    <div
      id="options-container"
      className={
        hideOptions === false ? "options-container" : "options-container hide"
      }
    >
      <Link to="/pridruzi-se-ekipi" className="link">
        <div
          className={
            displayInvitesActive ? " option tab tab-active" : "option tab"
          }
        >
          Tražim ekipu
        </div>
      </Link>
      <Link to="/organiziraj-basket" className="link">
        <div
          className={
            createInvitesActive ? " option tab tab-active" : "option tab"
          }
        >
          Nedostaju mi igrač/i
        </div>
      </Link>
    </div>
  );
};

export default OptionsTabContainer;
