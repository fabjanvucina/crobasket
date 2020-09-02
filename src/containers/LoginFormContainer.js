import React, { useState, useContext } from "react";
import app from "../firebase/firebase.js";
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import { Form, Input, Checkbox, Button } from "antd";
import UserContext from "../contexts/UserContext";
import { login } from "../firebase/authMethods.js";
import "../styles/containers/LoginFormContainer.css";
import "../styles/misc/Separator.css";

const handleLogin = async (
  email,
  password,
  setEmail,
  setPassword,
  setUser,
  history
) => {
  await login(email, password, setEmail, setPassword);

  setUser({
    isAuthenticated: true,
    displayName: app.auth().currentUser.displayName
  });
  history.push("/gradovi");
};

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const LoginForm = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserContext); //eslint-disable-line

  return (
    <div className="form">
      <Form
        {...layout}
        onFinish={async () => {
          await handleLogin(
            email,
            password,
            setEmail,
            setPassword,
            setUser,
            history
          );
        }}
        onFinishFailed={() => console.log("onFinishFailed")}
        layout="horizontal"
        initialValues={{
          remember: true
        }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Molimo unesite email adresu!" }]}
        >
          <Input
            value={email}
            onChange={(value) => setEmail(value.toString())}
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

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Zapamti me</Checkbox>
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
