import React from "react";
import { Link } from "@reach/router"; //eslint-disable-line
import "../style/Title.css";

const Title = ({ value }) => {
  return <div className="title">{value}</div>;
};

export default Title;
