import React, { useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

export const SelectedProject = () => {
  // useEffect(() => {
  //   onmousemove = function (e) {
  //     const infoCircle = document.querySelector("#motionCircle");
  //     infoCircle.style.left = `${e.clientX}px`;
  //     infoCircle.style.top = `${e.clientY}px`;
  //     console.log("mouse location:", e.clientX, e.clientY);
  //   };
  // }, []);

  return (
    <div className="max-w-[1500px] p-5 relative w-full m-auto md:px-10 transition-all">
      <h3 className="hidden"> Selected Project </h3>
      <div>
        <p className="text-4xl font-bold md:text-[64px] leading-[3rem] md:py-3 ">
          SelectedProject
        </p>
        <p className="text-md mb-5 md:text-[28px] leading-[3rem] md:py-3">
          UI Design | Software Development
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <Link href="/project/stem" passHref>
          <img
            className="w-full px-8 hover:scale-110 transition-all duration-300 cursor-pointer"
            src="/images/selectedProject.png"
            alt="Selected Project"
          ></img>
        </Link>
      </div>

      <div
        id="motionCircle"
        className={clsx(
          "mt-20 border-dashed rounded-full border-2 border-gray-100 w-[200px] h-[200px]",
          "absolute top-1/2 left-1/4 -translate-x-[600px]"
        )}
      >
        <button>
          <Link href="/project/stem" passHref>
            <p className="text-center absolute top-1/2 left-1/4">{`Other Project ->`}</p>
          </Link>
        </button>
      </div>
    </div>
  );
};
