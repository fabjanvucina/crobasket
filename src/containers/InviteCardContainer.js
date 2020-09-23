import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import { Card, Button } from "antd"; //eslint-disable-line
import InviteDetail from "../components/InviteDetail";
import "../styles/containers/InviteCardContainer.css";

const InviteCardContainer = ({
  neighbourhood,
  date,
  time,
  invitees,
  phoneNumber,
  organizer,
  isAccepted,
  onClick
}) => {
  return (
    <div className={isAccepted ? "inviteCard accepted" : "inviteCard"}>
      <InviteDetail detailName="Kvart" detailValue={neighbourhood} />
      <InviteDetail detailName="Datum" detailValue={date} />
      <InviteDetail detailName="Vrijeme" detailValue={time} />
      <InviteDetail detailName="Nedostaje igrača" detailValue={invitees} />
      <InviteDetail detailName="Organizator" detailValue={organizer} />
      <InviteDetail detailName="Kontakt broj" detailValue={phoneNumber} />
      {isAccepted ? (
        <Button className="acceptedButton">Prihvaćeno</Button>
      ) : (
        <Button onClick={onClick} className="acceptInviteButton">
          Dolazim!
        </Button>
      )}
    </div>
  );
};

export default InviteCardContainer;
