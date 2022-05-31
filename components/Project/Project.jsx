import React, { useEffect, useRef, useState } from "react";
import { animations, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Section } from "../Section";
import { Container } from "../Container";
import { Project_Item } from "./Project_Item";
import { data } from "../../src/data";
import { ProjectGallery } from "./ProjectGallery";
import clsx from "clsx";
import gsap from "gsap";
import { ProjectCutOff2 } from "./projectCutOff2";
import { SelectedProject } from "../SelectedProject";
import { useParallax } from "react-scroll-parallax";
import { SkillList } from "../Skills/SkillList";
import { useWindowSize } from "../../hooks/useWindowSize";

export const Project = ({ className, styles }) => {
  const [percentages, setPercentages] = useState(0);
  const { ref, inView } = useInView();
  const { width, height } = useWindowSize();

  const { ref: parllref } = useParallax({
    speed: [200],
    translateY: [0, 500],
    scale: [0.9, 1],
    onProgressChange: (percentage) => {
      setPercentages(percentage);

      // console.log("percentage", percentage);
    },
  });

  return (
    <>
      {/* <ProjectCutOff2 /> */}
      <Section title="proejct" navIndex="project">
        <div ref={ref} id="project" className="mt-20 py-10">
          <SelectedProject />
        </div>

        <div className="w-full h-[500px] relative overflow-hidden">
          <div className="relative" ref={parllref}></div>

          <div
            style={{
              position: "absolute",
              background: `rgba(0, 0, 0, ${percentages * 5})`,
              left: "50%",
              top: "60%",
              borderRadius: "50%",
              transform: "translate(-50%,0%)",
              easing: "easeOut",
              width: percentages * width * 2,
              height: percentages * width * 2,
            }}
          ></div>
        </div>

        <SkillList
          title={`Record product demos`}
          context={` Recording is always just a click away. Snap something quick or use a
        million takes. Aperture is ready for antything.`}
          image={`/images/screen.png`}
          ido={"Record product demos"}
        />

        <SkillList
          title={`Customize UI/UX`}
          context={`With our built in editing tools and filters you’ll make any video your own. Add your own identity with a few clicks.`}
          image={`/images/screen.png`}
          ido={"cCustomize UI / UX"}
        />

        <SkillList
          title={`Customize UI/UX`}
          context={`With our built in editing tools and filters you’ll make any video your own. Add your own identity with a few clicks.`}
          image={`/images/screen.png`}
          ido={"cCustomize UI / UX"}
        />
      </Section>
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
