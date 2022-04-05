import * as React from "react";
import { motion } from "framer-motion";
import { blue } from "tailwindcss/colors";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button
    data-collapse-toggle="mobile-menu"
    type="button"
    aria-controls="mobile-menu"
    aria-expanded="false"
    onClick={toggle}
    className="     
    hover:bg-gray-100 
    focus:outline-none focus:ring-2 
    focus:ring-gray-200 
    dark:text-gray-400 
    dark:hover:bg-gray-700 
    dark:focus:ring-gray-600"
  >
    <svg width="30" height="30" viewBox="0 0 30 30" className=" w-30 h-30">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
          focus: { fill: blue },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
