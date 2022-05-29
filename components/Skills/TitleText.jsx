import React, { useEffect, useRef, useState } from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import _ from "lodash";

export const titleText = ({ title }) => {
  //   const [percentages, setPercentages] = useState(0);

  //   const { ref: parllref } = useParallax({
  //     speed: [10],
  //     translateY: [100, 0],
  //     scale: [0.9, 1],
  //     onProgressChange: (percentage) => {
  //       setPercentages(percentage);
  //     },
  //   });

  return (
    <div key={`${text}_${index}`} className="overflow-hidden">
      <h2>{title}</h2>
    </div>
  );
};
