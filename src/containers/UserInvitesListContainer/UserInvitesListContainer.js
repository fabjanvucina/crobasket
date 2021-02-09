import React from "react";
import { Divider } from "antd";
import ActiveInviteContainer from "../ActiveInviteContainer/ActiveInviteContainer";
import ExpiredInviteContainer from "../ExpiredInviteContainer/ExpiredInviteContainer";
import "../InvitesListContainer/InvitesListContainer.css";

const UserInvitesListContainer = ({ activeInvites, expiredInvites, type }) => {
  return (
    <div className="">
      <Divider orientation="left">Aktivne pozivnice</Divider>
      {activeInvites.map((invite) => (
        <ActiveInviteContainer
          key={invite.id}
          inviteID={invite.id}
          neighbourhood={invite.data().neighbourhood}
          invitees={invite.data().invitees}
          displayDate={invite.data().displayDate}
          displayTime={invite.data().displayTime}
          organizer={invite.data().organizer}
          organizerUID={invite.data().organizerUID}
          phoneNumber={invite.data().phoneNumber}
          type={type}
        />
      ))}
      <Divider orientation="left" className="expired">
        Istekle pozivnice
      </Divider>
      {expiredInvites.map((invite) => (
        <ExpiredInviteContainer
          key={invite.id}
          neighbourhood={invite.data().neighbourhood}
          displayDate={invite.data().displayDate}
          displayTime={invite.data().displayTime}
          organizer={invite.data().organizer}
          phoneNumber={invite.data().phoneNumber}
          type={type}
        />
      ))}
    </div>
  );
};

export default UserInvitesListContainer;
