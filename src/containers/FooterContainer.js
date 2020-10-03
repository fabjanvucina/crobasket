import React from "react";
import { Link } from "react-router-dom"; //eslint-disable-line
import { GithubFilled } from "@ant-design/icons";
import "../styles/containers/FooterContainer.css";
import "../styles/misc/Link.css";

const FooterContainer = () => {
  return (
    <div className="footer-fixed">
      <a href="https://github.com/fabjanvucina" className="link">
        <div className="creatorContainer">
          <GithubFilled />
          <span className="creatorName">fabjanvucina</span>
        </div>
        <div className="creationDate">Summer 2020</div>
      </a>
    </div>
  );
};

export default FooterContainer;
