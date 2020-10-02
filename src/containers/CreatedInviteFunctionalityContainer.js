import React from "react";
import { Button } from "antd";
import "../styles/containers/CreatedInviteFunctionalityContainer.css";

const CreatedInviteFunctionalityContainer = ({
  handleIncrement,
  handleDecrement
}) => {
  return (
    <div className="createdInvite-functionality">
      <span className="change-invitees">Nedostaje igrača:</span>
      <Button shape="circle" onClick={handleIncrement}>
        +
      </Button>
      <Button shape="circle" onClick={handleDecrement}>
        -
      </Button>
    </div>
  );
};

export default CreatedInviteFunctionalityContainer;
