import React, { useRef, useCallback, useState, useEffect } from "react";
import { Logo } from "../Logo";
import { motion, useCycle, useViewportScroll } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useDimensions } from "./use_dimensions";
import Link from "next/link";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ThemeTogger } from "./ThemeTogger";
import clsx from "clsx";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2.5 + 200}px at 50% -40px )`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(15px at 50% -40px )",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const NavBar = ({ className }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const { height } = useDimensions(containerRef);
  const size = useWindowSize();

  const { scrollY } = useViewportScroll();
  /** this hook manages state **/
  const [hidden, setHidden] = React.useState(false);

  function navUpdate() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  React.useEffect(() => {
    return scrollY.onChange(() => navUpdate());
  });

  const navbarScrollVariants = {
    visible: { opacity: 1, y: 0 },

    hidden: { opacity: 0, y: -25 },
  };

  const onClickHandler = () => {
    setHidden(true);
    console.log("button on click");
  };

  return (
    <motion.nav
      variants={navbarScrollVariants}
      animate={isOpen ? "visible" : hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className={clsx(
        "fixed max-w-screen top-0 z-20 px-2",
        "sm:px-4",
        "py-2 rounded w-full opacity-90 bg-transparent transition-top duration-300 top-0 m-0",
        className
      )}
    >
      <div className="container flex flex-wrap justify-between px-5 md:justify-around items-center mx-auto dark:text-white-700">
        <div className="z-10 md:ml-20 mt-2 self-center">
          <Link href="/">
            <a className="flex items-center">
              <Logo className="text-sm font-semibold whitespace-nowrap dark:text-orange-700 text-orange-500 uppercase" />
            </a>
          </Link>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          className="block md:hidden top-[20px] left-[88%] min-w-[50px] h-[50px] m-0 p-0"
        >
          <MenuToggle
            toggle={() => toggleOpen()}
            className="z-50 absolute top-[20px]  m-0
             w-[40px] h-[40px] "
          />
        </motion.div>

        <motion.div
          className=" absolute top-0 left-0 w-screen p-0 md:w-auto md:hidden"
          id="mobile-menu"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div
            className="fixed w-screen h-screen bg-blue-900"
            variants={sidebar}
          />

          <Navigation
            className="w-full uppercase ml-12"
            toggle={() => toggleOpen()}
          />
        </motion.div>
        {size.width > 800 && <Navigation className=" md:w-auto uppercase" />}
      </div>
    </motion.nav>
  );
};
