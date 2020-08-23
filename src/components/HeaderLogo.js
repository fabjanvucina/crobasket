import React from "react";
import logo from "../img/crobasket_logo.jpg";
import "../style/HeaderLogo.css";

const HeaderLogo = () => {
  return <img src={logo} className="logo" alt="logo" id="logo" />;
};

export default HeaderLogo;
