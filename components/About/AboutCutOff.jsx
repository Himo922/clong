import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export const AboutCutOff = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const scrollInProgress = () => {
      let paralaxTitles = document.querySelectorAll(".paralax-title");

      paralaxTitles.forEach((element, index) => {
        element.style.transform = "translateX(" + window.scrollY / 10 + "%)";
      });

      console.log("Iam moving");
    };

    if (inView) {
      console.log(" I am in view");
      window.addEventListener("scroll", scrollInProgress);
    }

    return () => window.removeEventListener("scroll", scrollInProgress);
  }, [inView]);

  return (
    <div className="about-cut-off-container min-h-[200px]">
      <div className="outer-container" ref={ref}>
        <h2 className="section-title">
          {`Header inside viewport ${inView}.`}
          <span className="paralax-title">Live The Adventure</span>
        </h2>
      </div>
    </div>
  );
};
