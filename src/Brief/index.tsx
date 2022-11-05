import React from "react";
import Heading from "Stepper/Heading";
import "./style.scss";

export type Props = {
  briefDesc: string | React.ReactElement;
  skillsHeading: string;
  skills: {
    name: string;
    logoUrl: string;
  }[];
};

const Brief: React.FC<Props> = (props: Props) => {
  const { briefDesc, skills, skillsHeading } = props;

  return (
    <div className="brief" id="brief">
      <div className="brief-desc">{briefDesc}</div>
      <div className="skills">
        <Heading heading={skillsHeading} />
        <div className="grid">
          {skills.map((skill) => {
            const { logoUrl, name } = skill;
            return (
              <div className="grid-item" key={name}>
                <img src={logoUrl} alt="react logo" />
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brief;
