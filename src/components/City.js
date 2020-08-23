import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import "../style/City.css";

const City = ({ name, imgSrc, onClick }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className="container"
      onClick={onClick}
      onKeyDown={onClick}
    >
      <img className="city-image" src={imgSrc} alt={name}></img>
      <div className="city-overlay">
        <div className="city-text">{name}</div>
      </div>
    </div>
  );
};

export default City;
