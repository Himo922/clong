import React, { useEffect } from "react";
import { Section } from "../Section";
import { Container } from "../Container";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaRaspberryPi, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiDjango, SiMongodb, SiArduino } from "react-icons/si";

import { SkillsItems } from "./SkillsItems";

export const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title="Skills"
      description="Passion to Learn. world grow and evolve every day, learn never stop."
    >
      <Container>
        <div
          className="max-w-md mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6"
          ref={ref}
        >
          {skills.map((skill, index) => (
            <SkillsItems
              {...skill}
              key={skill.name}
              custom={index}
              controls={controls}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

const skills = [
  {
    name: "React",
    href: "React.com",
    icon: <FaReact />,
  },
  {
    name: "Node",
    href: "Python.com",
    icon: <FaNodeJs />,
  },
  {
    name: "Django",
    href: "Django.com",
    icon: <SiDjango />,
  },
  {
    name: "Mongodb",
    href: "Mongodb.com",
    icon: <SiMongodb />,
  },
  {
    name: "Rpi",
    href: "Rpi.com",
    icon: <FaRaspberryPi />,
  },
  {
    name: "Arduino",
    href: "Arduino.com",
    icon: <SiArduino />,
  },
];
