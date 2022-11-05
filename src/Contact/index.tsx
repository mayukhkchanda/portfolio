import React from "react";
import Heading from "Stepper/Heading";
import "./style.scss";

export type IContact = {
  icon: React.ReactElement | string;
  text: React.ReactElement | string;
  key: string;
};

export type Props = {
  heading: string;
  contacts: IContact[];
};

const Contact: React.FC<Props> = (props: Props) => {
  const { heading, contacts } = props;

  return (
    <div className="contact" id="contact">
      <Heading heading={heading} />
      <div className="grid">
        {contacts.map((item) => {
          const { icon, text, key } = item;
          return (
            <div className="grid-item" key={key}>
              {typeof icon === "string" ? (
                <img src={icon} alt={`${icon} logo`} />
              ) : (
                icon
              )}
              <p className="ml-0-5">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
