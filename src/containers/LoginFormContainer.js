import React, { useState, useContext } from "react";
import app from "../firebase/firebase.js"; //eslint-disable-line
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import { Form, Input, Button } from "antd";
import UserContext from "../contexts/UserContext";
import { login } from "../firebase/authMethods.js";
import "../styles/containers/LoginFormContainer.css";
import "../styles/misc/Separator.css";

const LoginForm = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserContext); //eslint-disable-line

  return (
    <div className="loginForm">
      <Form
        onFinish={async () => {
          await login(email, password, setEmail, setPassword, setUser, history);
        }}
        labelCol={{
          span: 5
        }}
        wrapperCol={{
          span: 17
        }}
        layout="horizontal"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Molimo unesite email adresu!" }]}
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.toString().trim())
            }
            }
          />
        </Form.Item>

        <Form.Item
          label="Lozinka"
          name="password"
          rules={[{ required: true, message: "Molimo unesite lozinku!" }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value.toString())}
          />
        </Form.Item>

        <div className="form-bottom">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Prijavi se
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
