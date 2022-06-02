import React, { useState } from "react";

import { Card } from "../../components/Card";
import clsx from "clsx";
import { allProject } from "../../src/data";
import { BsGrid1X2Fill, BsListStars } from "react-icons/bs";
import { useTheme } from "next-themes";
const ProjectList = () => {
  const { theme, setTheme } = useTheme();

  const [grid, setGrid] = useState(true);

  const [list, setList] = useState(false);
  setTheme("light");

  return (
    <div className="bg-white-900 mt-10 ">
      <div className="py-3"></div>

      <div className="container mx-auto min-h-screen max-w-[1200px] width-full bg-white-800">
        <div className="py-8 px-10">
          <p className=" mt-8 text-4xl font-bold">Project</p>
          <p className="text-xl font-medium">
            Creating digital experiences our clients fall in love with
          </p>
        </div>

        <div className="project-filter w-full flex justify-end py-5 px-10 gap-3 bg-white-900">
          <div className="flex flex-row gap-5">
            {/* {selector.map((selector, index) => (
              <div
                key={selector}
                className="bg-white-500 rounded-full px-3 py-2"
              >
                <p>{selector}</p>
              </div>
            ))} */}
          </div>

          <div className="flex flex-row gap-5">
            <button
              onClick={() => {
                setList(false);
                setGrid(true);
              }}
            >
              <BsGrid1X2Fill />
            </button>

            <button
              onClick={() => {
                setList(true);
                setGrid(false);
              }}
            >
              <BsListStars />
            </button>
          </div>
        </div>
        <hr />
        {grid && (
          <div className="project-list grid grid-cols-8 gap-y-8 gap-x-2 py-5 px-10 mx-auto max-w-[1200px]">
            {allProject.map((project, index) => (
              <Card
                key={clsx(project.title, index)}
                technologies={project.technologies}
                title={project.title}
                // desc={project.description}
                href={project.url}
                imageSrc={project.imageLink}
                index={index}
                className={`col-span-8 md:col-span-3 ${
                  index % 2 == 0
                    ? "col-start-0 md:col-start-2"
                    : "col-start-0 md:col-start-5"
                }`}
              />
            ))}
          </div>
        )}

        {list && (
          <div className="project-list flex flex-col  py-5 px-10">
            {allProject.map((project, index) => (
              <div
                key={clsx(project.title, index)}
                className="boder-gray flex flex- justify-between px-8 py-5 border-b-2 border-slate-100"
              >
                <div>{project.title}</div>

                <div>{project.year}</div>
              </div>

              // <Card
              //   key={clsx(project.title, index)}
              //   technologies={project.technologies}
              //   title={project.title}
              //   // desc={project.description}
              //   href={project.githubLink}
              //   imageSrc={project.imageLink}
              //   index={index}
              // />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;

const selector = [
  "All",
  "Front-end",
  "Headless CMS",
  "Back-end",
  "Ineractive Game ",
  "software",
];
