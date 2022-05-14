import styles from "../styles/Home.module.css";
import Head from "next/head";

import React, { useEffect, useRef, useCallback, useState } from "react";
import {
  Hero,
  About,
  Project,
  Contact,
  Fanfare,
  NavBar,
  Footer,
} from "../components";
import { useWindowSize } from "../hooks/useWindowSize";
import { motion, useTransform, useElementScroll } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { Skills } from "../components/Skills/Skills";

export default function Home() {
  const [fanfare, setFanfare] = useState(true);
  const [main, setMain] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  return (
    <>
      <div
        className="min-h-screen w-full flex flex-col flex-1 justify-center z-10 bg-white-900
            justify-items-stretch  "
      >
        <Hero className="mb-8 p-2 min-h-screen -z-10" />
        <About
          className="w-screen"
          //styles={{ transform: `translateY(-${scrollY}px)` }}
        />
        <Project
          className="mx-4 my-8 p-2 px-10 md:px-36"
          // styles={{ transform: `translateY(-${scrollY}px)` }}
        />
        <Skills
          className="mx-4 my-8 p-2 px-10 md:px-36"
          //styles={{ transform: `translateY(-${scrollY}px)` }}
        />
        <Contact
          className="mx-4 my-8 p-2 px-10 md:px-36 "
          //styles={{ transform: `translateY(-${scrollY}px)` }}
        />
      </div>
    </>
  );
}
