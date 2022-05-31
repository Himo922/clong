import React, { useEffect, useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { Section } from "../Section";
import clsx from "clsx";
import Link from "next/link";
import { Container } from "../Container";
import {
  AnimatePresence,
  animations,
  motion,
  useAnimation,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Testing_image, Hero_image } from "../../assets/Images";
import { urlSafeDecode } from "@aws-amplify/core";

export const SelectedProject = () => {
  const animateControl = useAnimation();
  const [percentages, setPercentages] = useState(0);

  const titleVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeOut",
        stiffness: 400,
        damping: 40,
      },
    },
    hidden: {
      y: 50,
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
      y: 50,
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

  const titlebgVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.5,
        ease: "easeOut",
        stiffness: 400,
        damping: 40,
      },
    },
    hidden: {
      y: 0,
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

  const imgVariants = {
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

  const CTAvariants = {
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
      y: 30,
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.2,
        ease: "easeInOut",
        stiffness: 400,
        damping: 40,
      },
    },
    exit: {
      y: 30,
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.2,
        ease: "easeInOut",
        stiffness: 400,
        damping: 60,
      },
    },
  };

  const othersVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 1,
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
    hidden: {
      y: 80,
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.2,
        ease: "easeInOut",
        stiffness: 400,
        damping: 40,
      },
    },
    exit: {
      y: 30,
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.2,
        ease: "easeInOut",
        stiffness: 400,
        damping: 60,
      },
    },
  };
  const { ref: parllref } = useParallax({
    translateY: [10, -5],
    onProgressChange: (percentage) => {
      setPercentages(percentage);
    },
  });
  return (
    <Section>
      <div
        className="px-0 relative w-full  md:px-10 transition-all "
        ref={parllref}
      >
        <h3 className="hidden"> Selected Project </h3>
        <motion.div
          className="md:py-10"
          style={{
            backgroundImage: ` url("/images/Artboard21.png")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          variants={titlebgVariants}
          initial="hidden"
          animate={percentages > 0.1 ? "visible" : "exit"}
          exit="exit"
        >
          <motion.p
            variants={titleVariants}
            initial="hidden"
            animate={percentages > 0.1 ? "visible" : "exit"}
            exit="exit"
            className="text-4xl font-bold md:text-[64px] leading-[3rem] md:py-3 mx-auto px-5 text-center py-5"
          >
            Selected Project
          </motion.p>
        </motion.div>

        <div className="px-5 mt-8 py-5 md:max-w-[1200px] mx-auto ">
          <Link href="/project/stem" passHref>
            <motion.div
              variants={imgVariants}
              whileHover={{
                scale: 1.05,
                transition: {
                  delay: 0.05,
                  duration: 0.3,
                  ease: "easeInOut",
                  stiffness: 400,
                  damping: 40,
                },
              }}
              whileTap={{ scale: 0.95 }}
              initial="hidden"
              animate={percentages > 0.4 ? "visible" : "exit"}
              exit="exit"
              className="flex flex-col justify-center  mt-5 bg-white-700 rounded-xl cursor-pointer"
            >
              <motion.img
                className="w-full transition-all duration-500  rounded-xl"
                src="/images/selectedProject.png"
                alt="Selected Project"
              ></motion.img>

              <motion.div className="w-full px-8 ">
                <motion.p
                  variants={CTAvariants}
                  initial="hidden"
                  animate={percentages > 0.5 ? "visible" : "exit"}
                  exit="exit"
                  className=" text-4xl font-bold py-4"
                >
                  Stem League
                </motion.p>

                <motion.p
                  variants={CTAvariants}
                  initial="hidden"
                  animate={percentages > 0.55 ? "visible" : "exit"}
                  exit="exit"
                  className=" text-sm mb-5 md:text-[28px] leading-[1rem] md:py-3"
                >
                  UI Design | Software Development
                </motion.p>
              </motion.div>
            </motion.div>
          </Link>
        </div>

        <div className="mt-5 md:mt-20 mx-auto w-full ">
          <button className="mt-5 mx-auto w-full ">
            <Link href="/project" passHref>
              <motion.div
                variants={othersVariants}
                whileHover={{
                  scale: 1.15,
                  transition: {
                    delay: 0.05,

                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                }}
                whileTap={{ scale: 0.95 }}
                initial="hidden"
                animate={percentages > 0.6 ? "visible" : "exit"}
                exit="exit"
                id="motionCircle"
                className={clsx(
                  "relative mx-auto flex flex-col justify-center items-center ",
                  " border-dashed border-2 rounded-full  border-black-700 w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] "
                )}
              >
                <p className=" text-xl font-bold text-black-700 text-center md:text-3xl md:py-5">{`Other Project`}</p>
                <p className=" text-xl font-bold text-black-500 text-center md:text-4xl md:py-5">{`->`}</p>
              </motion.div>
            </Link>
          </button>
        </div>
      </div>
    </Section>
  );
};
