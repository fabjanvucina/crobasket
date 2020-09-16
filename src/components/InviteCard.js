import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import { Card } from "antd"; //eslint-disable-line
import "../styles/components/InviteCard.css"; //eslint-disable-line

const InviteCard = ({
  neighbourhood,
  date,
  time,
  invitees,
  phoneNumber,
  onClick
}) => {
  return (
    <div className="inviteCard">
      <div className="inviteDetail">{"Kvart: " + neighbourhood}</div>
      <div className="inviteDetail">{"Datum: " + date}</div>
      <div className="inviteDetail">{"Vrijeme: " + time}</div>
      <div className="inviteDetail">{"Nedostaje igrača: " + invitees}</div>
      <div className="inviteDetail">{"Kontakt broj: " + phoneNumber}</div>
      <button onClick={onClick} className="acceptInviteButton">
        Dolazim!
      </button>
    </div>
  );
};

export default InviteCard;
