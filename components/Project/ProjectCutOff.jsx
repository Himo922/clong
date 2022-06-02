import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "../../hooks/useWindowSize";

export const ProjectCutOff = () => {
  const sectionHeight = 4000;
  const { width, height } = useWindowSize();
  const bannerRef = useRef(null);
  const singleRefContainer = useRef(null);
  const { ref, inView } = useInView(
    { threshold: 0 },
    width > 1200 ? { rootMargin: "0px" } : { rootMargin: "50vh" }
  );
  let finalScale = 150;
  let initalScale = 500;
  let singleScale = 500;
  let singleScale_Max = 1200;

  useEffect(() => {
    const resizeGridContainer = () => {};
    const scrollInProgress = () => {
      let scaledgrid = document.querySelector("#gridContainer");
      let singleSelect = document.querySelector("#showSingle");

      // finalScale -= bannerRef.current.offsetTop / 15;

      singleScale =
        (bannerRef.current.offsetTop * 50) / bannerRef.current.offsetHeight;
      // transform: translate3d(42px, -62px, -135px);
      console.log("singleScale=", singleScale);

      scaledgrid.style.transform = "scale(" + finalScale + "%)";
      // "scale(150%)";

      singleSelect.style.transform =
        "perspective(500px) translateZ(" + singleScale + "px)";

      if (bannerRef.current) {
        console.log("scrollY:", bannerRef.current.offsetTop);
        // console.log("scrollY:", bannerRef.current.innerHeight);
      } else {
        console.log("it is nulllll");
      }

      console.log("pageYoff:", window.pageYOffset);
      // element.style.removeProperty("width");
      console.log("Iam moving111111111111111111");
    };

    if (inView) {
      console.log(" I am in view11111");
      window.addEventListener("scroll", scrollInProgress);
    }

    return () => window.removeEventListener("scroll", scrollInProgress);
  }, [inView]);

  return (
    <div>
      <div
        className="w-screen bg-orange-900 h-[600px] h-[3000px] relative py-10"
        ref={ref}
      >
        <div className="bg-orange-700 sticky top-[20%]" ref={bannerRef}>
          <div className="w-[400px] h-[300px] mx-auto overflow-hidden max-w-[1200px]">
            <div id="gridContainer" className="grid grid-cols-4 gap-10">
              <img src="/images/ecommerce-staples.png"></img>

              <div
                ref={singleRefContainer}
                id="showSingle"
                className="bg-cover bg-center"
                style={{
                  backgroundImage: "url(/images/ecommerce-staples.png)",
                }}
              ></div>

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
    </div>
  );
};
