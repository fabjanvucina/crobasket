import React from "react";
import CreatedInviteFunctionalityContainer from "../CreatedInviteFunctionalityContainer/CreatedInviteFunctionalityContainer";
import AcceptedInviteFunctionalityContainer from "../AcceptedInviteFunctionalityContainer/AcceptedInviteFunctionalityContainer";
import InviteDetail from "../../components/InviteDetail/InviteDetail";
import "./ActiveInviteContainer.css";
import {
  increaseInvitees,
  decreaseInvitees,
  cancelAcceptedInvite
} from "../../firebase/inviteMethods.js";

const ActiveInviteContainer = ({
  inviteID,
  neighbourhood,
  displayDate,
  displayTime,
  invitees,
  phoneNumber,
  organizer,
  organizerUID,
  type
}) => {
  return (
    <div className={invitees > 0 ? "inviteCard red" : "inviteCard green"}>
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
        <CreatedInviteFunctionalityContainer
          handleIncrement={async () => {
            await increaseInvitees(inviteID, invitees);
            window.location.reload();
          }}
          handleDecrement={async () => {
            await decreaseInvitees(inviteID, invitees);
            window.location.reload();
          }}
        />
      ) : (
        <AcceptedInviteFunctionalityContainer
          handleCancellation={async () => {
            await cancelAcceptedInvite(inviteID, invitees, organizerUID);
            window.location.reload();
          }}
        />
      )}
    </div>
  );
};

export default ActiveInviteContainer;
