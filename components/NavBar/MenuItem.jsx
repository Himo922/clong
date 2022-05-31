import React, { useRef, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useWindowSize } from "./useWindowSize";
import { motion, useCycle } from "framer-motion";
import { useStateContext } from "../../context/StateContext";

const variants = {
  closed: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  open: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = () => {
  const { currentSection, setCurrentSection } = useStateContext();
  return (
    <>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          "block py-2 pr-4 pl-3 text-white rounded text-[48px] font-bold",
          " md:bg-transparent md:p-0 md:text-sm  md:font-medium dark:text-white"
        )}
      >
        <Link href="/#about" className="">
          <a>About</a>
        </Link>
        {/* {"about" === currentSection ? (
          <motion.div className="underline" layoutId="underline" />
        ) : null} */}
      </motion.li>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          "block py-2 pr-4 pl-3 text-white rounded text-[48px] font-bold",
          " md:bg-transparent md:p-0 md:text-sm  md:font-medium dark:text-white"
        )}
      >
        <Link href="/project">
          <a>Project</a>
        </Link>
      </motion.li>

      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          "block py-2 pr-4 pl-3 text-white rounded text-[48px] font-bold",
          " md:bg-transparent md:p-0 md:text-sm  md:font-medium dark:text-white"
        )}
      >
        <Link href="/#contact">
          <a>Contact</a>
        </Link>
      </motion.li>
    </>
  );
};
