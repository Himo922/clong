import React from "react";
import { Section } from "../Section";
import clsx from "clsx";
import { Container } from "../Container";

export const About = ({ className }) => {
  return (
    <div id="#About" className={clsx("flex flex-row", className)}>
      <Container className="mr-8">
        <div className="w-[200px] h-[500px] bg-orange-700"></div>
      </Container>
      <Section
        title="About"
        description="
        Hi, I am CLong Lam. A Software Developer and Media Designer. Currently bassed in Vancourver.
        Love to do experimental stuff, play with coding & hardware.  4-Year Work Experience from front-end to full-stack. View my Works and projects at Github | Code Pen."
      ></Section>
    </div>
  );
};
