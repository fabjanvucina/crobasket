import React from "react";
import { GithubFilled } from "@ant-design/icons";
import "./FooterContainer.css";
import "../../styles/Link.css";

const FooterContainer = () => {
  return (
    <div className="footer">
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
