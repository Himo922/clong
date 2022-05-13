import React, { useEffect } from "react";
import { IconsItems } from "./IconsItems";
import { contactItems } from "./IconsItems";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  AiOutlineCodepen,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
} from "react-icons/ai";

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
      </div>
    </div>
  );
};

const LinksList = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/clong-lam-188a10233/",
    icon: <AiFillLinkedin />,
  },
  {
    name: "GitHub",
    href: "https://github.com/clonglam",
    icon: <AiOutlineGithub />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ClongLam",
    icon: <AiOutlineTwitter />,
  },
  {
    name: "CodePen",
    href: "https://codepen.io/himo922",
    icon: <AiOutlineCodepen />,
  },
];
