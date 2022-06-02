import React, { useRef, useCallback, useState, useEffect } from "react";
import { Section } from "../Section";
import { SkillList } from "../Skills/SkillList";

import { useTheme } from "next-themes";

export const SkillDisplay = () => {
  const skillSectionRef = useRef();
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (skillSectionRef && skillSectionRef.current) {
      if (skillSectionRef.current.getClientRects()[0].y < 130) {
        setTheme("dark");
        console.log("!!!!!!!!!!!!!!!!!!!!! large");
      } else {
        setTheme("light");
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => changeTheme());
    }
    return window.removeEventListener("scroll", () => changeTheme());
  }, []);
  return (
    <Section title="skillSection">
      <div ref={skillSectionRef}>
        <SkillList
          title={`Develop Web Application`}
          context={`Using React frameware to create different type of web application, included controlling dashboard, 
        e-commerce system, actors gallerys etc. I mainly used reactjs & AWS .`}
          image={`/images/screen.png`}
          link={`/prioject/filter:webapp`}
          ido={"Record product demos"}
        />

        <SkillList
          title={`Game Develop `}
          context={`using C# or JavaScript to create Game or Mini Game. I have created games for education use and
        for fun. I also use different technology to give the game favor, like using depth tracking cameras.
        `}
          image={`/images/oceanWorldCover.png`}
          ido={"cCustomize UI / UX"}
        />

        <SkillList
          title={`Create Art Creation `}
          context={`Using p5js or javascript to cerate art pieces for NFT or visulaize the data.`}
          video={`/images/particleflow.mp4`}
          ido={"cCustomize UI / UX"}
        />
        <div className="py-5 bg-black-900"></div>
      </div>
    </Section>
  );
};
