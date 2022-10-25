import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export type Props = {
  descTitle: string;
  descBrief: string;
  linkText: string;
  backgroundUrl: string;
  urlLink: string;
};

const ProjectItem: React.FC<Props> = (props: Props) => {
  const { backgroundUrl, descBrief, descTitle, linkText, urlLink } = props;

  return (
    <div className="project-item">
      <div className="description">
        <p className="desc-title">{descTitle}</p>
        <p className="desc-brief">{descBrief}</p>
        <a href={urlLink} className="desc-link">
          <p className="desc-link-text">{linkText}</p>
          <ArrowForwardIcon className="desc-link-icon" />
        </a>
      </div>

      <div className="mask">
        <div
          className="image"
          style={{
            backgroundImage: `url(${backgroundUrl})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectItem;
