import React from "react";
import "./Footer.css";
import logo from "../../assets/portfolio-logo.png";
import cv from "../../assets/resume.pdf";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="logo">
          <img src={logo} alt="logo-icon" />
        </div>
        <ul className="socials-list">
          <a href={cv} target="_blank" rel="noreferrer">
            <li className="list-item">Resume</li>
          </a>
          <a href="https://github.com/a-waghat16" target="_blank" rel="noreferrer">
            <li className="list-item">Github</li>
          </a>
          <a href="/">
            <li className="list-item">Back To Top</li>
          </a>
        </ul>
      </div>
      <div className="copyright">Copyright of Aadil Waghat &copy; 2023</div>
    </div>
  );
};

export default Footer;
