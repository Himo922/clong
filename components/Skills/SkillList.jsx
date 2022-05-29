import React, { useEffect, useRef, useState } from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "../../hooks/useWindowSize";

import clsx from "clsx";
import _ from "lodash";

export const SkillList = ({ title, context, image, ido }) => {
  const [percentages, setPercentages] = useState(0);
  const { width, height } = useWindowSize();

  const { ref: parllref } = useParallax({
    speed: [10],
    translateY: [10, -5],
    scale: [0.9, 1],
    onProgressChange: (percentage) => {
      setPercentages(percentage);
    },
  });

  titleDivider(title);

  return (
    <div className="bg-black-900 mt-[00px] w-full h-[80vh] relative">
      <div ref={parllref}>
        <h3 className="hidden">{ido} </h3>
        <div className="">
          <p className="text-white-900 text-[64px] leading-[4rem] font-bold py-8 px-5 border-0 ">
            {/* {titleDivider(title).map((text, index) => (
            <titleText key={`${text}_${index}`} title={text}></titleText>
          ))} */}
            {title}
          </p>
        </div>

        <div>
          <p className="text-white-900 text-[15px] leading-[1.5rem] font-bold py-8 px-5 border-0 ">
            {context}
          </p>
        </div>

        <div className="max-w-[1200px] px-5">
          <img className="w-full" src={image} alt="project1"></img>
        </div>
      </div>
    </div>
  );
};

export const titleDivider = (title) => {
  let dividedTitle = [];
  dividedTitle = _.split(title, " ");

  return dividedTitle;
};
