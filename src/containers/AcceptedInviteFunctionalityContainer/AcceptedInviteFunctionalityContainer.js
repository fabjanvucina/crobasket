import React from "react";
import { Button } from "antd";
import "./AcceptedInviteFunctionalityContainer.css";

const AcceptedInviteFunctionalityContainer = ({ handleCancellation }) => {
  return (
    <Button
      type="primary"
      className="acceptedInviteButton"
      onClick={handleCancellation}
    >
      Otkaži dolazak
    </Button>
  );
};

export default AcceptedInviteFunctionalityContainer;
