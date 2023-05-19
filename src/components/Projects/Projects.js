import React from "react";
import "./Projects.css";
import github from "../../assets/github.svg";
import link from "../../assets/link.svg";
import cricket from "../../assets/cricket.png";
import ecommerce from '../../assets/ecommerce-screenshot.png'

const Projects = () => {
  return (
    <div id="projects">
      <h2 className="projects-title">
        Here are some of my <span className="red">Projects</span>
      </h2>
      <div className="project-cards">
        <div className="card cricket">
          <img className="project-screenshot" src={cricket} alt="project-screenshot" />
          <div className="project-wrapper-bg">
            <h3 className="project-title">CricketSearch</h3>
            <br />
            <h4 className="project-languages">HTML,CSS,JavaScript,React</h4>
            <p className="project-desc">
              Expand your knowledge on cricket players with this cricket search app. Search, Filter and view details and a bio about the players from England
              and Australia Cricket Teams. You can also check out youtube videos for each player. App hosted and deployed with netlify
            </p>
            <div className="image-container">
              <a href="https://github.com/a-waghat16/cricketSearch" target="_blank" rel="noreferrer">
                <img className="project-icon" src={github} alt="github-logo" />
              </a>
              <a href="https://cricketsearch-aadil.netlify.app/" target="_blank" rel="noreferrer">
                <img className="project-icon" src={link} alt="link-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="card ecommerce">
          <img className="project-screenshot" src={ecommerce} alt="project-screenshot" />
          <div className="project-wrapper-bg">
            <h3 className="project-title">N&A Ecommerce</h3>
            <br />
            <h4 className="project-languages">HTML,CSS,JavaScript,React</h4>
            <p className="project-desc">
              Discover our trendy E-commerce Store, your ultimate destination for the latest Nike and Adidas clothing. Elevate your style with our diverse
              collection, featuring sportswear essentials and fashionable athleisure. From sleek running shoes to performance-enhancing activewear, we offer a
              range of high-quality options to suit your active lifestyle. Deployed with netlify
            </p>
            <div className="image-container">
              <a href="https://github.com/a-waghat16/asosecommerce" target="_blank" rel="noreferrer">
                <img className="project-icon" src={github} alt="github-logo" />
              </a>
              <a href="https://asosecommerce-aadil.netlify.app/" target="_blank" rel="noreferrer">
                <img className="project-icon" src={link} alt="link-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
