import React, { cloneElement } from "react";
import { motion } from "framer-motion";

export const IconsItems = ({ name, href, icon, controls, custom }) => {
  return (
    <motion.a
      className="block pt-3 pb-2 text-center text-xl fill-black-700 dark:fill-black-700"
      target="_blank"
      href={href}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {
          opacity: 0,
        },
        hover: {
          y: -3,
        },
      }}
      animate={controls}
      custom={custom}
    >
      {cloneElement(icon, {
        className: "mx-auto text-2xl fill-black-700 dark:fill-black-700",
      })}
    </motion.a>
  );
};
