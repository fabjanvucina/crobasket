import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import CreatedInviteFunctionalityContainer from "./CreatedInviteFunctionalityContainer"; //eslint-disable-line
import AcceptedInviteFunctionalityContainer from "./AcceptedInviteFunctionalityContainer"; //eslint-disable-line
import InviteDetail from "../components/InviteDetail";
import "../styles/containers/ActiveInviteContainer.css";

const ActiveInviteContainer = ({
  neighbourhood,
  displayDate,
  displayTime,
  invitees,
  phoneNumber,
  organizer,
  type
}) => {
  return (
    <div
      className={
        type === "created" && invitees > 0
          ? "created-active-inviteCard red"
          : type === "created"
          ? "created-active-inviteCard green"
          : type === "accepted" && invitees > 0
          ? "accepted-active-inviteCard red"
          : "accepted-active-inviteCard green"
      }
    >
      <InviteDetail
        detailName="Kvart"
        detailValue={neighbourhood}
        inviteType="active"
      />
      <InviteDetail
        detailName="Datum"
        detailValue={displayDate}
        inviteType="active"
      />
      <InviteDetail
        detailName="Vrijeme"
        detailValue={displayTime}
        inviteType="active"
      />
      <InviteDetail
        detailName="Nedostaje igrača"
        detailValue={invitees}
        inviteType="active"
      />

      {type === "accepted" ? (
        <>
          <InviteDetail
            detailName="Organizator"
            detailValue={organizer}
            inviteType="active"
          />
          <InviteDetail
            detailName="Kontakt broj"
            detailValue={phoneNumber}
            inviteType="active"
          />
        </>
      ) : (
        <></>
      )}
      {type === "created" ? (
        <CreatedInviteFunctionalityContainer />
      ) : (
        <AcceptedInviteFunctionalityContainer />
      )}
    </div>
  );
};

export default ActiveInviteContainer;
