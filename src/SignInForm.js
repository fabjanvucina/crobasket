import React from "react";

const SignInForm = () => {
  return (
    <div className="form-signin">
      <form>
        <div className="text-input">
          <label htmlFor="name">Ime</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder=""
            autoComplete="off"
          />
          <span className="separator"> </span>
        </div>

        <div className="text-input">
          <label htmlFor="lastname">Prezime</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder=""
            autoComplete="off"
          />
          <span className="separator"> </span>
        </div>

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

        <div className="form-bottom-signin">
          <input
            type="submit"
            id="submit"
            value="Izradi račun"
            onClick={(e) => {
              e.preventDefault();
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
