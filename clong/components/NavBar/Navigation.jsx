import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
    <motion.ul
      variants={variants}
      className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
    >
      {navLists.map((item) => (
        <MenuItem item={item} key={item} />
      ))}
    </motion.ul>
  </div>
);

const navLists = ["home", "about", "work", "journey", "contact"];
