import React, { useEffect } from "react";
import { animations, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Section } from "../Section";
import { Container } from "../Container";
import clsx from "clsx";

export const Contact = ({ className, styles }) => {
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
    <div
      id="contact"
      style={styles}
      ref={ref}
      className={clsx("pb-20 p-8 bg-blue-500")}
    >
      <Section title="Contact">
        <Container>
          <div className="px-5 pb-10">
            <h3>
              Reach me via email :
              <span>
                <a href="mailto: clong516@gmail.com" className="text-black-700">
                  Send Email
                </a>
              </span>
            </h3>
            <div>Call Me maybe</div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
