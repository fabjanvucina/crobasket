import React from "react";
import { navigate } from "@reach/router";
import { register } from "../authMetods.js";

const RegisterForm = () => {
  return (
    <div className="form-signin">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await register();
          navigate("/");
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
