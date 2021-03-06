import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import { Card, Button } from "antd"; //eslint-disable-line
import InviteDetail from "../../components/InviteDetail/InviteDetail";
import "./InviteCardContainer.css";

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
    <div
      className={
        isAccepted
          ? "inviteCard accepted"
          : invitees === 0
          ? "inviteCard filled"
          : "inviteCard"
      }
    >
      <InviteDetail detailName="Kvart" detailValue={neighbourhood} />
      <InviteDetail detailName="Datum" detailValue={date} />
      <InviteDetail detailName="Vrijeme" detailValue={time} />
      <InviteDetail detailName="Nedostaje igrača" detailValue={invitees} />
      <InviteDetail detailName="Organizator" detailValue={organizer} />
      <InviteDetail detailName="Kontakt broj" detailValue={phoneNumber} />
      {isAccepted ? (
        <Button className="inviteButton disabled" disabled={true}>
          Prihvaćeno
        </Button>
      ) : invitees === 0 ? (
        <Button className="inviteButton disabled" disabled={true}>
          Popunjeno
        </Button>
      ) : (
        <Button onClick={onClick} className="inviteButton">
          Dolazim!
        </Button>
      )}
    </div>
  );
};

export default InviteCardContainer;
