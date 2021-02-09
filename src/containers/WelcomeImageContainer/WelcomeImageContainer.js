import React from "react";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";
import WelcomeLoginButtonContainer from "../WelcomeLoginButtonContainer/WelcomeLoginButtonContainer";
import "./WelcomeImageContainer.css";

const WelcomeImageContainer = () => {
  return (
    <div className="welcome-image">
      <WelcomeMessage />
      <WelcomeLoginButtonContainer />
    </div>
  );
};

export default WelcomeImageContainer;
