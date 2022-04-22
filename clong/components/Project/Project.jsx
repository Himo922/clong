import React, { useEffect } from "react";
import { animations, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Section } from "../Section";
import { Container } from "../Container";
import { Project_Item } from "./Project_Item";
import clsx from "clsx";

const underline = {
  transition: {
    delay: 0.5,
    type: "spring",
    stiffness: 400,
    damping: 40,
  },
};

export const Project = ({ className, styles }) => {
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
    <div className={clsx("bg-black-500 z-20 pb-20 p-8")} style={styles}>
      <Section className="mt-15 md:mt-20" title="Project">
        <Container ref={ref} className="">
          <div className="px-5">
            <Project_Item className="" />
            <Project_Item className="mt-5" odd="True" />
            <Project_Item className="mt-5" />
          </div>
        </Container>
      </Section>
    </div>
  );
};
