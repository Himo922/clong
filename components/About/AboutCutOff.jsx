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
    <div className="about-cut-off-container min-h-[200px]">
      <div className="outer-container" ref={ref}>
        <h2 className="section-title">
          {/* <p className="paralax-title">
            Leorem ashjklfh a aklshfklals aklhlk asf
          </p> */}
          <p className="paralax-title " data-direction="left">
            {" "}
            About ME
          </p>
          <p className="paralax-title" data-direction="right">
            Live The Adventure
          </p>
        </h2>
      </div>
    </div>
  );
};
