import React, { useState } from "react";
import { navigate } from "@reach/router"; //eslint-disable-line
import { register } from "../authMethods.js";
import "../style/RegisterForm.css";
import "../style/Separator.css";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-signin">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await register(name, surname, email, password, setEmail, setPassword);
        }}
      >
        <div className="text-input">
          <label htmlFor="name">Ime</label>
          <input
            type="text"
            name="name"
            id="nameSignup"
            placeholder=""
            autoComplete="new-password"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <span className="separator"> </span>
        </div>

        <div className="text-input">
          <label htmlFor="lastname">Prezime</label>
          <input
            type="text"
            name="surname"
            id="surnameSignup"
            placeholder=""
            autoComplete="new-password"
            required
            onChange={(e) => setSurname(e.target.value)}
          />
          <span className="separator"> </span>
        </div>

        <div className="text-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="emailSignup"
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
            id="passwordSignup"
            placeholder=""
            autoComplete="off"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="separator"> </span>
        </div>

        <div className="form-bottom-signin">
          <input
            className="submit"
            type="submit"
            id="signupButton"
            value="Izradi račun"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
