import React, { cloneElement } from "react";
import { motion } from "framer-motion";

export const SkillsItems = ({ name, href, icon, controls, custom }) => {
  return (
    <motion.a
      className="block pt-3 pb-2 text-center dark:bg-gray-900 rounded-md bg-whiteTheme"
      style={{
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.10)",
      }}
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
      {cloneElement(icon, { className: "mx-auto w-9 h-9" })}
      <p className="mt-2 text-base font-medium text-black-700 dark:text-white-700">
        {name}
      </p>
    </motion.a>
  );
};
