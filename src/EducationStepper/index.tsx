import React, { useEffect, useRef } from "react";
import "./style.scss";
import Step, { Props as StepProps } from "ExperienceStepper/Step";

export type Props = {
  heading: string;
  stepProps: StepProps[];
};

const EducationStepper: React.FC<Props> = (props: Props) => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const { heading, stepProps } = props;

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  };

  useEffect(() => {
    if (!stepperRef.current) return;

    const childs = [].slice.call(stepperRef.current.children) as Element[];

    const observer = new IntersectionObserver(callback);

    childs.slice(1).forEach((element) => {
      observer.observe(element);
    });

    return () => {
      childs.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [stepperRef]);

  return (
    <div className="stepper-edu" id="education" ref={stepperRef}>
      <h2 className="heading">
        <span>{heading}</span>
      </h2>
      {stepProps.map((step) => {
        const { body, imgAlt, imgPath, title } = step;
        return (
          <Step
            key={title}
            imgPath={imgPath}
            imgAlt={imgAlt}
            title={title}
            body={body}
          />
        );
      })}
    </div>
  );
};

export default EducationStepper;
