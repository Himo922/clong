import styles from "../styles/Home.module.css";
import React, { useEffect, useRef, useState } from "react";
import {
  Hero,
  About,
  Project,
  Experience,
  Contact,
  Fanfare,
} from "../components";
import { useWindowSize } from "../hooks/useWindowSize";
import { motion, useTransform, useElementScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Skills } from "../components/Skills/Skills";

export default function Home() {
  const [fanfare, setFanfare] = useState(true);
  const [main, setMain] = useState(false);

  useEffect(() => {
    const ids = [
      setTimeout(() => setFanfare(false), 4800),
      setTimeout(() => setMain(true), 5700),
    ];
    return () => ids.forEach((id) => clearTimeout(id));
  }, [setFanfare]);
  return (
    <>
      <Fanfare fanfare={fanfare} />
      <motion.div
        className="mainContact scroll-smooth"
        variants={{
          initial: {
            opacity: 0,
            display: "none",
          },
          visible: {
            opacity: 1,
            display: "block",
          },
        }}
        initial="initial"
        animate={main ? "visible" : "initial"}
        transition={{
          duration: 1.0,
        }}
      >
        <Hero className=" mb-8 p-2 min-h-screen " />
        <div
          className="min-h-screen w-full flex flex-col flex-1 justify-center 
        justify-items-stretch px-10 md:px-36 "
        >
          <About className=" mx-8 px-10 my-10 min-h-screen" />
          <Project className="mx-4 my-8 p-2" />
          <Skills className="mx-4 my-8 p-2" />
          <Contact className="mx-4 my-8 p-2 justify-self-start" />
        </div>
      </motion.div>
    </>
  );
}
