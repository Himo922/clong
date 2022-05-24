import React from "react";
import { Card } from "../../components/Card";
import clsx from "clsx";
import { data } from "../../src/data";
import { BsGrid1X2Fill, BsListStars } from "react-icons/bs";

const ProjectList = () => {
  return (
    <div className=" ">
      <div className="py-3">
        <img
          src="/images/project-grid-full.png/"
          alt="projects-image"
          className="h-[400px] w-full object-cover"
        ></img>
      </div>

      <div className="container mx-auto min-h-screen max-w-[1200px] width-full bg-white-800">
        <div className="py-8">
          <p className="text-4xl font-bold">Project</p>
          <h2 className="text-2xl font-bold">
            Creating digital experiences our clients fall in love with
          </h2>
        </div>

        <div className="project-filter w-full flex justify-end py-5 px-10 gap-3 bg-white-900">
          {/* <BsGrid1X2Fill />
          <BsListStars /> */}
        </div>

        <div className="project-list grid grid-cols-2 gap-y-8 gap-x-2 py-5 px-10">
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
