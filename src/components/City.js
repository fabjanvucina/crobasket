import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import "../style/City.css";

const City = ({ name, imgSrc }) => {
  return (
    <div className="container">
      <img className="city-image" src={imgSrc} alt={name}></img>
      <div className="city-overlay">
        <div className="city-text">{name}</div>
      </div>
    </div>
  );
};

export default City;
