import React from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";
import { Section } from "../Section";
import { Container } from "../Container";
import { Hero_image } from "/assets/Images/";
import { useParallax } from "react-scroll-parallax";
import { HeroPendulum } from "./HeroPendulum";

import clsx from "clsx";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const Hero = ({ className, styles, width, height }) => {
  const { ref } = useParallax({
    easing: "easeOutQuad",
    translateY: [0, 0],
    opacity: [0.8, 1],
    scale: [0.8, 1],
  });

  return (
    <>
      <HeroPendulum c_width={width} c_height={height} />
      <section
        className="hero-section-container h-screen py-10 w-full "
        ref={ref}
      >
        <div className={clsx("container z-10 pt-20 px-10", className)}>
          <div className="mb-1 md:mb-2 z-10 h-full flex-1 z-10 flex flex-wrap">
            <div className="top-20 w-400">
              <p
                className="text-base max-w-[80%]
        text-sm md:text-sm 
        dark:text-black-700 text-black-700 italic
        transition-opacity delay-500  opacity-100"
              >
                “More I know, more I dont know learn never stop.”
              </p>
            </div>

            <div className="hero-greeting flex-1 z-10 flex flex-wrap flex-col">
              <p className="mb-2 md:mb-4 text-md md:text-lg lg:text-xl dark:text-black-700 text-black-700">
                Hi, I am
              </p>
              <h2 className="mb-0 md:mb-7 text-4xl md:text-5xl lg:text-8xl font-bold dark:text-black-900 text-black-900">
                CLong Lam
              </h2>
              <h3 className="mb-0 md:mb-4 text-xl md:text-2xl lg:text-5xl font-bold dark:text-black-900 text-black-900">
                Developer &#38; Designer
              </h3>
              <Icons className="max-w-full p-2 mt-2 dark:text-black-700 text-black-700" />
            </div>
          </div>

          <div className="container mx-auto flex-1 text-2xl py-2 items-center justify-center z-10 text-center">
            {/* <Hero_image
            className="text-center text-2xl"
            alt="Picture of the author"
            width="100%"
            height="100%"
          /> */}
          </div>
        </div>
        {/* <div className="absolute bottom-20 left-1/2 w-[300px] -translate-x-1/2">
        <p className="text-center">Scroll down</p>
      </div> */}
      </section>
    </>
  );
};
