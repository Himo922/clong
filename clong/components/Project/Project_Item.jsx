import React, { useMemo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export const Project_Item = ({ className, odd }) => {
  const projects = useMemo(() => [
    {
      title: "Stem Rings ",
      subtitle: "projects.laddy.subtitle",
      year: "2021",
      description: "projects.laddy.description",
      technologies: ["React", "TypeScript", "GraphQL"],
      externalLink: "https://laddy.app",
      githubLink: "https://github.com/ironsoul0/laddy",
      imageLink: `/images/screen.png`,
    },
    {
      title: "NU Open",
      subtitle: "projects.nuopen.subtitle",
      description: "projects.nuopen.description",
      technologies: ["React", "Gatsby", "Node.js"],
      externalLink: "https://nuopen.kz",
      githubLink: "https://github.com/ironsoul0/nuopen",
      imageLink: `/images/nuopen.png`,
    },
    {
      title: "Railwayz",
      subtitle: "projects.railwayz.subtitle",
      description: "projects.railwayz.description",
      technologies: ["React", "XGBoost", "Django"],
      externalLink: "https://railwayz.ironsoul.me",
      githubLink: "https://github.com/ironsoul0/samruk-hackathon",
      imageLink: `/images/railwayz.png`,
    },
  ]);

  const { title, subtitle, year, description, technologies, imageLink } =
    projects[0];
  return (
    <>
      <div
        className={clsx(
          "flex flex-row container mt-12 justify-center items-center max-w-[80%] md:justify-between",
          odd && "md:flex-row-reverse"
        )}
      >
        <div
          className={clsx(
            "z-40 mr-5 border-l-4 border-orange-700 ml-8 p-5 absolute md:relative",
            odd && "md:border-l-0",
            odd && "md:border-r-4"
          )}
        >
          <h3 className="text-3xl mb-1 font-bold">
            {title} <span className="text-orange-700 text-sm">&#47; </span>
            <span className=" text-sm font-normal">Software & UI Develop</span>
          </h3>
          <h3 className="text-sm mb-5 font-normal">{year}</h3>
          <p className="text-sm mb-5 font-normal">{description}</p>

          <h4> {technologies}</h4>
        </div>

        <div className="">
          <motion.img
            className="object-fill h-[400px] rounded-lg brightness-50
          md:h-auto hover:brightness-100
           md:opacity-100 md:dark:opacity-80"
            src={imageLink}
            alt={`image of ${title}`}
            style={{
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
            }}
          />
        </div>
      </div>
    </>
  );
};
