import React from "react";
import { Button } from "antd";
import "./AcceptedInviteFunctionalityContainer.css";

const AcceptedInviteFunctionalityContainer = ({ handleCancellation }) => {
  return (
    <div className="acceptedInvite-functionality">
      <Button type="primary" className="cancel" onClick={handleCancellation}>
        Otkaži dolazak
      </Button>
    </div>
  );
};

export default AcceptedInviteFunctionalityContainer;
