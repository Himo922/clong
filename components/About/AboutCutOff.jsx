import React, { useEffect, useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";
import {
  AnimatePresence,
  animations,
  motion,
  useAnimation,
} from "framer-motion";

export const AboutCutOff = () => {
  const animateControl = useAnimation();
  const [percentages, setPercentages] = useState(0);

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: "easeOut",
        stiffness: 400,
        damping: 40,
      },
    },
    hidden: {
      y: 10,
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
        stiffness: 400,
        damping: 40,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
        stiffness: 400,
        damping: 60,
      },
    },
  };

  const { ref: parllref } = useParallax({
    speed: [10],
    translateY: [0, -100],
    scale: [0.9, 1],
    onProgressChange: (percentage) => {
      setPercentages(percentage);
    },
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const scrollInProgress = () => {
      let paralaxTitles = document.querySelectorAll(".paralax-title");

      paralaxTitles.forEach((element, index) => {
        // console.log(element.dataset.direction);
        if (element.dataset.direction == "left") {
          element.style.transform = "translateX(" + window.scrollY / 20 + "%)";
        } else {
          element.style.transform = "translateX(" + -window.scrollY / 20 + "%)";
        }
      });
    };

    if (inView) {
      window.addEventListener("scroll", scrollInProgress);
    }

    return () => window.removeEventListener("scroll", scrollInProgress);
  }, [inView]);

  return (
    <div className="about-cut-off-container min-h-[200px]" ref={parllref}>
      <div className="outer-container" ref={ref}>
        <h2 className="section-title">
          {/* <p className="paralax-title">
            Leorem ashjklfh a aklshfklals aklhlk asf
          </p> */}
          <p className="paralax-title  " data-direction="left">
            {" "}
            About ME
          </p>
          <p className="paralax-title outlineText" data-direction="right">
            Live The Adventure
          </p>
        </h2>
      </div>
    </div>
  );
};
