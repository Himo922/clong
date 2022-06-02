import React, { useRef, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useWindowSize } from "./useWindowSize";
import { motion, useCycle } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  closed: {
    transition: { staggerChildren: 0.07, delayChildren: 0.5 },
  },
  open: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ className, id, toggle }) => (
  <motion.ul
    variants={variants}
    className={clsx(
      "flex flex-col h-full mt-[60vh]",
      "md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:mt-[30px]"
    )}
  >
    <MenuItem />
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];

const navLists = ["about", "project", "skill", "contact"];
