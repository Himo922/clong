import clsx from "clsx";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Container = ({ className, children }) => {
  return <div>{children}</div>;
};
