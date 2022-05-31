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
    <div className="bg-black-900 mt-[00px] w-full h-[80vh] relative py-8">
      <div ref={parllref}>
        <h3 className="hidden">{ido} </h3>
        <div className="flex flex-col md:flex-row mx-auto px-10 max-w-[1200px] gap-5">
          <div className="flex flex-col">
            <div className="">
              {titleDivider(title).map((text, index) => (
                <p
                  key={`${title}_${index}`}
                  className={clsx(
                    "text-white-900 text-[64px] leading-[4rem] font-bold px-5 border-0 md:text-[96px]",
                    index == 0 ? "text-violet-700" : "text-white-900"
                  )}
                >
                  {text}
                </p>
              ))}
            </div>

            <div>
              <p className="text-white-900 text-[15px] leading-[1.5rem] font-bold py-8 px-5 border-0 md:text-2xl text-white-700">
                {context}
              </p>
            </div>
          </div>

          <div className="max-w-[1200px] px-5">
            <img className="w-full" src={image} alt="project1"></img>
          </div>
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
