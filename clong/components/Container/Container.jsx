import clsx from "clsx";
import React from "react";

export const Container = ({ className, children }) => {
  return <div className={clsx(" max-w-[80%]", className)}>{children}</div>;
};
