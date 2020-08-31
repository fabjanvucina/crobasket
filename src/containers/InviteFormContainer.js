import React, { useState, useContext } from "react"; //eslint-disable-line
import app from "../firebase/firebase.js"; //eslint-disable-line
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import UserContext from "../contexts/UserContext"; //eslint-disable-line
import { Form, Select, DatePicker, InputNumber } from "antd";
import "../style/InviteFormContainer.css";

const InviteFormContainer = () => {
  /*  let history = useHistory(); //eslint-disable-line
  const [neighbourhood, setNeighbourhood] = useState(""); //eslint-disable-line
  const [date, setDate] = useState(""); //eslint-disable-line
  const [time, setTime] = useState(""); //eslint-disable-line
  const [slot, setSlot] = useState(""); //eslint-disable-line

  const [user, setUser] = useContext(UserContext); //eslint-disable-line */

  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="inviteForm">
      <Form
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
        <Form.Item label="Kvart">
          <Select>
            <Select.Option value="trstenik">Trstenik</Select.Option>
            <Select.Option value="split3">Split 3</Select.Option>
            <Select.Option value="blatine">Blatine</Select.Option>
            <Select.Option value="mertojak">Mertojak</Select.Option>
            <Select.Option value="gripe">Gripe</Select.Option>
            <Select.Option value="pujanke">Pujanke</Select.Option>
            <Select.Option value="pojisan">Pojišan</Select.Option>
            <Select.Option value="manus">Manuš</Select.Option>
            <Select.Option value="meje">Meje</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Nedostaje igrača">
          <InputNumber min="0" max="9" />
        </Form.Item>

        <Form.Item label="Datum">
          <DatePicker format="DD/MM/YYYY" />
        </Form.Item>

        <Form.Item label="Vrijeme">
          <Select>
            <Select.Option value="0600">06:00</Select.Option>
            <Select.Option value="0630">06:30</Select.Option>
            <Select.Option value="0700">07:00</Select.Option>
            <Select.Option value="0730">07:30</Select.Option>
            <Select.Option value="0800">08:00</Select.Option>
            <Select.Option value="0830">08:30</Select.Option>
            <Select.Option value="0900">09:00</Select.Option>
            <Select.Option value="0930">09:30</Select.Option>
            <Select.Option value="1000">10:00</Select.Option>
          </Select>
        </Form.Item>
      </Form>
      <div className="form-bottom">
        <input
          className="submit"
          type="submit"
          id="inviteButton"
          value="Objavi"
        />
      </div>
    </div>
  );
};

export default InviteFormContainer;
