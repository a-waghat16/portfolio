import React, { useState } from "react";
import logo from "../../assets/portfolio-logo.png";
import "./Navbar.css";
import html from "../../assets/html-5.png";
import css from "../../assets/css.png";
import javascript from "../../assets/java-script.png";
import react from "../../assets/react.png";

const Navbar = () => {
  const [showAbout, setshowAbout] = useState(false);

  const handleClick = () => {
    alert(`I am open to new opportunities\nGet in Contact with me:\nEmail Address: a.waghat16@gmail.com`);
  };

  const handleOpenClick = () => {
    setshowAbout(true);
  };

  const handleCloseClick = () => {
    setshowAbout(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <ul className="navbar">
        <li>
          <a className="nav-link" href="/#" onClick={handleOpenClick}>
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="/#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="nav-link contact" href="/#" onClick={handleClick}>
            Contact
          </a>
        </li>
      </ul>
      {showAbout && (
        <div className="overlay-total">
          <div className="about-overlay">
            <div className="about-content">
              <div className="about-cont">
                <span className="close red bold" onClick={handleCloseClick}>
                  x
                </span>
                <h2>Here's a bit about me</h2>
                <h4>Front-end Developer</h4>
                <p>
                  I'm a self-taught <span className="red bold">Front-End Developer</span> who is enthusiastic about crafting web applications that provide
                  excellent{" "}
                  <span href="/" className="red bold">
                    user experiences.
                  </span>
                  <br />
                  <br />I completed Codecademy's Front-end Engineer Career Path, where I gained knowledge in{" "}
                  <span className="red bold">HTML, CSS, JavaScript, React and Redux.</span> The program allowed me to develop my skills by completing projects
                  and creating responsive websites. Through the program, I learned best practices for{" "}
                  <span className="red bold">writing clean, maintainable code.</span>
                </p>
                <div>
                  <img className="language-logo" src={html} alt="html-logo" />
                  <img className="language-logo" src={css} alt="css-logo" />
                  <img className="language-logo" src={javascript} alt="javscript-logo" />
                  <img className="language-logo" src={react} alt="react-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
