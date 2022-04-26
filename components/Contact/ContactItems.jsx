import React, { cloneElement } from "react";
import { motion } from "framer-motion";

export const ContactItems = ({
  name,
  href,
  comment,
  icon,
  controls,
  custom,
}) => {
  return (
    <motion.div
      className="flex flex-col items-start"
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {
          opacity: 0,
        },
        hover: {
          y: -3,
        },
      }}
      animate={controls}
      custom={custom}
    >
      <div className="flex flex-row items-center">
        <div>
          <a
            className="block pt-3 pb-2 text-center text-xl fill-black-700"
            target="_blank"
            rel="noreferrer"
            href={href}
          >
            {cloneElement(icon, {
              className: "mx-auto text-2xl fill-black-700 dark:fill-black-700",
            })}
          </a>
        </div>

        <div className="ml-5">
          <h3>{name}</h3>
        </div>
      </div>
      <div>
        <h4 className="text-sm">{comment}</h4>
      </div>
    </motion.div>
  );
};
