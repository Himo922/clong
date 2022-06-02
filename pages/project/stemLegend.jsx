import React from "react";
import { projectContent } from "../../src/data";

const stemLegend = () => {
  console.log(projectContent[0]);
  console.log(projectContent[0].tags[0]);
  return (
    <div className="w-full min-h-[100vh] bg-black-900 px-5">
      {/* Project Basic Content */}
      <div className="py-8">
        <h3 className="hidden"> Project Basic Content</h3>

        <div className="">
          <div className="flex flex-end h-[20vh] justify-end flex-col">
            <p className="text-4xl ont-medium text-white-900">
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

        <p className="mt-8 text-md font-medium text-white-700 ">
          {projectContent[0].description}{" "}
        </p>

        {projectContent[0].award && (
          <div>
            <p>Award</p>
            <p className="mt-8 text-sm font-medium text-white-700 ">
              {projectContent[0].award}
            </p>
          </div>
        )}
        <button
          className="bg-white-900 rounded-md px-8 py-2 mt-5"
          href={projectContent[0].vistLink}
        >
          {" "}
          Vist{" "}
        </button>
      </div>
      {/* End of Project Basic Content */}

      {/* Challenge & Solution*/}
      <div className="py-8">
        <h3 className="hidden"> challenge and Solution</h3>
        <div>
          <p className="mt-10 text-md font-medium text-white-700 ">Challenge</p>
          <p className="mt-2 text-md font-medium text-white-700 ">
            {projectContent[0].challenge}{" "}
          </p>
        </div>

        <div>
          <p className="mt-10 text-md font-medium text-white-700 ">Solution</p>
          <p className="mt-2 text-md font-medium text-white-700 ">
            {projectContent[0].solution}{" "}
          </p>
        </div>
      </div>

      {/* Key selling points*/}
      <div className="py-8">
        <h3 className="hidden"> Keys selling points</h3>

        <div className="mt-6">
          {projectContent[0].ksp.map((item, index) => (
            <div key={`${item.title}_${index}`} className="mt-8">
              {item.ksp_Img.map((image, index) => (
                <div key={`${index}_${item.title}_img`}>
                  <img src={image} alt={`${index}_${item.title}_img`}></img>
                </div>
              ))}
              <p className="mt-10 text-md font-medium text-white-700 ">
                {item.title}
              </p>
              <p className="mt-6 text-md font-medium text-white-700 ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-8 mt-5">
        <p className="mt-10 text-md font-medium text-white-700 ">
          View other project?
        </p>
      </div>
    </div>
  );
};
export default stemLegend;
