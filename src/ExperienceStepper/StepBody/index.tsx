import React from "react";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import "./style.scss";

export type Props = {
  title: string;
  tasks: string[];
};

const StepBody: React.FC<Props> = (props: Props) => {
  const { tasks, title } = props;

  return (
    <div className="step-body">
      <p className="step-body-title">{title}</p>
      <ul className="step-body-list">
        {tasks.map((task) => (
          <div
            key={title + "-" + task.substring(0, 150)}
            className="step-body-list-item"
          >
            <KeyboardDoubleArrowRightOutlinedIcon className="step-body-list-icon" />
            <div>{task}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default StepBody;
