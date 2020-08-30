import React, { useState, useContext } from "react";
import app from "../firebase/firebase.js";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { login } from "../firebase/authMethods.js";
/* import "../style/LoginForm.css";
 */ import "../style/Separator.css";

const handleLogin = async (
  email,
  password,
  setEmail,
  setPassword,
  setUser,
  history
) => {
  await login(email, password, setEmail, setPassword);
  localStorage.setItem("isAuthenticated", true);
  localStorage.setItem("displayName", app.auth().currentUser.displayName);
  setUser({
    isAuthenticated: true,
    displayName: app.auth().currentUser.displayName
  });
  history.push("/gradovi");
};

const LoginForm = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserContext); //eslint-disable-line

  return (
    <div className="form">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleLogin(
            email,
            password,
            setEmail,
            setPassword,
            setUser,
            history
          );
        }}
      >
        <div className="text-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            id="emailLogin"
            placeholder=""
            autoComplete="off"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="separator"> </span>
        </div>

        <div className="text-input">
          <label htmlFor="password">Lozinka</label>
          <input
            type="password"
            name="password"
            value={password}
            id="passwordLogin"
            placeholder=""
            autoComplete="new-password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="separator"> </span>
        </div>

        <div className="form-bottom">
          <input
            className="submit"
            type="submit"
            id="loginButton"
            value="Prijavi se"
          />

          <span className="registerLink">
            <Link to="/registracija" className="link registerLink">
              Nemaš račun? Izradi ga ovdje!
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
