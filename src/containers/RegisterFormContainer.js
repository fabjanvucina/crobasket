import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import app from "../firebase/firebase.js"; //eslint-disable-line
import UserContext from "../contexts/UserContext";
import { register } from "../firebase/authMethods.js";
import "../styles/containers/RegisterFormContainer.css";
import "../styles/misc/Separator.css";

const RegisterForm = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserContext); //eslint-disable-line

  return (
    <div className="registerForm">
      <Form
        onFinish={async () => {
          await register(
            name,
            surname,
            phoneNumber,
            email,
            password,
            setEmail,
            setPassword,
            setUser,
            history
          );
        }}
        labelCol={{
          span: 6
        }}
        wrapperCol={{
          span: 16
        }}
        layout="horizontal"
      >
        <Form.Item
          label="Ime"
          name="name"
          rules={[{ required: true, message: "Molimo unesite svoje ime!" }]}
        >
          <Input
            value={name}
            onChange={(value) => setName(value.toString().trim())}
            autoComplete="newpassword"
          />
        </Form.Item>

        <Form.Item
          label="Prezime"
          name="surname"
          rules={[{ required: true, message: "Molimo unesite svoje prezime!" }]}
        >
          <Input
            value={surname}
            onChange={(value) => setSurname(value.toString().trim())}
            autoComplete="newpassword"
          />
        </Form.Item>

        <Form.Item
          label="Broj mobitela"
          name="cellNumber"
          rules={[
            { required: true, message: "Molimo unesite svoj broj mobitela!" }
          ]}
        >
          <Input
            value={phoneNumber}
            onChange={(value) => setPhoneNumber(value.toString().trim())}
            autoComplete="off"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Molimo unesite email adresu!" }]}
        >
          <Input
            value={email}
            onChange={(value) => setEmail(value.toString().trim())}
            autoComplete="off"
          />
        </Form.Item>

        <Form.Item
          label="Lozinka"
          name="password"
          rules={[{ required: true, message: "Molimo unesite lozinku!" }]}
        >
          <Input.Password
            value={password}
            onChange={(value) => setPassword(value.toString())}
          />
        </Form.Item>

        <div className="form-bottom">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Registriraj se
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
