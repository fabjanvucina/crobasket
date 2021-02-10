import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import InviteCardContainer from "../InviteCardContainer/InviteCardContainer";
import {
  acceptInvite,
  generateInviteAcceptedStatusMap
} from "../../firebase/inviteMethods.js";
import "./InvitesListContainer.css";
import "../../styles/Spinner.css";

const InvitesListContainer = ({ fetchedInvites, loadingInvites }) => {
  let history = useHistory();
  const [inviteAcceptedStatusMap, setInviteAcceptedStatusMap] = useState(
    new Map()
  );
  const [loadingMap, setLoadingMap] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!loadingInvites) {
        setInviteAcceptedStatusMap(
          await generateInviteAcceptedStatusMap(fetchedInvites)
        );
        setLoadingMap(false);
      }
    };

    fetchData();
  }, [fetchedInvites, loadingInvites]);

  return (
    <div className="display-invites">
      {loadingMap ? (
        <Spin size="large" className="invites" />
      ) : fetchedInvites.length === 0 ? (
        <div className="no-invites">Nažalost, ne postoje aktivni oglasi.</div>
      ) : (
        fetchedInvites.map((invite) => (
          <InviteCardContainer
            key={invite.id}
            neighbourhood={invite.data().neighbourhood}
            date={invite.data().displayDate}
            time={invite.data().displayTime}
            invitees={invite.data().invitees}
            phoneNumber={invite.data().phoneNumber}
            organizer={invite.data().organizer}
            isAccepted={inviteAcceptedStatusMap.get(invite.id)}
            onClick={async () => {
              await acceptInvite(
                invite.data().organizerUID,
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
