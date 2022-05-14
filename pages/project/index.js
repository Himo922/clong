import React from "react";
import { Card } from "../../components/Card";
import clsx from "clsx";

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
          {ProjectArr.map((project, index) => (
            <Card
              key={clsx(project.title, index)}
              technologies={project.technologies}
              title={project.title}
              desc={project.description}
              href={project.githubLink}
              imageSrc={project.imageLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;

const ProjectArr = [
  {
    title: "STEM-League",
    subtitle: "Software development",
    year: "2021",
    description:
      "STEM League, which is a learning tool kit for steam learning. I created the software parts of the project including low latency control via the web dashboard and software control on Rpi. It is currently used in a secondary school for learning STEM. ",
    technologies: ["ReactJs", "RPi", "Flask"],
    githubLink: "https://github.com/clonglam/Stem-League",
    imageLink: `/images/STEM Leage_phone.png`,
  },
  {
    title: "E-commerce ",
    subtitle: "Frontend & headless CMS",
    year: "2022",
    description:
      "I will update the detail very soon, feel free to walk around my github. I will update this project very soon",
    technologies: ["Nextjs", "headlessCMS", "apis"],
    githubLink: "https://github.com/clonglam/staples-style-ecommerce",
    imageLink: `/images/ecommerce-staples.png`,
  },
  {
    title: "Trip Advisor",
    subtitle: "Frontend & Backend Development",
    year: "2022",
    description:
      "I will update the detail very soon, feel free to walk around my github. I will update this project very soon",
    technologies: ["React", "datocms", "apis"],
    githubLink: "https://github.com/clonglam/",
    imageLink: `/images/Coming_Soon.png`,
  },
];
