import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import { Card, Button } from "antd"; //eslint-disable-line
import InviteDetail from "../components/InviteDetail";
import "../styles/components/InviteCard.css"; //eslint-disable-line
import moment from "moment";

const InviteCard = ({
  neighbourhood,
  dateTime,
  invitees,
  phoneNumber,
  organizer,
  onClick
}) => {
  let date = moment(dateTime).format("DD/MM/YYYY");
  let time = moment(dateTime).format("HH:mm");
  return (
    <div className="inviteCard">
      <InviteDetail detailName="Kvart" detailValue={neighbourhood} />
      <InviteDetail detailName="Datum" detailValue={date} />
      <InviteDetail detailName="Vrijeme" detailValue={time} />
      <InviteDetail detailName="Nedostaje igrača" detailValue={invitees} />
      <InviteDetail detailName="Organizator" detailValue={organizer} />
      <InviteDetail detailName="Kontakt broj" detailValue={phoneNumber} />
      <Button onClick={onClick} className="acceptInviteButton">
        Dolazim!
      </Button>
    </div>
  );
};

export default InviteCard;
