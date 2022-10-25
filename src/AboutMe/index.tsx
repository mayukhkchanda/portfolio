import React from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { imagePath, images } from "constants/img";
import "./style.scss";

const AboutMe: React.FC = () => {
  return (
    <div id="about-me" className="about-me">
      <div className="profile slide-left">
        <img
          src={imagePath + images.my_profile_logo}
          alt="Mayukh's profile logo"
          className="img"
        />
        <span className="halo pulse"></span>
      </div>
      <div className="description desc-slide-left">
        <p>Hi I am</p>
        <h1>Mayukh</h1>
        <p>Software Developer</p>
      </div>
      <div className="links">
        <a
          href="https://github.com/mayukhkchanda"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={imagePath + images.github_logo}
            alt="github logo"
            className="github logo github-slide-left"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mayukh-chanda-9a0080172/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={imagePath + images.linkedin_logo}
            alt="linkedin logo"
            className="linkedin logo linkedin-slide-left"
          />
        </a>
        <a
          href="https://leetcode.com/M1yu11h/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={imagePath + images.leetcode_logo}
            alt="leetcode logo"
            className="leetcode logo leetcode-slide-left"
          />
        </a>
      </div>
      <div className="scroll-container delayed-show">
        <div className="scroll-down">
          <span className="circle">
            <KeyboardDoubleArrowDownIcon className="arrow-down down-motion" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
