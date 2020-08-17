import React from "react";
import logo from "../img/crobasket_logo.jpg";
import "../style/HeaderLogo.css";

const HeaderLogo = ({ logoCenter }) => {
  return (
    <img
      src={logo}
      className={logoCenter === true ? "logo-center" : "logo"}
      alt="logo"
      id="logo"
    />
  );
};

export default HeaderLogo;
