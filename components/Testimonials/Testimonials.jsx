import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Parallax } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";

export const Testimonials = ({ styles, className }) => {
  const [entered, setEntered] = useState(false);

  const { ref } = useParallax({
    easing: "easeOutQuad",
    translateY: [0, -100],
    opacity: [0, 1],
    scale: [0.2, 1],
    onProgressChange: (progress) => console.log(progress),
    onEnter: () => setEntered(true),
    onExit: () => setEntered(false),
  });

  const handleScroll = () => {
    console.log(entered);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen w-screen">
      <div
        ref={ref}
        className={clsx(
          "flex justify-center items-start text-center flex-wrap px-5 py-10 min-h-screen w-full h-[500px]",
          className
        )}
        styles={styles}
      >
        <p className="text-[48px] text-center max-w-[1000px] h-full ">
          I do web development and create different element to interreact with
          users
        </p>
      </div>
    </div>
  );
};
