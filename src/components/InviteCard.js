import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import { Card, Button } from "antd"; //eslint-disable-line
import "../styles/components/InviteCard.css"; //eslint-disable-line
import moment from "moment";

const InviteCard = ({
  neighbourhood,
  dateTime,
  invitees,
  phoneNumber,
  onClick
}) => {
  let date = moment(dateTime).format("DD/MM/YYYY");
  let time = moment(dateTime).format("HH:mm");
  return (
    <div className="inviteCard">
      <div className="inviteDetail">{"Kvart: " + neighbourhood}</div>
      <div className="inviteDetail">{"Datum: " + date}</div>
      <div className="inviteDetail">{"Vrijeme: " + time}</div>
      <div className="inviteDetail">{"Nedostaje igrača: " + invitees}</div>
      <div className="inviteDetail">{"Kontakt broj: " + phoneNumber}</div>
      <Button onClick={onClick} className="acceptInviteButton">
        Dolazim!
      </Button>
    </div>
  );
};

export default InviteCard;
