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
  Works,
  Playground,
  Testimonials,
  ParallaxTest,
  SkillDisplay,
} from "../components";
import { HeroPendulum } from "../components/Hero/HeroPendulum";
import { useWindowSize } from "../hooks/useWindowSize";
import { Gallery } from "../components/Project/Gallery";
import { motion, useTransform, useElementScroll } from "framer-motion";
import { Parallax, Background } from "react-scroll-parallax";

import { useInView } from "react-intersection-observer";
import { SkillList } from "../components/Skills/SkillList";

export default function Home() {
  const { width, height } = useWindowSize();
  const handleScroll = () => setOffSetY(window.pageYOffset);

  return (
    <>
      <div className="min-h-screen w-full bg-white-900 justify-items-stretch  ">
        <Hero className="w-full" width={width} height={height} />
        <About />
        <Project />
        <SkillDisplay />
        <Contact />
      </div>
    </>
  );
}
