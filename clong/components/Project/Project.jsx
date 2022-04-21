import React, { useEffect } from "react";
import { animations, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Section } from "../Section";
import { Container } from "../Container";
import { Project_Item } from "./Project_Item";

const underline = {
  transition: {
    delay: 0.5,
    type: "spring",
    stiffness: 400,
    damping: 40,
  },
};

export const Project = ({ className }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

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
    <Container full>
      <Section
        className="mt-20 mb-16 md:mt-28 max-w-screen-[40%] sticky top-0"
        title="Project"
        description={`
    I have selected some of the favourite Projects or works that I made. If
    you feel interest feel free to check it on ${(<a> Github</a>)} and
    ${(<a> learn Togethers </a>)}`}
      >
        <Project_Item className="mt-5" />
        <Project_Item className="mt-5" odd="True" />
        <Project_Item className="mt-5" />
      </Section>
    </Container>
  );
};
