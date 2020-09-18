import React, { useContext, useEffect, useState } from "react"; //eslint-disable-line
import { Link, useHistory } from "react-router-dom";
import InviteCard from "../components/InviteCard";
import HometownContext from "../contexts/HometownContext";
import { getAllInvites, acceptInvite } from "../firebase/crudMethods.js";
import "../styles/containers/InvitesListContainer.css";

const InvitesListContainer = () => {
  let history = useHistory();
  const [fetchedInvites, setFetchedInvites] = useState([]);
  const [hometown] = useContext(HometownContext);

  useEffect(() => {
    const fetchData = async () => {
      const uid = localStorage.getItem("uid");
      const fetchedInvites = await getAllInvites(hometown);
      const eligibleFetchedInvites = fetchedInvites.filter((invite) => {
        return uid != invite.data().uid && invite.data().invitees > 0;
      });
      setFetchedInvites(eligibleFetchedInvites);
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
          organiser={invite.data().organiser}
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
      3) create acceptInvite method
      5) create getFilteredInvites method
*/
