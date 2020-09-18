import React, { useContext, useEffect, useState } from "react"; //eslint-disable-line
import { Link, useHistory } from "react-router-dom";
import InviteCard from "../components/InviteCard";
import HometownContext from "../contexts/HometownContext";
import {
  getAllEligibleInvites,
  acceptInvite
} from "../firebase/crudMethods.js";
import "../styles/containers/InvitesListContainer.css";

const InvitesListContainer = () => {
  let history = useHistory();
  const [fetchedInvites, setFetchedInvites] = useState([]);
  const [hometown] = useContext(HometownContext);

  useEffect(() => {
    const fetchData = async () => {
      setFetchedInvites(await getAllEligibleInvites(hometown));
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
      ))}
      {fetchedInvites.length === 0 ? (
        <div className="no-invites">
          Nažalost, ne postoje aktivni oglasi.{" "}
          <Link to="organiziraj-basket" className="no-invites-link">
            <span>Budi organizator!</span>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default InvitesListContainer;

/*
TODO  
      5) create getFilteredInvites method
*/
