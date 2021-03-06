import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "antd";
import SelectSearchableContainer from "../SelectSearchableContainer/SelectSearchableContainer";
import InputNumberContainer from "../InputNumberContainer/InputNumberContainer";
import DateTimePickerContainer from "../DateTimePickerContainer/DateTimePickerContainer";
import FormButtonContainer from "../FormButtonContainer/FormButtonContainer";
import UserContext from "../../contexts/UserContext";
import HometownContext from "../../contexts/HometownContext";
import { createInvite } from "../../firebase/inviteMethods.js";
import { getNeighbourhoods } from "../../firebase/citiesMethods.js";
import "./InviteFormContainer.css";

const handleNewInvitation = async (
  hometown,
  neighbourhood,
  invitees,
  dateTime,
  phoneNumber,
  uid,
  displayName,
  history
) => {
  await createInvite(
    hometown,
    neighbourhood,
    invitees,
    dateTime,
    phoneNumber,
    uid,
    displayName
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
            user.displayName,
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
