import React from "react";
import InviteDetail from "../../components/InviteDetail/InviteDetail";
import "./ExpiredInviteContainer.css";

const ExpiredInviteContainer = ({
  neighbourhood,
  displayDate,
  displayTime,
  organizer,
  type
}) => {
  return (
    <div className="inviteCard expired">
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
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ExpiredInviteContainer;
