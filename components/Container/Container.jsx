import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Container = ({ className, styles, children }) => {
  return (
    <div
      className={clsx("z-10 container mx-auto mt-16 ", className)}
      style={styles}
    >
      {children}
    </div>
  );
};
