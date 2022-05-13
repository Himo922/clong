import React, { useEffect } from "react";
import { animations, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ContactItems } from "./ContactItems";
import { Section } from "../Section";
import { Container } from "../Container";
import clsx from "clsx";
import { FaEnvelope } from "react-icons/fa";

import {
  AiOutlineCodepen,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";

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
            <h2 className="mb-7">
              Currently available for Hire, feel free to contact me via email.
            </h2>
            <div className="flex flex-col gap-5 justify-start" ref={ref}>
              {LinksList.map((item, index) => (
                <ContactItems
                  {...item}
                  key={item.name}
                  custom={index}
                  controls={animation}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

const LinksList = [
  {
    name: "Email",
    href: "mailto: clong516@gmail.com",
    icon: <FaEnvelope />,
    comment: "Contact me via Email",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/clong-lam-188a10233/",
    icon: <AiFillLinkedin />,
    comment: "Let's connect on LinkedIn",
  },
  {
    name: "GitHub",
    href: "https://github.com/clonglam",
    icon: <AiOutlineGithub />,
    comment: "Follow for open-source projects~ ",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ClongLam",
    icon: <AiOutlineTwitter />,
    comment:
      "Follow for web design & development articles, opinions, and links",
  },
];
