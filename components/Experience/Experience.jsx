import React, { useEffect, useMemo } from "react";
import clsx from "clsx";
import { useAnimation, motion } from "framer-motion";
import { Section } from "../Section";
import { PWork } from "./PWork";
import { useInView } from "react-intersection-observer";

export const Experience = ({ className }) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const experience = useMemo(() => [
    {
      title: "React Native Participant",
      place: "N17R Incubator, Almaty",
      date: "Jun 2018 - Aug 2018",
    },
    {
      title: "SWE Intern",
      place: "Yandex, Moscow",
      date: "Jun 2019 - Aug 2019",
    },
    {
      title: "STEP Intern",
      place: "Google, Zurich",
      date: "covid19",
      cancelled: true,
    },
    {
      title: "Ethereum Foundation",
      place: "Blockchain Intern, Remote",
      date: "Jun 2020 - Aug 2020",
    },
    {
      title: "Frontend Engineer",
      place: "alabs.team, Almaty",
      date: `Jan 2021 - May 2021`,
    },
    {
      title: "SWE Intern",
      place: "Citadel, Hong Kong",
      date: "May 2021 - Aug 2021",
    },
  ]);
  return (
    <Section
      id="#Experience"
      className="mt-20 mb-16 md:mt-28"
      title={"experience.title"}
      description={"experience.description"}
    >
      <div className="mt-14">
        <div className="flex justify-between max-w-screen-sm" ref={ref}>
          <>
            <div>
              {experience.slice(0, 3).map((item, i) => (
                <PWork
                  {...item}
                  key={i}
                  first={i === 0}
                  last={i === 2}
                  controls={controls}
                  custom={i}
                />
              ))}
            </div>
            <div>
              {experience.slice(3).map((item, i) => (
                <PWork
                  {...item}
                  key={i}
                  first={i === 0}
                  last={i === 2}
                  controls={controls}
                  custom={i}
                />
              ))}
            </div>
          </>
          {/*       
            <div>
              {experience.map((item, i) => (
                <Item
                  {...item}
                  key={i}
                  first={i === 0}
                  controls={controls}
                  last={i === experience.length - 1}
                  custom={i}
                />
              ))}
            </div> */}
        </div>
      </div>
    </Section>
  );
};
