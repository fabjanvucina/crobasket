import React, { useState, useContext, useEffect } from "react";
import app from "../firebase/firebase.js"; //eslint-disable-line
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import { Form, Select, DatePicker, InputNumber, Button } from "antd";
import UserContext from "../contexts/UserContext";
import HometownContext from "../contexts/HometownContext";
import {
  createInvite,
  getNeighbourhoods,
  getTimeSlots
} from "../firebase/crudMethods.js";

import "../style/InviteFormContainer.css";

const handleNewInvitation = async (
  hometown,
  neighbourhood,
  invitees,
  date,
  timeSlot,
  phoneNumber,
  history
) => {
  await createInvite(
    hometown,
    neighbourhood,
    invitees,
    date,
    timeSlot,
    phoneNumber
  );
  history.push("/profil");
};

const InviteFormContainer = () => {
  let history = useHistory();
  const [fetchedNeighbourhoods, setFetchedNeighbourhoods] = useState([]);
  const [fetchedTimeSlots, setFetchedTimeSlots] = useState([]);

  const [neighbourhood, setNeighbourhood] = useState("");
  const [invitees, setInvitees] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const [user, setUser] = useContext(UserContext); //eslint-disable-line
  const [hometown, setHometown] = useContext(HometownContext); //eslint-disable-line

  useEffect(() => {
    const fetchData = async () => {
      setFetchedNeighbourhoods(await getNeighbourhoods(hometown));
      setFetchedTimeSlots(await getTimeSlots());
    };

    fetchData();
  }, [hometown]);

  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="inviteForm">
      <Form
        onFinish={async (e) => {
          console.log("entered onFinish");
          e.preventDefault();
          await handleNewInvitation(
            hometown,
            neighbourhood,
            invitees,
            date,
            timeSlot,
            user.phoneNumber,
            history
          );
        }}
        labelCol={{
          span: 6
        }}
        wrapperCol={{
          span: 15
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item
          label="Kvart"
          name="neighbourhood"
          rules={[{ required: true, message: "Molimo odaberite kvart!" }]}
          onChange={(e) => setNeighbourhood(e.target.value)}
        >
          <Select>
            {fetchedNeighbourhoods.map((neighbourhood) => (
              <Select.Option key={neighbourhood.id} value={neighbourhood.id}>
                {neighbourhood.data().displayName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Nedostaje igrača"
          name="invitees"
          rules={[
            {
              required: true,
              message: "Molimo unesite broj igrača koji Vam nedostaje!"
            }
          ]}
          onChange={(e) => setInvitees(e.target.value)}
        >
          <InputNumber min="0" max="9" />
        </Form.Item>

        <Form.Item
          label="Datum"
          name="date"
          rules={[
            {
              required: true,
              message: "Molimo odaberite datum!"
            }
          ]}
          onChange={(e) => setDate(e.target.value)}
        >
          <DatePicker format="DD/MM/YYYY" placeholder="" />
        </Form.Item>

        <Form.Item
          label="Vrijeme"
          name="time"
          rules={[
            {
              required: true,
              message: "Molimo odaberite vrijeme!"
            }
          ]}
          onChange={(e) => setTimeSlot(e.target.value)}
        >
          <Select>
            {fetchedTimeSlots.map((timeSlot) => (
              <Select.Option key={timeSlot} value={timeSlot}>
                {timeSlot}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
      <div className="form-bottom">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Objavi
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default InviteFormContainer;
{
  /* <input
          className="submit"
          type="submit"
          id="inviteButton"
          value="Objavi"
        /> */
}
