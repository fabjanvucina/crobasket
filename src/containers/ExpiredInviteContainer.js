import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import { Card, Button } from "antd"; //eslint-disable-line
import InviteDetail from "../components/InviteDetail";
import "../styles/containers/ExpiredInviteContainer.css";

const ExpiredInviteContainer = ({
  neighbourhood,
  displayDate,
  displayTime,
  phoneNumber,
  organizer,
  type
}) => {
  return (
    <div
      className={
        type === "created"
          ? "created-expired-inviteCard"
          : "accepted-expired-inviteCard"
      }
    >
      <InviteDetail
        detailName="Datum"
        detailValue={displayDate}
        inviteType="expired"
      />
      <InviteDetail
        detailName="Vrijeme"
        detailValue={displayTime}
        inviteType="expired"
      />
      <InviteDetail
        detailName="Kvart"
        detailValue={neighbourhood}
        inviteType="expired"
      />
      {type === "accepted" ? (
        <>
          <InviteDetail
            detailName="Organizator"
            detailValue={organizer}
            inviteType="expired"
          />
          <InviteDetail
            detailName="Kontakt broj"
            detailValue={phoneNumber}
            inviteType="expired"
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ExpiredInviteContainer;
