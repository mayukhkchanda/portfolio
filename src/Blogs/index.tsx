import React from "react";
import Heading from "Stepper/Heading";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import "./style.scss";

export type Props = {
  heading: string;
  articles: {
    title: string;
    link: string;
  }[];
};

const Blogs: React.FC<Props> = (props: Props) => {
  const { articles, heading } = props;
  return (
    <div className="blogs" id="blogs">
      <Heading heading={heading} />
      <ul className="blogs-list">
        {articles.map(({ title, link }) => (
          <div key={title} className="blogs-list-item">
            <KeyboardDoubleArrowRightOutlinedIcon className="blogs-list-icon" />
            <a
              className="blogs-list-item-link"
              href={link}
              rel="noreferrer"
              target="_blank"
            >
              <span className="blogs-list-item-title">{title}</span>
              <span className="link-bg"></span>
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
