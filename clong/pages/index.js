import styles from "../styles/Home.module.css";
import { Hero, About, Project, Experience, Contact } from "../components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Skills } from "../components/Skills/Skills";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex flex-col flex-1 justify-center 
      justify-items-stretch px-10 md:mx-[5%]"
    >
      <Hero className=" my-8 p-2" />
      <About className=" mx-8 p-2" />
      <Project className="mx-4 my-8 p-2" />
      <Skills className="mx-4 my-8 p-2" />
      <Contact className="mx-4 my-8 p-2 justify-self-start" />
    </div>
  );
}
