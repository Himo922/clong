import React, { useEffect } from "react";
import { IconsItems } from "./IconsItems";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  Icon_github,
  Icon_linkedin,
  Icon_twitter,
} from "../../../assets/Images";

export const Icons = ({ className }) => {
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
    <div className={className}>
      <div className="flex flex-row gap-5 align-center" ref={ref}>
        {LinksList.map((icon, index) => (
          <IconsItems
            {...icon}
            key={icon.name}
            custom={index}
            controls={controls}
          />
        ))}
        {/* <Icon_linkedin className="text-2xl fill-black-700 dark:fill-black-700" />
        <Icon_github className="text-2xl fill-black-700 dark:fill-black-700" />
        <Icon_twitter className="text-2xl fill-black-700 dark:fill-black-700" /> */}
      </div>
    </div>
  );
};

const LinksList = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/clong-lam-188a10233/",
    icon: <Icon_linkedin />,
  },
  {
    name: "GitHub",
    href: "https://github.com/clonglam",
    icon: <Icon_github />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ClongLam",
    icon: <Icon_twitter />,
  },
];
