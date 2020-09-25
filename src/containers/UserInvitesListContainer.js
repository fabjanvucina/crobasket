import React, { useContext, useEffect, useState } from "react"; //eslint-disable-line
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import { Divider } from "antd";
import ActiveInviteContainer from "../containers/ActiveInviteContainer";
import ExpiredInviteContainer from "../containers/ExpiredInviteContainer";
import "../styles/containers/InvitesListContainer.css";

const UserInvitesListContainer = ({ activeInvites, expiredInvites, type }) => {
  let history = useHistory(); //eslint-disable-line

  return (
    <div className="">
      <Divider orientation="left">Aktivne pozivnice</Divider>
      {activeInvites.map((invite) => (
        <ActiveInviteContainer
          key={invite.id}
          neighbourhood={invite.data().neighbourhood}
          invitees={invite.data().invitees}
          displayDate={invite.data().displayDate}
          displayTime={invite.data().displayTime}
          organizer={invite.data().organizer}
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
