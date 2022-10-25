import React from "react";
import "./style.scss";

type Props = {
  heading: string;
};

const Heading: React.FC<Props> = (props: Props) => {
  const { heading } = props;
  return (
    <h2 className="heading">
      <span>{heading}</span>
    </h2>
  );
};

export default Heading;
