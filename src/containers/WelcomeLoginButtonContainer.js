import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "../styles/containers/WelcomeLoginButtonContainer.css";
import "../styles/misc/Link.css";

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
