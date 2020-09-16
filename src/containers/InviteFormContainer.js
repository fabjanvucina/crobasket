import React, { useState, useContext, useEffect } from "react";
import app from "../firebase/firebase.js"; //eslint-disable-line
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import { Form } from "antd";
import SelectSearchableContainer from "./SelectSearchableContainer";
import InputNumberContainer from "./InputNumberContainer";
import DateTimePickerContainer from "./DateTimePickerContainer";
import FormButtonContainer from "./FormButtonContainer";
import UserContext from "../contexts/UserContext";
import HometownContext from "../contexts/HometownContext";
import { createInvite, getNeighbourhoods } from "../firebase/crudMethods.js";
import "../styles/containers/InviteFormContainer.css";

const handleNewInvitation = async (
  hometown,
  neighbourhood,
  invitees,
  dateTime,
  phoneNumber,
  uid,
  history
) => {
  await createInvite(
    hometown,
    neighbourhood,
    invitees,
    dateTime,
    phoneNumber,
    uid
  );
  history.push("/profil");
};

const InviteFormContainer = () => {
  let history = useHistory();

  const [user] = useContext(UserContext);
  const [hometown] = useContext(HometownContext);

  const [neighbourhood, setNeighbourhood] = useState("");
  const [invitees, setInvitees] = useState("");
  const [dateTime, setDateTime] = useState("");

  const [fetchedNeighbourhoods, setFetchedNeighbourhoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setFetchedNeighbourhoods(await getNeighbourhoods(hometown));
    };

    fetchData();
  }, [hometown]);

  return (
    <div className="inviteForm">
      <Form
        onFinish={async () => {
          await handleNewInvitation(
            hometown,
            neighbourhood,
            invitees,
            dateTime,
            user.phoneNumber,
            user.uid,
            history
          );
        }}
        labelCol={{
          span: 7
        }}
        wrapperCol={{
          span: 15
        }}
        layout="horizontal"
      >
        <SelectSearchableContainer
          value={neighbourhood}
          setValue={setNeighbourhood}
          fetchedNeighbourhoods={fetchedNeighbourhoods}
        />
        <InputNumberContainer value={invitees} setValue={setInvitees} />
        <DateTimePickerContainer value={dateTime} setValue={setDateTime} />
        <FormButtonContainer value="Objavi" />
      </Form>
    </div>
  );
};

export default InviteFormContainer;
