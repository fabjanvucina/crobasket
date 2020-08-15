import React, { useCallback, useContext } from "react"; //eslint-disable-line
import { navigate } from "@reach/router"; //eslint-disable-line
import { signup } from "../authMetods.js";

const SignUpForm = () => {
  return (
    <div className="form-signin">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signup();
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

export default SignUpForm;
