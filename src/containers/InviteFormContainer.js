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

  const [fetchedNeighbourhoods, setFetchedNeighbourhoods] = useState([]);

  const [neighbourhood, setNeighbourhood] = useState("");
  const [invitees, setInvitees] = useState("");
  const [dateTime, setDateTime] = useState("");
  /* const [timeSlot, setTimeSlot] = useState(""); */

  const [user] = useContext(UserContext);
  const [hometown] = useContext(HometownContext);

  useEffect(() => {
    const fetchData = async () => {
      setFetchedNeighbourhoods(await getNeighbourhoods(hometown));
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
          label="Datum i vrijeme"
          name="dateTime"
          rules={[
            {
              required: true,
              message: "Molimo odaberite datum i vrijeme!"
            }
          ]}
        >
          <DatePicker
            format="DD/MM/YYYY HH:mm"
            placeholder=""
            value={dateTime}
            onChange={(value) => setDateTime(value.toISOString())}
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
                if (i !== 0 && i !== 15 && i !== 30 && i !== 45) {
                  minutes.push(i);
                }
              }

              return minutes;
            }}
            disabledHours={() => {
              const hours = [];
              for (let i = 0; i < 24; i++) {
                if (i <= 6 || i == 23) {
                  hours.push(i);
                }
              }

              return hours;
            }}
            hideDisabledOptions={true}
            showNow={false}
            showToday={true}
            showTime={{ defaultValue: moment("00:00", "HH:mm") }}
          />
        </Form.Item>

        {/* <Form.Item
          label="Vrijeme"
          name="timeSlot"
          rules={[
            {
              required: true,
              message: "Molimo odaberite vrijeme!"
            }
          ]}
        >
          <TimePicker
            format="HH:mm"
            placeholder=""
            value={timeSlot}
            onChange={(value) => setTimeSlot(value.toISOString())}
            disabledMinutes={() => {
              const minutes = [];
              for (let i = 0; i < 60; i++) {
                if (i !== 0 && i !== 15 && i !== 30 && i !== 45) {
                  minutes.push(i);
                }
              }

              return minutes;
            }}
            disabledHours={() => {
              const hours = [];
              for (let i = 0; i < 24; i++) {
                if (i <= 6 || i == 23) {
                  hours.push(i);
                }
              }

              return hours;
            }}
            hideDisabledOptions={true}
            showNow={false}
          />
        </Form.Item> */}

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
