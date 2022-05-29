import { Container } from "../Container";
import React from "react";
import clsx from "clsx";

export const SectionHeader = ({ title, description, color }) => {
  return (
    <div className={clsx("flex flex-col container mx-auto mt-16")}>
      <h2
        className={clsx(
          "mb-4 mr-4 text-3xl font-bold md:text-sectionHeader",
          color
        )}
      >
        {title}
      </h2>
      <div className="mb-8 text-md">
        <p className="text-md text-gray-600">{description}</p>
      </div>
    </div>
  );
};
