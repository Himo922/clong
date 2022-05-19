import React from "react";

export const Card = ({ title, desc, href, technologies, imageSrc }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href={href}>
        <img
          className="rounded-t-lg"
          src={imageSrc}
          alt={`image of + ${title}`}
        />
      </a>
      <div className="p-5">
        <a href={href}>
          {technologies.map(
            (technology, index) => `${index != 0 && " | "} ${technology}`
          )}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
