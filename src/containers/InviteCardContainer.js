import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import { Card, Button } from "antd"; //eslint-disable-line
import InviteDetail from "../components/InviteDetail";
import { getAcceptedInvites } from "../firebase/crudMethods.js";
import "../styles/containers/InviteCardContainer.css"; //eslint-disable-line
import moment from "moment";

const InviteCardContainer = ({
  neighbourhood,
  dateTime,
  invitees,
  phoneNumber,
  organizer,
  inviteID,
  onClick
}) => {
  const [acceptedStatus, setAcceptedStatus] = useState("false");
  const [loadingAcceptedStatus, setLoadingAcceptedStatus] = useState(true); //eslint-disable-line

  let date = moment(dateTime).format("DD/MM/YYYY");
  let time = moment(dateTime).format("HH:mm");
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    const fetchData = async () => {
      setAcceptedStatus(
        (await getAcceptedInvites(uid))
          .map((acceptedInvite) => {
            return acceptedInvite.data().inviteID;
          })
          .includes(inviteID)
      );
      setLoadingAcceptedStatus(false);
    };

    fetchData();
  }, [inviteID, uid]);

  return (
    <>
      {loadingAcceptedStatus ? (
        <div></div>
      ) : (
        <div className={acceptedStatus ? "inviteCard accepted" : "inviteCard"}>
          <InviteDetail detailName="Kvart" detailValue={neighbourhood} />
          <InviteDetail detailName="Datum" detailValue={date} />
          <InviteDetail detailName="Vrijeme" detailValue={time} />
          <InviteDetail detailName="Nedostaje igrača" detailValue={invitees} />
          <InviteDetail detailName="Organizator" detailValue={organizer} />
          <InviteDetail detailName="Kontakt broj" detailValue={phoneNumber} />
          {acceptedStatus ? (
            <Button className="acceptedButton">Prihvaćeno</Button>
          ) : (
            <Button onClick={onClick} className="acceptInviteButton">
              Dolazim!
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default InviteCardContainer;
