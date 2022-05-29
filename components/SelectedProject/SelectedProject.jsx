import React, { useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

export const SelectedProject = () => {
  useEffect(() => {}, []);

  return (
    <div className="max-w-[1500px] p-5 relative w-full m-auto">
      <h3 className="hidden"> Selected Project </h3>
      <div>
        <p className="text-4xl font-bold md:text-[96px]">SelectedProject</p>
        <p className="text-md mb-5 md:text-[32px]">
          UI Design | Software Development
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <img
          className="w-full"
          src="/images/selectedProject.png"
          alt="Selected Project"
        ></img>
      </div>

      <div
        id="motionCircle"
        className={clsx(
          "mt-20 border-dashed rounded-full border-2 border-gray-100 w-[200px] h-[200px]",
          "absolute top-1/2 left-1/4 hover:scale-110"
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
