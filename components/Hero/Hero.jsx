import React from "react";
import { motion } from "framer-motion";
import { Icons } from "./Icons";
import { Section } from "../Section";
import { Container } from "../Container";
import { Hero_image } from "/assets/Images/";
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

export const Hero = ({ className, styles }) => {
  return (
    <section className="hero-section-container bg-white-900 h-[1000px] py-10 w-full">
      <HeroPendulum />

      <div
        className={clsx(
          "container flex flex-wrap flex-col z-10 pt-20 justify-center items-center mx-auto",
          "md:flex-row md:justify-between  ",
          className
        )}
      >
        <div className="mb-1 md:mb-2 flex-1 z-10 flex flex-wrap flex flex-col justify-between items-start h-full">
          <div>
            <p
              className="text-base max-w-[80%] 
        text-sm md:text-sm 
        dark:text-black-700 text-black-700 italic"
            >
              “More I know, more I dont know learn never stop.”
            </p>
          </div>
          <div className="h-[400px]"></div>

          <div>
            <p className="mb-2 md:mb-4 text-md md:text-lg lg:text-xl dark:text-black-700  text-black-700">
              Hi, I am
            </p>
            <h2 className="mb-0 md:mb-7 text-4xl md:text-5xl lg:text-8xl font-bold dark:text-black-900 text-black-900">
              CLong Lam
            </h2>
            <h3 className="mb-0 md:mb-4 text-xl md:text-2xl lg:text-5xl font-bold dark:text-black-900 text-black-900">
              Developer &#38; Designer
            </h3>
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
  );
};
