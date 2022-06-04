import React from "react";
import clsx from "clsx";

export const Card = ({
  title,
  desc,
  href,
  technologies,
  imageSrc,
  className,
}) => {
  return (
    <div
      className={clsx(
        "max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  hover:scale-105 duration-500",
        className
      )}
    >
      <a href={href}>
        <img
          className="rounded-t-lg object-cover cardImage"
          src={imageSrc}
          alt={`image of + ${title}`}
        />
      </a>
      <div className="p-5">
        <a href={href}>
          {technologies.map((technology, index) => (
            <span key={`${technology}_${index}`} className="text-sm md:text-md">
              {" "}
              {index != 0 ? " | " : " "}
              {technology}{" "}
            </span>
          ))}

          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
        </a>
      </div>
    </div>
  );
};
