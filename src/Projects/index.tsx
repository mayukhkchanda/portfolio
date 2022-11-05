import React from "react";
import Heading from "Stepper/Heading";
import ProjectItem, { Props as ProjectItemProps } from "./ProjectItem";

import "./style.scss";

export type Props = {
  heading: string;
  projectItemProps: ProjectItemProps[];
};

const Projects: React.FC<Props> = (props: Props) => {
  const { heading, projectItemProps } = props;
  return (
    <div className="projects" id="projects">
      <Heading heading={heading} />
      {projectItemProps.map((item) => {
        const { backgroundUrl, descBrief, descTitle, linkText, urlLink } = item;
        return (
          <ProjectItem
            backgroundUrl={backgroundUrl}
            descBrief={descBrief}
            descTitle={descTitle}
            linkText={linkText}
            urlLink={urlLink}
            key={descTitle + " " + descBrief}
          />
        );
      })}
    </div>
  );
};

export default Projects;
