import React, { useContext, useEffect, useState } from "react"; //eslint-disable-line
import { Link, useHistory } from "react-router-dom";
import { Spin } from "antd";
import InviteCard from "../components/InviteCard";
import { acceptInvite } from "../firebase/crudMethods.js";
import "../styles/containers/InvitesListContainer.css";
import "../styles/misc/Spinner.css";

const InvitesListContainer = ({ fetchedInvites, loadingInvites }) => {
  let history = useHistory();

  return (
    <div className="display-invites">
      {loadingInvites ? (
        <Spin size="large" className="invites" />
      ) : fetchedInvites.length === 0 ? (
        <div className="no-invites">
          Nažalost, ne postoje aktivni oglasi.{" "}
          <Link to="organiziraj-basket" className="no-invites-link">
            <span>Budi organizator!</span>
          </Link>
        </div>
      ) : (
        fetchedInvites.map((invite) => (
          <InviteCard
            key={invite.id}
            neighbourhood={invite.data().neighbourhood}
            dateTime={invite.data().dateTime}
            invitees={invite.data().invitees}
            phoneNumber={invite.data().phoneNumber}
            organizer={invite.data().organizer}
            onClick={async () => {
              await acceptInvite(
                invite.data().uid,
                invite.id,
                invite.data().invitees
              );
              history.push("/profil");
            }}
          />
        ))
      )}
    </div>
  );
};

export default InvitesListContainer;

/*
TODO  
      5) create getFilteredInvites method
*/
