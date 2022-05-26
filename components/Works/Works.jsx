import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "../../hooks/useWindowSize";
import { VisualeData } from "./VisualeData";
import { Tds } from "../Tds";

const animInVariants = {
  hidden: {
    opacity: 0,
    y: "50vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      mass: 0.4,
      damping: 100,
    },
  },
};
export const Works = () => {
  const { width, height } = useWindowSize();

  const bannerRef = useRef(null);
  const stickyContaier = useRef(null);

  const { ref, inView } = useInView(
    { threshold: 0 },
    width > 1200 ? { rootMargin: "0px" } : { rootMargin: "50vh" }
  );

  // useEffect(() => {
  //   const updateScrollRatio = () => {
  //     scrollRatio =
  //       bannerRef.current.offsetTop /
  //       (stickyContaier.current.offsetHeight - 0.8 * height);

  //     console.log(
  //       `scrollRatio=${scrollRatio} ,offtop=${bannerRef.current.offsetTop} ,offsetHeight=${bannerRef.current.offsetHeight},,container=${stickyContaier.current.offsetHeight}`
  //     );
  //   };

  //   const scrollInProgress = () => {
  //     if (width > 1200) {
  //       updateScrollRatio();
  //     }
  //   };

  //   if (inView) {
  //     window.addEventListener("scroll", scrollInProgress);
  //   }

  //   return () => window.removeEventListener("scroll", scrollInProgress);
  // }, [inView]);

  return (
    <div ref={ref}>
      {/*Coding with visual  */}
      {/* <div className="play with code bg-[#000000]">
        <div className="p-5 bg-[#000000]">
          <h3 className="hidden"> coding with visual</h3>
          <motion.p
            variants={animInVariants}
            initial="hidden"
            animate="visible"
            className="text-[3rem] md:text-[96px] font-medium text-[#1d1d1f] text-white-900"
          >
            Play with Code
          </motion.p>
          <p
            variants={animInVariants}
            initial="hidden"
            animate="visible"
            className="text-[3rem] md:text-[96px]  font-medium text-[#1d1d1f] text-white-900"
          >
            {" "}
            visuale data
          </p>

          <p
            variants={animInVariants}
            initial="hidden"
            animate="visible"
            className="text-md md:text-lg font-medium text-[#1d1d1f] text-white-700"
          >
            using p5.js or canvas to make art pices
          </p>
        </div>

        <div className="canvas-element">
          <div className="h-[70vh]">
            <Tds />
          </div>
        </div>
      </div> */}

      {/*Design UIl  */}
      {/* <div className="UI Design bg-[#000000]">
        <div className="p-5">
          <h3 className="hidden"> Design ui</h3>
          <motion.p
            variants={animInVariants}
            initial="hidden"
            animate="visible"
            className="text-[3rem] md:text-[96px] font-medium text-[#1d1d1f]"
          >
            Design UI
          </motion.p>
          <p
            variants={animInVariants}
            initial="hidden"
            animate="visible"
            className="text-[3rem] md:text-[96px]  font-medium text-[#1d1d1f]"
          >
            Provide Greate UX
          </p>

          <p
            variants={animInVariants}
            initial="hidden"
            animate="visible"
            className="text-md md:text-lg font-medium text-[#1d1d1f]"
          >
            using p5.js or canvas to make art pices
          </p>
        </div>

        <div className="canvas-element">
          <div className="bg-gray-700 h-[70vh]"></div>
        </div>
      </div> */}
    </div>
  );
};
