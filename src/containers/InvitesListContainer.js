import React, { useContext, useEffect, useState } from "react"; //eslint-disable-line
import { useHistory } from "react-router-dom";
import InviteCard from "../components/InviteCard"; //eslint-disable-line
import HometownContext from "../contexts/HometownContext";
/* import { getAllInvites, acceptInvite } from "../firebase/crudMethods.js"; */
import "../styles/containers/InvitesListContainer.css";

const InvitesListContainer = () => {
  let history = useHistory();
  const [fetchedInvites, setFetchedInvites] = useState([]); //eslint-disable-line
  const [hometown] = useContext(HometownContext); //eslint-disable-line

  /*  useEffect(() => {
    const fetchData = async () => {
      setFetchedInvites(await getAllInvites(hometown));
    };

    fetchData();
  }, []); */

  return (
    <div className="display-cities">
      {fetchedInvites.map((invite) => (
        <InviteCard
          key={invite.id}
          neighbourhood={invite.data().neighbourhood}
          date={invite.data().date}
          time={invite.data().time}
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
