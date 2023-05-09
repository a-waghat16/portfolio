import React from "react";
import github from "../../assets/github.svg";
import mail from "../../assets/mail.svg";
import file from "../../assets/file-text.svg";
import cv from "../../assets/resume.pdf";
import "./Hero.css";

const Hero = () => {
  const handleClick = () => {
    alert(`I am open to new opportunities\nGet in Contact with me:\nEmail Address: a.waghat16@gmail.com`);
  };
  return (
    <div className="hero">
      <h1>Hey</h1>
      <h1 className="red">I'm Aadil.</h1>
      <p className="hero-p">
        I'm a self-taught <span className="red bold">Front-End Developer</span> who is enthusiastic about crafting web applications that provide excellent{" "}
        <span href="/" className="red bold">
          user experiences.
        </span>
      </p>
      <div className="icons">
        <a href={cv} target="_blank" rel="noreferrer">
          <img className="icon" src={file} alt="file-icon" />
        </a>
        <a href="https://github.com/a-waghat16" target="_blank" rel="noreferrer">
          <img className="icon" src={github} alt="github-logo" />
        </a>
        <img className="icon" src={mail} alt="mail-icon" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Hero;
