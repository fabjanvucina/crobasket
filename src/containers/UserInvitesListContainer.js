import React, { useContext, useEffect, useState } from "react"; //eslint-disable-line
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import { Divider } from "antd";
import "../styles/containers/InvitesListContainer.css";

const UserInvitesListContainer = ({
  activeInvites,
  expiredInvites /* , type */
}) => {
  let history = useHistory(); //eslint-disable-line

  console.log(activeInvites);

  return (
    <div className="">
      <Divider orientation="left">Aktivne pozivnice</Divider>
      {activeInvites.map((invite) => (
        <div key={invite.id}>yo</div>
      ))}
      <Divider orientation="left">Istekle pozivnice</Divider>
      {expiredInvites.map((invite) => (
        <div key={invite.id}></div>
      ))}
    </div>
  );
};

export default UserInvitesListContainer;
