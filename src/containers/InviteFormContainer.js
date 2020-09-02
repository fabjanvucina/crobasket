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
import moment from "moment";

const handleNewInvitation = async (
  hometown,
  neighbourhood,
  invitees,
  date,
  timeSlot,
  phoneNumber,
  uid,
  history
) => {
  await createInvite(
    hometown,
    neighbourhood,
    invitees,
    date,
    timeSlot,
    phoneNumber,
    uid
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

  const [user] = useContext(UserContext);
  const [hometown] = useContext(HometownContext);

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
    console.log("current neighbourhood:", neighbourhood);
    console.log("current invitees:", invitees);
    console.log("current date:", date);
    console.log("current timeSlot:", timeSlot);
  };

  return (
    <div className="inviteForm">
      <Form
        onFinish={async () => {
          await handleNewInvitation(
            hometown,
            neighbourhood,
            invitees,
            date,
            timeSlot,
            user.phoneNumber,
            user.uid,
            history
          );
        }}
        onFinishFailed={() => console.log("onFinishFailed")}
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
        >
          <Select
            value={neighbourhood}
            onChange={(moment) => setNeighbourhood(moment.toString())}
          >
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
        >
          <InputNumber
            min="0"
            max="9"
            value={invitees}
            onChange={(moment) => setInvitees(moment.toString())}
          />
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
        >
          <DatePicker
            format="DD/MM/YYYY HH:mm"
            placeholder=""
            value={date}
            onChange={(value) => setDate(value.toISOString())}
            disabledSeconds={() => {
              const seconds = [];
              for (let i = 0; i < 60; i++) {
                seconds.push(i);
              }

              return seconds;
            }}
            disabledMinutes={() => {
              const minutes = [];
              for (let i = 0; i < 60; i++) {
                if (i !== 30 && i !== 0) {
                  minutes.push(i);
                }
              }

              return minutes;
            }}
            hideDisabledOptions={true}
            showTime={{ defaultValue: moment("00:00", "HH:mm") }}
          />
        </Form.Item>

        <Form.Item
          label="Vrijeme"
          name="timeSlot"
          rules={[
            {
              required: true,
              message: "Molimo odaberite vrijeme!"
            }
          ]}
        >
          <Select
            value={timeSlot}
            onChange={(moment) => setTimeSlot(moment.toString())}
          >
            {fetchedTimeSlots.map((timeSlot) => (
              <Select.Option key={timeSlot} value={timeSlot}>
                {timeSlot}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <div className="form-bottom">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Objavi
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default InviteFormContainer;
