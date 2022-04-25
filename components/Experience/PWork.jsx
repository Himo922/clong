import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

export const PWork = ({ className }) => {
  return (
    <motion.div className={clsx("relative flex items-center", className)}>
      <div
        className="absolute h-20 top-14 w-0.5 dark:bg-white-300 bg-white-700"
        style={{ left: "0.2rem" }}
      />

      <div className="w-2 h-2 bg-gray-700 rounded-full dark:bg-white-700" />
      <div className="ml-8 dark:text-white-700 text-black-700">
        <p className="text-base font-medium">title</p>
        <p className="text-base">place</p>
        <p className="flex items-center text-sm mt-0.5 dark:text-white-500">
          date cancelled
        </p>
      </div>
      <div
        className="absolute h-20 top-14 w-0.5 dark:bg-white-300 bg-white-700"
        style={{ left: "0.2rem" }}
      />
    </motion.div>
  );
};
