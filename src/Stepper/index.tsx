import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Step, { Props as StepProps } from "./Step";
import Heading from "./Heading";
import "./style.scss";

export type Props = {
  id: string;
  heading: string;
  stepProps: StepProps[];
  svgLength: number;
  stepDivMaxHeight: number;
  rootClassname?: string;
};

const Stepper: React.FC<Props> = (props: Props) => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const [animatedOnce, setAnimatedOnce] = useState(false);
  const { scrollYProgress } = useScroll({
    target: stepperRef,
    offset: ["0 0.8", "end end"],
  });
  const {
    heading,
    stepProps,
    svgLength,
    rootClassname = "",
    stepDivMaxHeight,
    id,
  } = props;
  const [resMaxHeight, setResMaxHeight] = useState<number>(stepDivMaxHeight);

  useEffect(() => {
    const margin = 16;
    const resizeCallback = () => {
      if (stepperRef.current) {
        const stepDivHeight = Array.from(stepperRef.current.children)
          .filter((n: any) => n.classList.contains("step"))
          ?.at(0)?.clientHeight;
        if (stepDivHeight) {
          if (id === "experience") {
            setResMaxHeight(stepDivHeight + margin - 3);
          } else if (id === "education") {
            setResMaxHeight((stepDivHeight + 1) * 2 + margin * 5);
          }
        }
      }
    };

    if (window.outerWidth < 562) resizeCallback();
    else {
      if (id === "education") {
        setResMaxHeight(stepDivMaxHeight * 2 + margin * 4);
      }
    }
  }, []);

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
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
      if (progress >= 0.85) {
        stepChilds.at(stepChilds.length - 1)?.classList.add("visible");
        stepChilds.at(stepChilds.length - 1)?.classList.remove("hidden");
      }
      if (progress === 1) setAnimatedOnce(true);
    });

    return () => {
      stepChilds.slice(0, stepChilds.length - 1).forEach((element) => {
        observer.unobserve(element);
      });
      unsubscribe();
    };
  }, [stepperRef]);

  return (
    <div className={`stepper ${rootClassname}`} id={id} ref={stepperRef}>
      <Heading heading={heading} />

      <svg
        id="progress"
        viewBox={`0 0 100 ${svgLength}`}
        className="svg-line"
        style={{ maxHeight: resMaxHeight }}
      >
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
