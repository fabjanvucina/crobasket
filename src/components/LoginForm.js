import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../firebase/authMethods.js";
import "../style/LoginForm.css";
import "../style/Separator.css";

const LoginForm = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await login(email, password, setEmail, setPassword);
          console.log("finished login");
          history.push("/gradovi");
          console.log("shouldve pushed gradovi");
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
