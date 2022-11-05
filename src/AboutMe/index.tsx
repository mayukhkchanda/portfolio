import React, { MouseEventHandler } from "react";
import { motion } from "framer-motion";

import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { imagePath, images } from "constants/img";
import "./style.scss";

export type Props = {
  isBgPurple: boolean;
  toggleBackground: MouseEventHandler<HTMLDivElement>;
};

const AboutMe: React.FC<Props> = (props: Props) => {
  const { isBgPurple, toggleBackground } = props;
  const height = document.body.clientHeight;
  const sidebar = {
    open: () => ({
      clipPath: `circle(${height}px at 5.5rem 22.7rem)`,
      transition: {
        type: "spring",
        duration: 4,
      },
    }),
    closed: {
      clipPath: "circle(0px at  5.5rem 22.7rem)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const halo = {
    purple: {
      backgroundColor: "#b74dd1",
      boxShadow: "0px 0px 14px 1px #b344cf",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    white: {
      backgroundColor: "#fff",
      boxShadow: "0px 0px 14px 1px #fff",
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div id="about-me" className="about-me">
        <div className="profile slide-left" onClick={toggleBackground}>
          <img
            src={imagePath + images.my_profile_logo}
            alt="Mayukh's profile logo"
            className="img"
          />
          <motion.span
            animate={isBgPurple ? "white" : "purple"}
            className="halo pulse"
            variants={halo}
          />
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
      <motion.div
        initial={false}
        animate={isBgPurple ? "open" : "closed"}
        custom={height}
        className="background"
        variants={sidebar}
        style={{ height: height }}
      />
    </>
  );
};

export default AboutMe;
