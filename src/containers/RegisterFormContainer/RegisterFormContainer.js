import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import UserContext from "../../contexts/UserContext";
import { register } from "../../firebase/authMethods.js";
import "./RegisterFormContainer.css";

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
            onChange={(e) => setName(e.target.value.toString())}
            autoComplete="first-name"
          />
        </Form.Item>

        <Form.Item
          label="Prezime"
          name="surname"
          rules={[{ required: true, message: "Molimo unesite svoje prezime!" }]}
        >
          <Input
            value={surname}
            onChange={(e) => setSurname(e.target.value.toString())}
            autoComplete="family-name"
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
            onChange={(e) => setPhoneNumber(e.target.value.toString())}
            autoComplete="tel-national"
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Molimo unesite email adresu!" }]}
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.toString())}
          />
        </Form.Item>

        <Form.Item
          label="Lozinka"
          name="password"
          rules={[{ required: true, message: "Molimo unesite lozinku!" }]}
        >
          <Input.Password
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.toString())}
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
