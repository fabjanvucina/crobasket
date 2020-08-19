import React from "react";
import { Link } from "@reach/router";
import { navigate } from "@reach/router"; //eslint-disable-line
import { login } from "../authMethods.js";
import "../style/LoginForm.css";
import "../style/Separator.css";

const LoginForm = () => {
  return (
    <div className="form">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await login();
        }}
      >
        <div className="text-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="emailLogin"
            placeholder=""
            autoComplete="off"
            required
          />
          <span className="separator"> </span>
        </div>

        <div className="text-input">
          <label htmlFor="password">Lozinka</label>
          <input
            type="password"
            name="password"
            id="passwordLogin"
            placeholder=""
            autoComplete="new-password"
            required
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
