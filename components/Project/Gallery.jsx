import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import { data, projects_grid } from "../../src/data";

import clsx from "clsx";

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  return (
    <div className="h-[300px] bg-gray-500 rounded-lg">
      <h1></h1>
    </div>
  );
}

export function Gallery() {
  const ref = useRef(null);
  const [active, setActive] = useState(-1); // I'm using -1 to indicate no active cards

  const getGridSpan = (index) => {
    const span = [9, 3, 7, 3, 2];
    return `md:col-span-${span[index]}`;
  };

  return (
    <section
      data-scroll-section
      className="section-wrapper gallery-wrap max-w-[1600px] w-full mt-10 bg-[#fbfbfd] md:mt-15 py-5"
    >
      <p className="text-[96px] font-bold text-[#1d1d1f] mb-10 mt-20">
        {" "}
        Selected Project{" "}
      </p>
      <div className="gallery-container mx-auto w-full " ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full px-5 mx-auto ">
          {projects_grid.map((image, index) => (
            <div
              className={clsx(
                "bg-no-repeat bg-center bg-cover h-[40vh]",
                "bg-gray-500 rounded-lg",
                "transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 ",
                getGridSpan(index)
              )}
              onMouseOver={() => {
                setActive(index);
              }}
              onMouseOut={() => {
                setActive(-1);
              }}
              key={` ${index}`}
              style={{
                backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.5)) ,url(${image.imageLink})`,
              }}
            >
              <div className="py-10 px-4">
                <h1 className="text-[4rem] wrap text-white-900 font-bold">
                  {image.type}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
