import React, { useRef, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useWindowSize } from "./useWindowSize";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";

const sidebar = {
  open: () => ({
    x: "100vw",
    transition: {
      type: "spring",
      stiffness: 20,
      x: { stiffness: 1000, velocity: -100 },
      restDelta: 2,
    },
  }),
  closed: {
    x: "0",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const { width, height } = useWindowSize();
  const mobileMenu = useRef();

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
      className="nav-section-container w-full border-gray-200 fixed top-0 z-1000 "
      initial={false}
      animate={isOpen || width > 768 ? "closed" : "open"}
      custom={height}
    >
      <div className="nav-section-blur drop-shadow-md"></div>
      <div className="container flex flex-wrap justify-between items-center max-w-[1500px] mx-auto px-10 py-2.5 ">
        <Link href="/">
          <a className="flex items-center">
            <img
              src="/images/logo.svg"
              className="mr-3 h-6 sm:h-9 drop-shadow-md"
              alt="Clong Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              CLong
            </span>
          </a>
        </Link>

        <motion.div
          ref={mobileMenu}
          variants={sidebar}
          className={clsx(
            "nav-menu w-full md:w-auto px-5",
            " bg-white-900 h-screen top-0 -z-1 absolute md:relative ease-in-out dark:bg-black-700 md:dark:bg-transparent"
          )} //added by me
          onClick={() => toggleOpen()}
          id="mobile-menu"
        >
          <Navigation />
        </motion.div>
        {width < 768 && <MenuToggle toggle={() => toggleOpen()} />}
      </div>
    </motion.nav>
  );
};
