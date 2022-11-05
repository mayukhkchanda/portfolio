import React from "react";
import { motion, Variants } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export type Props = {
  descTitle: string;
  descBrief: string;
  linkText: string;
  backgroundUrl: string;
  urlLink: string;
};

const scrollVariants: Variants = {
  offscreen: {
    y: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
      staggerChildren: 0.3,
    },
  },
};

const ProjectItem: React.FC<Props> = (props: Props) => {
  const { backgroundUrl, descBrief, descTitle, linkText, urlLink } = props;

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="project-item"
    >
      <div className="description">
        <motion.p variants={scrollVariants} className="desc-title">
          {descTitle}
        </motion.p>
        <motion.p variants={scrollVariants} className="desc-brief">
          {descBrief}
        </motion.p>
        <motion.a
          variants={scrollVariants}
          href={urlLink}
          className="desc-link"
        >
          <p className="desc-link-text">{linkText}</p>
          <ArrowForwardIcon className="desc-link-icon" />
        </motion.a>
      </div>

      <div className="mask">
        <div
          className="image"
          style={{
            backgroundImage: `url(${backgroundUrl})`,
          }}
        ></div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
