import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { ThemeTogger } from "./ThemeTogger";

import clsx from "clsx";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = ({ className, id, isMobile }) => (
  <motion.ul
    variants={variants}
    id={id}
    className={clsx(
      " w-1/4 flex flex-col justify-end mt-[80%] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:items-center",
      className
    )}
  >
    {navLists.map((item, index) => (
      <MenuItem item={item} key={item} links={navLinks[index]} />
    ))}
    {!isMobile && <ThemeTogger className="ml-20 text-orange-700 uppercase" />}
  </motion.ul>
);

const navLists = ["about", "work", "journey", "contact"];
const navLinks = [`#about`, `#work`, `#journey`, `#contact`];
