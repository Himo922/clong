import React, { useEffect } from "react";
import { Section } from "../Section";
import clsx from "clsx";
import { Container } from "../Container";
import { animations, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Testing_image, Hero_image } from "../../assets/Images";

export const About = ({ className, styles }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    console.log("use Effect,inView =", inView);
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 1.2,
          ease: "easeOut",
          stiffness: 400,
          damping: 40,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw", opacity: 0 });
    }
  }, [animation, inView]);

  return (
    <div
      id="about"
      className={clsx(
        "z-10 bg-blue-900 w-screen m-0 min-h-[600px] p-8 md:min-h-[800px]",
        className
      )}
      style={styles}
      ref={ref}
    >
      <Section className="" title="About" color="text-orange-700">
        <Container>
          <h3 className="mb-10">
            “World grow evolve every day, learn never stop.”
          </h3>
          <motion.div
            animate={animation}
            className={clsx(
              "flex flex-col m-0 p-0 my-15 z-10 items-center p-5",
              "md:mx-8 md:px-10 md:px-25 md:flex-row"
            )}
          >
            <div>
              <img
                src="/images/Clong_Icon.png"
                alt="Picture of the author"
                className="w-full h-full mb-5"
              />
            </div>

            <div>
              <h4 className="text-base max-w-[95%] md:text-2xl dark:text-white-700 text-black-700 md:mb-12">
                Hi, I am CLong Lam. A Software Developer and Media Designer.
              </h4>

              <h4 className="text-base max-w-[95%] md:text-2xl dark:text-white-700 text-black-700 md:mb-4">
                Currently bassed in Vancourver. Love to do experimental stuff,
                play with coding hardware.
              </h4>
              <h4 className="text-base max-w-[95%] md:text-2xl dark:text-white-700 text-black-700 md:mb-12">
                4-Year Work Experience from front-end to full-stack.
              </h4>

              <h4 className="text-base max-w-[95%] md:text-2xl dark:text-white-700 text-black-700 ">
                Wanna Know more abnout me.
              </h4>
              <h4 className="text-base max-w-[95%] md:text-2xl dark:text-white-700 text-black-700 md:mb-4">
                View my Works and projects at Github | Code Pen
              </h4>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};
