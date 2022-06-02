import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    className="stroke-black-900 dark:stroke-white-900 drop-shadow-sm"
    fill="transparent"
    strokeWidth="3"
    // stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle} className="right-10 top-[10px] menuToggleButton">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          open: { d: "M 2 2.5 L 20 2.5" },
          closed: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          open: { opacity: 1 },
          closed: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          open: { d: "M 2 16.346 L 20 16.346" },
          closed: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
