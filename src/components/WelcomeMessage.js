import React from "react";
import "../styles/components/WelcomeMessage.css";

const WelcomeMessage = () => {
  return (
    <div className="welcome-message-container">
      <div className="welcome-message-line">Pridruži se ekipi.</div>
      <div className="welcome-message-line">Pozovi igrače.</div>
      <div className="welcome-message-line">Jednostavno je.</div>
    </div>
  );
};

export default WelcomeMessage;
