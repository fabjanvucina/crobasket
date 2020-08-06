import React from "react";
import { Link } from "@reach/router";

const LoginForm = () => {
  return (
    <div className="form">
      <form>
        <div className="text-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="username"
            placeholder=""
            autoComplete="off"
          />
          <span className="separator"> </span>
        </div>

        <div className="text-input">
          <label htmlFor="password">Lozinka</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            autoComplete="off"
          />
          <span className="separator"> </span>
        </div>

        <div className="form-bottom">
          <input
            type="submit"
            id="submit"
            value="Prijavi se"
            onClick={(e) => {
              e.preventDefault();
            }}
          />

          <span className="signin">
            <Link to="/signin" className="link signin">
              Nemaš račun? Izradi ga ovdje!
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
