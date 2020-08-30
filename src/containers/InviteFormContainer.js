import React, { useState, useContext } from "react"; //eslint-disable-line
import app from "../firebase/firebase.js"; //eslint-disable-line
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import UserContext from "../contexts/UserContext"; //eslint-disable-line
import { Form, Input, Select, DatePicker, InputNumber, Switch } from "antd";

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
    <>
      <Form
        labelCol={{
          span: 4
        }}
        wrapperCol={{
          span: 14
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch">
          <Switch />
        </Form.Item>
      </Form>
      <div className="form-bottom">
        <input
          className="submit"
          type="submit"
          id="loginButton"
          value="Objavi"
        />
      </div>
    </>
  );
};

export default InviteFormContainer;
