import React, { useEffect } from "react";
import { Section } from "../Section";
import clsx from "clsx";
import { Container } from "../Container";
import { animations, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AboutCutOff } from "./AboutCutOff";
import { Testing_image, Hero_image } from "../../assets/Images";

export const About = ({ className, styles }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log("use Effect,inView =", inView);
    if (inView) {
      // animation.start({
      //   x: 0,
      //   opacity: 1,
      //   transition: {
      //     delay: 0.2,
      //     duration: 1.2,
      //     ease: "easeOut",
      //     stiffness: 400,
      //     damping: 40,
      //   },
      // });
    }
    if (!inView) {
      // only show onetime
    }
  }, [animation, inView]);

  return (
    <>
      <AboutCutOff />
      <div
        id="about"
        className={clsx(
          "bg-white-800 w-full m-0 min-h-[600px] p-4 md:min-h-[800px] z-5",
          className
        )}
        style={styles}
        ref={ref}
      >
        <Section
          sectionClass=""
          headerClass="text-black-900"
          title="About"
          color="text-black-900"
          theme="light"
          description="World grow evolve every day, learn never stop."
        >
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
                Hi, I am CLong Lam. A Web Developer and Media Designer.
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
                View my Works and projects at{" "}
                <span>
                  <a href="https://github.com/clonglam">Github</a>
                </span>
                |{" "}
                <span>
                  <a href="https://codepen.io/himo922">Code Pen</a>
                </span>
              </h4>
            </div>
          </motion.div>
        </Section>
      </div>
    </>
  );
};
