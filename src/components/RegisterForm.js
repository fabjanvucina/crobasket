import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom"; //eslint-disable-line
import app from "../firebase/firebase.js"; //eslint-disable-line
import UserContext from "../contexts/UserContext";
import { register } from "../firebase/authMethods.js";
import "../style/RegisterForm.css";
import "../style/Separator.css";

const RegisterForm = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserContext); //eslint-disable-line

  return (
    <div className="form-signin">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await register(name, surname, email, password, setEmail, setPassword);
          setUser({
            isAuthenticated: true,
            displayName: app.auth().currentUser.displayName
          });
          history.push("/gradovi");
        }}
      >
        <div className="text-input">
          <label htmlFor="name">Ime</label>
          <input
            type="text"
            name="name"
            value={name}
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
            value={surname}
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
            value={email}
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
            value={password}
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
