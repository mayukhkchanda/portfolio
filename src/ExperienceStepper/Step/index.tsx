import React from "react";
import "./style.scss";

export type Props = {
  imgPath: string;
  imgAlt: string;
  title: string;
  body: string | React.ReactElement;
};

const Step: React.FC<Props> = (props: Props) => {
  const { imgAlt, imgPath, title, body } = props;
  return (
    <div className="step hidden">
      <div className="header">
        <img src={imgPath} alt={imgAlt} className="step-logo" />
        <p className="title">{title}</p>
      </div>
      <div className="body">{body}</div>
    </div>
  );
};

export default Step;
