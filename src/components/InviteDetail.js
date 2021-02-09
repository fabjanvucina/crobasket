import React from "react";
import "../styles/components/InviteDetail.css";

const InviteDetail = ({ detailName, detailValue, inviteType }) => {
  return (
    <div
      className={
        inviteType === "expired" || inviteType === "active"
          ? "invite-detail inline"
          : "invite-detail"
      }
    >
      {detailName + ": "}
      <span className="invite-detail-value">{detailValue}</span>
    </div>
  );
};

export default InviteDetail;
