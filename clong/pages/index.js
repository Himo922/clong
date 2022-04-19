import styles from "../styles/Home.module.css";
import React, { useEffect, useRef, useState } from "react";
import { Hero, About, Project, Experience, Contact } from "../components";
import { useWindowSize } from "../hooks/useWindowSize";
import { motion, useTransform, useElementScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Skills } from "../components/Skills/Skills";

const LINE_VARIANTS = {
  visible: { height: "75vh", transition: { duration: 2 } },
  hidden: { height: "0vh" },
};

const SnapParent = React.forwardRef(({ ...props }, ref) => (
  <div ref={ref} {...props} className="snap-parent-y-mandatory">
    {props.children}
  </div>
));

const SnapContainer = ({ children }) => {
  const windowSize = useWindowSize();
  const ref = useRef();
  const { scrollY, scrollYProgress } = useElementScroll(ref);

  const pageRange = [0, 0.15, 0.3, 0.5, 0.7, 1];
  const lengthRange = ["75vh", "45vh", "50vh", "45vh", "50vh", "100vh"];
  const calcHeight = useTransform(scrollYProgress, pageRange, lengthRange);

  const [scrollYValue, setScrollYValue] = useState(0);
  const [scrollYProgressValue, setScrollYProgressValue] = useState(0);

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    scrollY.onChange((v) => setScrollYValue(v));
    scrollYProgress.onChange((v) => setScrollYProgressValue(v));
  }, [scrollY, scrollYProgress]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          fontFamily: "monospace",
          fontWeight: 600,
          zIndex: 50,
        }}
      >
        {"height: " +
          calcHeight.get() +
          " | y: " +
          scrollYValue +
          " | percentage: " +
          (scrollYProgressValue * 100).toFixed(0) +
          "% | WindowSize h: " +
          windowSize.height +
          " w: " +
          windowSize.width +
          "   "}
        <button onClick={refreshPage}>refresh</button>
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          zIndex: 20,
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={LINE_VARIANTS}
          style={{ backgroundColor: "black", width: 3, height: calcHeight }}
        />
      </div>
      <SnapParent
        ref={ref}
        style={{
          position: "absolute",
        }}
      >
        {children}
      </SnapParent>
    </div>
  );
};

export default function Home() {
  return (
    <div className="scroll-smooth">
      <video
        className="absolute l-0 -top-20 min-w-full min-h-full z-0 object-cover m-0 p-0"
        autoPlay
        loop
        muted
      >
        <source src="/video/HeroBg.mp4" type="video/mp4" />
      </video>

      <Hero className=" my-8 p-2 min-h-screen" />
      <div
        className="min-h-screen w-full flex flex-col flex-1 justify-center 
      justify-items-stretch px-10 md:px-36 "
      >
        <About className=" mx-8 px-10 min-h-screen" />
        <Project className="mx-4 my-8 p-2" />
        <Skills className="mx-4 my-8 p-2" />
        <Contact className="mx-4 my-8 p-2 justify-self-start" />
      </div>
    </div>
  );
}
