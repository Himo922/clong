import React, { useRef, useCallback, useState, useEffect } from "react";
import { Logo } from "../Logo";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDimensions } from "./use_dimensions";
import Link from "next/link";
import { useTheme } from "next-themes";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2.5 + 200}px at 90% 40px )`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 90% 40px)",
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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { height } = useDimensions(containerRef);

  const toggleTheme = useCallback(() => {
    setTheme(theme == "light" ? "dark" : "light");
  }, [setTheme, theme]);

  useEffect(() => setMounted(true), []);

  return (
    <motion.nav className=" fixed top-0 z-20 px-2 sm:px-4 py-2.5 rounded w-screen opacity-90 bg-lightTheme dark:bg-darkTheme transition-top duration-300 top-0">
      <div className="container flex flex-wrap justify-between items-center mx-auto dark:text-white-700">
        <Link href="/">
          <a href="/" className="flex items-center">
            {/* For Logo <img src="/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
            <Logo className="z-10 ml-20 self-center text-xl font-semibold whitespace-nowrap dark:text-orange-500 " />
          </a>
        </Link>

        <button
          className="items-center justify-center w-12 h-12 rounded-md dark:bg-gray-900 bg-pink focus:outline-none focus:ring-2 ring-blue-700 d-flex"
          onClick={toggleTheme}
        >
          {mounted ? (
            theme == "light" ? (
              <span className="inline w-6 h-6 ml-1">Light</span>
            ) : (
              <span className="inline w-6 h-6">Dark</span>
            )
          ) : null}
        </button>

        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className="absolute top-[20px] left-[88%] min-w-[50px] h-[50px] m-0 p-0"
        >
          <MenuToggle
            toggle={() => toggleOpen()}
            className="z-20 absolute top-0  m-0
             w-[40px] h-[40px] md:hidden"
          />
          {/* 
          <Navigation /> */}
        </motion.div>

        <motion.div
          className=" absolute top-0 left-0 w-screen p-0  md:w-auto md:hidden"
          id="mobile-menu"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div
            className="fixed w-screen h-screen bg-gray-700"
            variants={sidebar}
          />

          <Navigation className="w-full" />
        </motion.div>
        {/* <Navigation className="hidden md:block md:relative md:w-auto" /> */}
      </div>
    </motion.nav>
  );
};
