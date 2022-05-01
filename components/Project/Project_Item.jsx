import React, { useMemo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export const Project_Item = ({
  className,
  title,
  subtitle,
  year,
  description,
  technologies,
  githubLink,
  imageLink,
  odd,
}) => {
  return (
    <>
      <div
        className={clsx(
          "flex flex-row container mt-12 justify-center items-center",
          "md:ml-10 md:justify-between grow"
        )}
      >
        <div className="flex flex-col grow ">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <div className="md:flex-1">
              <motion.img
                className="object-fill rounded-lg brightness-80
           md:h-auto hover:brightness-100
           md:opacity-100 md:dark:opacity-80"
                src={imageLink}
                alt={`image of ${title}`}
                style={{
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
                }}
              />
            </div>
          </a>

          <div
            className={clsx(
              "z-40 border-orange-700 pt-3 mb-3 ",
              "md:border-l-0 md:flex-1 md:border-l-4 md:ml-8 md:px-5 md:mt-10"
            )}
          >
            <h3 className="text-xl mb-1 font-bold">
              {title} <span className="text-orange-700 text-sm">&#47; </span>
              <span className=" text-sm font-normal">{subtitle}</span>
            </h3>
            <h3 className="text-sm mb-2 font-normal">{year}</h3>
            <p className="text-sm mb-2 font-normal hidden ">{description}</p>
            {technologies.map((technology, index) => (
              <span
                className="text-sm mb-5 font-normal "
                key={clsx("technology", index)}
              >
                {!index == 0 && "	| "}
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
