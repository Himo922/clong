import React, { useEffect, useRef } from "react";
import { animations, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Section } from "../Section";
import { Container } from "../Container";
import { Project_Item } from "./Project_Item";
import { data } from "../../src/data";
import Gallery from "./Gallery";
import clsx from "clsx";
import gsap from "gsap";
import { ProjectCutOff } from "./ProjectCutOff";

export const Project = ({ className, styles }) => {
  const { ref, inView } = useInView();
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });

  return (
    <>
      <ProjectCutOff />
      <div
        className={clsx("bg-white-900 z-10 pb-20 p-8 md:min-[800px]")}
        style={styles}
        id="project"
        ref={ref}
      >
        <Section className="mt-15 md:mt-20" title="Project">
          <h3 className="md:mb-40">
            Here are the choosen project,wanna know more simply click on the
            project and view it on github.
          </h3>

          <div className="flex flex-wrap">
            <div className="flex flex-col p-5 md:p-0 md:flex-row items-start justify-evenly ">
              {data.map((project, index) => (
                <Project_Item
                  {...project}
                  key={clsx(project.title, index)}
                  custom={index}
                />
              ))}

              <div className="hidden md:block md:ml-10 self-center">
                <a
                  href="https://github.com/clonglam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3> view More</h3>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

const ProjectList = [
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

const ImageList = [
  {
    imageLink: `/images/STEM Leage_phone.png`,
  },
  {
    imageLink: `/images/STEM Leage_phone.png`,
  },
  {
    imageLink: `/images/STEM Leage_phone.png`,
  },
  {
    imageLink: `/images/STEM Leage_phone.png`,
  },
  {
    imageLink: `/images/STEM Leage_phone.png`,
  },
  {
    imageLink: `/images/STEM Leage_phone.png`,
  },
  {
    imageLink: `/images/STEM Leage_phone.png`,
  },
  {
    imageLink: `/images/STEM Leage_phone.png`,
  },
  {
    imageLink: `/images/STEM Leage_phone.png`,
  },
  {
    imageLink: `/images/STEM Leage_phone.png`,
  },
];
