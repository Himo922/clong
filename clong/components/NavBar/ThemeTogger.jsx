import React, { useRef, useCallback, useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import clsx from "clsx";
import { useTheme } from "next-themes";

export const ThemeTogger = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = useCallback(() => {
    setTheme(theme == "light" ? "dark" : "light");
  }, [setTheme, theme]);

  useEffect(() => setMounted(true), []);

  return (
    <button
      className={clsx(
        "items-center justify-center",
        "bg-orange-700 w-16 h-10 rounded-md",
        "dark:bg-orange-700 px-2 z-10",
        "focus:outline-none focus:ring-2 ring-orange-700 d-flex",
        className
      )}
      onClick={toggleTheme}
    >
      {mounted ? (
        theme == "light" ? (
          <span className="inline w-8 h-8 ml-1 text-sm text-blue-700 bold">
            Light
          </span>
        ) : (
          <span className="inline w-8 h-8 text-sm text-blue-900 bold">
            Dark
          </span>
        )
      ) : null}
    </button>
  );
};
