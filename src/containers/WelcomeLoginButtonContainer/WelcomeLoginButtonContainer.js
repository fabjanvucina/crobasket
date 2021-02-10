import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./WelcomeLoginButtonContainer.css";
import "../../styles/Link.css";

const WelcomeLoginButtonContainer = () => {
  return (
    <Link to="prijava" className="link">
      <Button type="primary" className="welcome-login">
        Prijavi se
      </Button>
    </Link>
  );
};

export default WelcomeLoginButtonContainer;
