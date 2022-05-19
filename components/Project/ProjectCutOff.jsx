import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

export const ProjectCutOff = () => {
  const { ref, inView } = useInView();
  const boxRef = useRef();

  useEffect(() => {
    gsap.to(boxRef.current, { rotation: "+=360" });
  });

  return (
    <div>
      <div className="box bg-orange-700 h-[50px] w-[50px]" ref={boxRef}>
        Hello
      </div>
      <div className="w-screen bg-black-900 max-h-[400px]">
        <div className=" bg-orange-900 h-[600px] h-[800px]  ">
          <div className=" bg-orange-700 h-[400px] grid grid-cols-4 gap-3 sticky top-0 ">
            <img src="/images/ecommerce-staples.png"></img>
            <img src="/images/ecommerce-staples.png"></img>
            <img src="/images/ecommerce-staples.png"></img>
            <img src="/images/ecommerce-staples.png"></img>
            <img src="/images/ecommerce-staples.png"></img>
            <img src="/images/ecommerce-staples.png"></img>
            <img src="/images/ecommerce-staples.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
