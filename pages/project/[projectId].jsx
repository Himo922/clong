import { useRouter } from "next/router";
import React, { useState } from "react";
import { projectContent } from "../../src/data";
import Link from "next/link";
import clsx from "clsx";
import { useTheme } from "next-themes";

function ProjectDetail() {
  const router = useRouter();
  const projectID = router.query.projectID;
  const { theme, setTheme } = useTheme();

  setTheme("dark");

  // projectContent.filter((project, index) => {
  //   project.title === "projectName" ? setProjectId(index) : setProjectId(null);
  // });

  // async function fetchProjectContent() {
  //   console.log('calling');
  //   const result = await ()=>{projectContent[0]

  //   };
  //   console.log(result);
  //   // expected output: "resolved"
  // }

  return (
    <>
      <div className="w-full bg-black-900">
        <div className="w-full min-h-[100vh] bg-black-900 px-5 py-10 mt-[60px] mx-auto max-w-[1500px] px-5 ">
          {/* Project Basic Content */}
          <div className="">
            <h3 className="hidden"> Project Basic Content</h3>

            <div className="">
              <div
                className={clsx(
                  "flex flex-end h-[20vh] justify-end flex-col",
                  "md:justify-start"
                )}
              >
                <p className="text-4xl font-bold text-white-900">
                  {projectContent[0].title}
                </p>
                <p className="text-sm font-light text-white-700">
                  {projectContent[0].year}
                </p>
              </div>

              <div className="mt-8">
                {projectContent[0].tags.map((item, index) => (
                  <p
                    key={`${projectContent[0]}_tag_${index}`}
                    className="text-sm font-light text-white-700"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <img
                src={projectContent[0].coverImg}
                alt={`${projectContent[0].title} Cover Image`}
              ></img>
            </div>

            <div className="px-2 md:px-8">
              <p className="mt-8 text-md font-medium text-white-700 max-w-[50ch] md:max-w-[80ch] md:text-lg ">
                {projectContent[0].description}{" "}
              </p>

              {projectContent[0].award && (
                <div>
                  <p>Award</p>
                  <p className="mt-8 text-sm font-medium text-white-700 px-2 md:px-5">
                    {projectContent[0].award}
                  </p>
                </div>
              )}
              <button className="bg-white-900 rounded-md px-8 py-2 mt-5 text-black-900">
                <Link href={projectContent[0].vistLink}> Vist </Link>
              </button>
            </div>
          </div>
          {/* End of Project Basic Content */}

          {/* Challenge & Solution*/}
          <div className="py-8 px-5 md:px-8">
            <h3 className="hidden"> challenge and Solution</h3>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <p className="mt-10 text-md font-bold text-white-700 md:text-2xl ">
                  Challenge
                </p>
                <p className="mt-2 text-md font-medium text-white-700 max-w-[50ch] md:max-w-[50ch]">
                  {projectContent[0].challenge}{" "}
                </p>
              </div>

              <div>
                <p className="mt-10 text-md font-bold text-white-700  md:text-2xl">
                  Solution
                </p>
                <p className="mt-2 text-md font-medium text-white-700 max-w-[50ch] md:max-w-[50ch] ">
                  {projectContent[0].solution}{" "}
                </p>
              </div>
            </div>
          </div>

          {/* Key selling points*/}
          <div className="py-8 px-5 md:px-8">
            <h3 className="hidden"> Keys selling points</h3>

            <div className="mt-6 py-8">
              {projectContent[0].ksp.map((item, index) => (
                <div key={`${item.title}_${index}`} className="mt-8 py-10">
                  {item.ksp_Img.map((image, index) => (
                    <div key={`${index}_${item.title}_img`}>
                      <img src={image} alt={`${index}_${item.title}_img`}></img>
                    </div>
                  ))}
                  <p className="mt-10 text-lg font-bold md:text-xl text-white-700 md:text-2xl ">
                    {item.title}
                  </p>
                  <p className="mt-6 text-md font-medium text-white-700 max-w-[80ch]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="py-8 mt-5 mb-10 px-5 md:px-8 ">
            <Link href="/project" passHref>
              <p className="mt-10 text-md font-medium text-white-700 hover:scale-105 transition-all pointer">{` View other project? -> `}</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetail;
