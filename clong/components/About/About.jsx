import React from "react";
import { Section } from "../Section";
import clsx from "clsx";
import { Container } from "../Container";

export const About = ({ className }) => {
  return (
    <Container full>
      <div id="#About" className={clsx("flex flex-row mx-10", className)}>
        <div className="w-[200px] h-[500px] bg-orange-700"></div>

        <Section
          className="ml-16"
          title="About"
          description="
        Hi, I am CLong Lam. A Software Developer and Media Designer. Currently bassed in Vancourver.
        Love to do experimental stuff, play with coding & hardware.  4-Year Work Experience from front-end to full-stack. View my Works and projects at Github | Code Pen."
        ></Section>
      </div>
    </Container>
  );
};
