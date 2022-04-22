import { Container } from "../Container";
import React from "react";
import clsx from "clsx";

export const SectionHeader = ({ title, className, color }) => {
  return (
    <Container className={clsx("flex flex-col", className)}>
      <div className={clsx("flex flex-row", className)}>
        <h2
          className={clsx(
            "mb-4 mr-4 text-2xl font-bold md:text-sectionHeader",
            color
          )}
        >
          {title}
        </h2>
        <div className="mb-8 w-[25%] border-b-2 border-orange-500"></div>
      </div>
    </Container>
  );
};
