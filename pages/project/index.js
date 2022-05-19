import React from "react";
import { Card } from "../../components/Card";
import clsx from "clsx";
import { data } from "../../src/data";

const ProjectList = () => {
  return (
    <div className="py-40 ">
      <div className="container mx-auto min-h-screen max-w-[1200px] width-full">
        <div className="py-8">
          <h2 className="text-2xl font-bold">
            Creating digital experiences our clients fall in love with
          </h2>
        </div>

        <div className="project-filter"></div>

        <div className="project-list grid grid-cols-2 gap-y-8 gap-x-2 ">
          {data.map((project, index) => (
            <Card
              key={clsx(project.title, index)}
              technologies={project.technologies}
              title={project.title}
              desc={project.description}
              href={project.githubLink}
              imageSrc={project.imageLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
