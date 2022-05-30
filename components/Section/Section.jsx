import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
// import { useTheme } from "next-themes";
import clsx from "clsx";
import { SectionHeader } from "./SectionHeader";
import { useStateContext } from "../../context/StateContext";

export const Section = ({
  title,
  description,
  children,
  color,
  navIndex,
  themeProps,
}) => {
  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: " -60px",
  });
  // const { theme, setTheme } = useTheme();
  const { currentSection, setCurrentSection } = useStateContext();

  useEffect(() => {
    if (inView) {
      setCurrentSection(navIndex);
      console.log("currentSection", currentSection);
    }
  });
  return (
    <section ref={ref}>
      <h3 className="hidden">{title}</h3>
      {/* <SectionHeader title={title} description={description} /> */}

      {children}
    </section>
  );
};
