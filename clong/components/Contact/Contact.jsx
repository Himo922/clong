import React, { useEffect } from "react";
import { animations, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Section } from "../Section";
import { Container } from "../Container";
import clsx from "clsx";
const underline = {
  transition: {
    delay: 0.5,
    type: "spring",
    stiffness: 400,
    damping: 40,
  },
};

export const Contact = ({ className }) => {
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
    <Section
      className={clsx("mt-20 mb-80 md:mt-28 max-w-screen-[40%] ", className)}
      title="Contact"
      description={"Just Contact me and REach me "}
    >
      <Container>Call Me maybe~</Container>
    </Section>
  );
};
