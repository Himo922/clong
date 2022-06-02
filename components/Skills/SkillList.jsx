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
  const animateControl = useAnimation();

  const titleVariants = {
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.25,
        duration: 0.5,
        ease: "easeOut",
        stiffness: 400,
        damping: 40,
      },
    }),
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
      y: 10,
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

  const decsVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
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
      y: 10,
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

  const imageVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
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
      y: 10,
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
    translateY: [10, -5],
    scale: [0.9, 1],
    onProgressChange: (percentage) => {
      setPercentages(percentage);
    },
  });
  titleDivider(title);
  return (
    <div className="bg-black-900 mt-[00px] w-full min-h-[40vh] md:h-[55vh] relative py-6">
      <div ref={parllref}>
        <h3 className="hidden">{ido} </h3>
        <div className="flex flex-col md:flex-row mx-auto px-10 max-w-[1200px] gap-5">
          <div className="flex flex-col">
            <div className="">
              {titleDivider(title).map((text, index) => (
                <motion.p
                  variants={titleVariants}
                  custom={index}
                  initial="hidden"
                  animate={percentages > 0.2 ? "visible" : "exit"}
                  exit="exit"
                  key={`${title}_${index}`}
                  className={clsx(
                    "text-white-900 text-[56px] leading-[4rem] md:leading-[5rem] font-bold px-5 border-0 md:text-[96px]",
                    index == 0 ? "text-violet-700" : "text-white-900"
                  )}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <div>
              <motion.p
                variants={decsVariants}
                initial="hidden"
                animate={percentages > 0.4 ? "visible" : "exit"}
                exit="exit"
                className="text-gray-700 max-w-[50ch] text-[18px] leading-[1.5rem] font-medium py-8 px-5 border-0 md:text-2xl text-white-700"
              >
                {context}
              </motion.p>
            </div>
          </div>

          <div className="max-w-[1200px] px-5">
            <motion.img
              variants={imageVariants}
              initial="hidden"
              animate={percentages > 0.5 ? "visible" : "exit"}
              exit="exit"
              className="w-full rounded-xl"
              src={image}
              alt="project1"
            ></motion.img>
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
