import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
// import { useTheme } from "next-themes";
import clsx from "clsx";
import { SectionHeader } from "./SectionHeader";

export const Section = ({
  title,
  description,
  sectionClass,
  headerClass,
  children,
  color,
  themeProps,
}) => {
  const [ref, inView] = useInView();
  // const { theme, setTheme } = useTheme();

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    // const position = this.myRef.current.scrollTop;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={ref} className={clsx("py-[100px]", sectionClass)}>
      <SectionHeader
        title={title}
        headerClass={headerClass}
        description={description}
      />
      {scrollPosition}
      {children}
    </section>
  );
};
