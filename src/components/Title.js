import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import "../styles/components/Title.css";
import "../styles/misc/Uppercase.css";

const Title = ({ value, uppercase }) => {
  return <div className={uppercase ? "title uppercase" : "title"}>{value}</div>;
};

export default Title;
