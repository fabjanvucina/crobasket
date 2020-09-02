import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import "../styles/components/Title.css";

const Title = ({ value }) => {
  return <div className="title">{value}</div>;
};

export default Title;
