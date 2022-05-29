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

        {/* <SkillList
          title={`Record product demos`}
          context={` Recording is always just a click away. Snap something quick or use a
        million takes. Aperture is ready for antything.`}
          image={`/images/screen.png`}
          ido={"Record product demos"}
        />

        <SkillList
          title={`Customize UI / UX`}
          context={`With our built in editing tools and filters you’ll make any video your own. Add your own identity with a few clicks.`}
          image={`/images/screen.png`}
          ido={"cCustomize UI / UX"}
        />

        <SkillList
          title={`Customize UI / UX`}
          context={`With our built in editing tools and filters you’ll make any video your own. Add your own identity with a few clicks.`}
          image={`/images/screen.png`}
          ido={"cCustomize UI / UX"}
        /> */}
        {/* <ProjectGallery /> */}

        <Contact className="mx-4 my-8 p-2 px-10 md:px-36 " />
      </div>
    </>
  );
}
