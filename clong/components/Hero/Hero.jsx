import React from "react";
import { motion } from "framer-motion";
import { SvgLogos } from "./SvgLogos";
import { Section } from "../Section";
import { Container } from "../Container";
import Image from "next/image";
import { Hero_image } from "/assets/Images/";

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

export const Hero = ({ className }) => {
  return (
    <div className="">
      <div
        className={clsx(
          "container flex flex-wrap justify-center md:justify-between items-center mx-auto md:flex-row flex-col-reverse z-10",
          className
        )}
      >
        <div className="mt-20 mb-16 md:mt-28 flex-1 z-10">
          <p className="mb-4 text-md md:text-lg lg:text-xl dark:text-orange-500 text-black-700">
            Hi, I am
          </p>
          <h2 className="mb-7 text-4xl md:text-5xl lg:text-8xl font-bold dark:text-white-900 text-orange-700">
            CLong Lam
          </h2>
          <h3 className="mb-4 text-xl md:text-2xl lg:text-5xl font-bold dark:text-white-900 text-black-900">
            Developer &#38; Designer
          </h3>

          <p
            className="text-base max-w-[80%] mt-8 
        text-sm md:text-sm 
        dark:text-orange-500 text-black-700 italic"
          >
            “World grow &#38; evolve every day, learn never stop.”
          </p>

          <Container className="max-w-[80%]">
            <div className="">
              <motion.div
                initial="hidden"
                animate="show"
                variants={container}
                className=""
              ></motion.div>
              <SvgLogos className="max-w-full p-2 mt-10" />
              {/* <p>First honor graduate from Media Arts degree.</p>
            <p>4-Year Work Experience from front-end to full-stack. </p>
            <p>Currently bassed in Vancourver</p> */}
            </div>
          </Container>
        </div>

        <div className="container mx-auto grow flex-1 md:w-[40px] mt-20 py-2 items-center justify-center z-10">
          <Hero_image
            className="block m-auto "
            alt="Picture of the author"
            width="50vw"
            height="50vw"
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
};
