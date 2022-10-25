import React, { useEffect, useRef } from "react";
import Heading from "./Heading";
import Step, { Props as StepProps } from "./Step";
import "./style.scss";

export type Props = {
  heading: string;
  stepProps: StepProps[];
  scrollRange: number[];
};

const mapScrollPercentage = (input: number, scrollRange: number[]) => {
  let [input_start, input_end] = scrollRange; // The lowest number of the range input.
  // The largest number of the range input.
  let output_start = 0; // The lowest number of the range output.
  let output_end = 100; // The largest number of the range output.
  let output =
    output_start +
    ((output_end - output_start) / (input_end - input_start)) *
      (input - input_start);
  return output;
};

const Stepper: React.FC<Props> = (props: Props) => {
  const stepperRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  const { heading, stepProps, scrollRange } = props;
  const svgLength = 570 * (stepProps.length - 1);

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  };

  // useEffect(() => {
  //   if (!pathRef.current) return;

  //   let path = pathRef.current;
  //   let pathLength = path.getTotalLength();

  //   path.style.strokeDasharray = pathLength + " " + pathLength;
  //   path.style.strokeDashoffset = pathLength.toString();

  //   // path.getBoundingClientRect();

  //   const scrollCallback = () => {
  //     let scrollPercentage =
  //       window.scrollY / (document.body.scrollHeight - window.innerHeight);

  //     scrollPercentage *= 100;
  //     // console.log(scrollPercentage);
  //     let mappedScrollPercent = Math.max(
  //       mapScrollPercentage(scrollPercentage, scrollRange),
  //       0
  //     );
  //     mappedScrollPercent = mappedScrollPercent / 100;

  //     let currentLength = pathLength * mappedScrollPercent;
  //     path.style.strokeDashoffset = `${pathLength - currentLength}`;

  //     if (mappedScrollPercent >= 0.99) {
  //       path.style.strokeDasharray = "none";
  //     } else {
  //       path.style.strokeDasharray = pathLength + " " + pathLength;
  //     }
  //   };

  //   window.addEventListener("scroll", scrollCallback);
  //   return () => {
  //     window.removeEventListener("scroll", scrollCallback);
  //   };
  // }, [pathRef.current]);

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
    <div className="stepper" id="experience" ref={stepperRef}>
      <Heading heading={heading} />
      {/* <svg width={`${50}px`} height={`${svgLength}px`} className="svg-line">
        <path
          className="path"
          fill="white"
          stroke="black"
          strokeWidth="4"
          d={`M 0 0 L 0 ${svgLength}`}
          ref={pathRef}
        />
      </svg> */}
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
