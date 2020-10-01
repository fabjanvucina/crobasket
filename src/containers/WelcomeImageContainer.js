import React from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import WelcomeLoginButtonContainer from "./WelcomeLoginButtonContainer";
import "../styles/containers/WelcomeImageContainer.css";

const WelcomeImageContainer = () => {
  return (
    <div className="welcome-image">
      <WelcomeMessage />
      <WelcomeLoginButtonContainer />
    </div>
  );
};

export default WelcomeImageContainer;
