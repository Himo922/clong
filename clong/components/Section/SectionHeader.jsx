import { Container } from "../Container";
import React from "react";
import clsx from "clsx";

export const SectionHeader = ({ title, description, className }) => {
  return (
    <Container className={clsx("flex flex-col", className)}>
      <div className={clsx("flex flex-row", className)}>
        <h2 className="mb-4 mr-4 text-2xl font-bold md:text-sectionHeader dark:text-white-900 text-black-900">
          {title}
        </h2>

        <div className="mb-8 w-[25%] border-b-2 border-orange-500"></div>
      </div>
      <div>
        <p className="text-base max-w-[80%] md:text-xl dark:text-white-700 text-black-700">
          {description}
        </p>
      </div>
    </Container>
  );
};
