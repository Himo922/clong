import React, { useEffect } from "react";
import { animations, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Section } from "../Section";
import { Container } from "../Container";
import { Project_Item } from "./Project_Item";
import clsx from "clsx";

export const Project = ({ className, styles }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const controls = useAnimation();

  useEffect(() => {
    console.log("use Effect,inView =", inView);
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.1,
          duration: 1,
          ease: "easeOut",
          stiffness: 400,
          damping: 40,
        },
      });
    }
  }, [animation, inView]);

  return (
    <div
      className={clsx("bg-black-500 z-10 pb-20 p-8 md:min-h-screen")}
      style={styles}
      id="project"
      ref={ref}
    >
      <Section className="mt-15 md:mt-20" title="Project">
        <Container className="">
          <h3 className="md:mb-40">
            Here are the choosen project,wanna know more simply click on the
            project and view it on github.
          </h3>
          <div className="flex flex-col p-5 md:p-0 md:flex-row items-start justify-evenly ">
            {ProjectList.map((project, index) => (
              <Project_Item
                {...project}
                key={clsx(project.title, index)}
                custom={index}
                controls={controls}
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
        </Container>
      </Section>
    </div>
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
    title: "Cryptoverse nft",
    subtitle: "Frontend & Backend Development",
    year: "2022",
    description:
      "I will update the detail very soon, feel free to walk around my github. I will update this project very soon",
    technologies: ["React", "nodejs", "apis"],
    githubLink: "https://github.com/clonglam/",
    imageLink: `/images/Coming_Soon.png`,
  },
  {
    title: "e commerce",
    subtitle: "Frontend & Backend Develop",
    year: "2022",
    description:
      "I will update the detail very soon, feel free to walk around my github. I will update this project very soon",
    technologies: ["React", "nodejs", "apis"],
    githubLink: "https://github.com/clonglam/",
    imageLink: `/images/Coming_Soon.png`,
  },
];
