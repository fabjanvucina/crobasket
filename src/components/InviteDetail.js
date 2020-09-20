import React from "react";

const InviteDetail = ({ detailName, detailValue }) => {
  return (
    <div className="inviteDetail">
      {detailName + ": "}
      <span className="inviteDetailValue">{detailValue}</span>
    </div>
  );
};

export default InviteDetail;
