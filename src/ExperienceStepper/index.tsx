import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Step, { Props as StepProps } from "./Step";
import Heading from "./Heading";
// import { mapScrollPercentage } from "utils/commonUtils";
import "./style.scss";

export type Props = {
  heading: string;
  stepProps: StepProps[];
  scrollRange: number[];
};

const Stepper: React.FC<Props> = (props: Props) => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const [animatedOnce, setAnimatedOnce] = useState(false);
  const { scrollYProgress } = useScroll({
    target: stepperRef,
    offset: ["0 0.8", "end end"],
  });
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
    const stepChilds = childs.filter((child) =>
      child.classList.contains("step")
    );

    const observer = new IntersectionObserver(callback);

    // add observer to every step children except the last
    stepChilds.slice(0, stepChilds.length - 1).forEach((element) => {
      observer.observe(element);
    });

    // add visibility to the last step child only at last
    const unsubscribe = scrollYProgress.onChange(() => {
      const progress = scrollYProgress.get();
      if (progress >= 0.85)
        stepChilds.at(stepChilds.length - 1)?.classList.add("visible");

      if (progress === 1) setAnimatedOnce(true);
    });

    return () => {
      stepChilds.slice(0, stepChilds.length - 1).forEach((element) => {
        observer.unobserve(element);
      });
      unsubscribe();
    };
  }, [stepperRef]);

  const svgLength = 170;

  return (
    <div className="stepper" id="experience" ref={stepperRef}>
      <Heading heading={heading} />

      <svg id="progress" viewBox={`0 0 100 ${svgLength}`} className="svg-line">
        <motion.path
          className="path"
          fill="black"
          stroke="black"
          strokeWidth="2"
          d={`M 0 0 L 0 ${svgLength}`}
          style={{ pathLength: animatedOnce ? svgLength : scrollYProgress }}
        />
      </svg>
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

export default Stepper;
