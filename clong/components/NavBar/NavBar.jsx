import React, { useRef } from "react";
import { Logo } from "../Logo";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import Link from "next/link";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% -10% )`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% -10%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const NavBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  return (
    <div className="fixed z-20 w-full opacity-90 bg-lightTheme dark:bg-darkTheme transition-top duration-300 top-0">
      <div className="mx-auto max-w-screen-md flex items-center justify-between w-auto py-3 md:py-6 text-black-900 dark:text-white-900">
        <Link href="/">
          <a href="/">
            <Logo className="w-24 text-xl fill-current md:w-28 dark:text-white-900 text-black-900" />
          </a>
        </Link>

        <motion.div
          className="hidden w-full md:block md:w-auto"
          id="mobile-menu"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}
        >
          <MenuToggle toggle={() => toggleOpen()} />
          <motion.div className="background" variants={sidebar} />
          <Navigation />
        </motion.div>
      </div>
    </div>
  );
};
