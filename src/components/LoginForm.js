import React, { useState, useContext } from "react";
import app from "../firebase/firebase.js"; //eslint-disable-line
import { Link, useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { login } from "../firebase/authMethods.js";
import "../style/LoginForm.css";
import "../style/Separator.css";

const handleLogin = async (email, password, setEmail, setPassword) => {
  await login(email, password, setEmail, setPassword);
  localStorage.setItem("isAuthenicated", true);
  localStorage.setItem("displayName", app.auth().currentUser.displayName);
};

const LoginForm = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authState = useContext(UserContext); //eslint-disable-line

  return (
    <div className="form">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleLogin(email, password, setEmail, setPassword);
          /* await login(email, password, setEmail, setPassword);
          localStorage.setItem("isAuthenicated", true);
          localStorage.setItem(
            "displayName",
            app.auth().currentUser.displayName
          );*/
          console.log("about to push /gradovi");
          history.push("/gradovi");
          console.log("should've pushed /gradovi");
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
