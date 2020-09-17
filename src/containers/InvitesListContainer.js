import React, { useContext, useEffect, useState } from "react"; //eslint-disable-line
import { useHistory } from "react-router-dom";
import InviteCard from "../components/InviteCard"; //eslint-disable-line
import HometownContext from "../contexts/HometownContext";
import { getAllInvites, acceptInvite } from "../firebase/crudMethods.js"; //eslint-disable-line
import "../styles/containers/InvitesListContainer.css";

const InvitesListContainer = () => {
  let history = useHistory();
  const [fetchedInvites, setFetchedInvites] = useState([]); //eslint-disable-line
  const [hometown] = useContext(HometownContext); //eslint-disable-line

  useEffect(() => {
    const fetchData = async () => {
      setFetchedInvites(await getAllInvites(hometown));
      console.log("fetched invites");
    };

    fetchData();
  }, [hometown]);

  return (
    <div className="display-invites">
      {fetchedInvites.map((invite) => (
        <InviteCard
          key={invite.id}
          neighbourhood={invite.data().neighbourhood}
          dateTime={invite.data().dateTime}
          invitees={invite.data().invitees}
          phoneNumber={invite.data().phoneNumber}
          onClick={async () => {
            //await acceptInvite(invite.id);
            history.push("/profil");
          }}
        />
      ))}
    </div>
  );
};

export default InvitesListContainer;

/*
TODO: 1) create more invites (10 more)
      2) optimise InviteCard css and InviteListContainer
      3) create acceptInvite method
      4) minor details (user cant see their invites, ..)
      5) create getFilteredInvites method
*/
