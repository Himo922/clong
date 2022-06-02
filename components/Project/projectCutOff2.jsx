import React, { useEffect, useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import { useWindowSize } from "../../hooks/useWindowSize";

export const ProjectCutOff2 = () => {
  const sectionHeight = 4000;
  const { width, height } = useWindowSize();

  const bannerRef = useRef(null);
  const stickyContaier = useRef(null);
  const singleRefContainer = useRef(null);
  const { ref, inView } = useInView(
    { threshold: 0 },
    width > 1200 ? { rootMargin: "0px" } : { rootMargin: "50vh" }
  );
  let clippingContainerWidth = width;
  let finalScale = 150;
  let initalScale = 500;
  let singleScale = 500;
  let singleScale_Max = 1200;
  let scrollRatio = 0;

  useEffect(() => {
    const updateScrollRatio = () => {
      scrollRatio =
        bannerRef.current.offsetTop /
        (stickyContaier.current.offsetHeight - 0.8 * height);

      // console.log(
      //   `scrollRatio=${scrollRatio} ,offtop=${bannerRef.current.offsetTop} ,offsetHeight=${bannerRef.current.offsetHeight},,container=${stickyContaier.current.offsetHeight}`
      // );
    };

    const scrollitems = () => {
      let scrollItems = document.querySelectorAll(".pco-scroll");
      if (scrollItems) {
        scrollItems.forEach((element, index) => {
          if (element.dataset.direction == "left") {
            element.style.transform = "translateX(" + scrollRatio * 20 + "%)";
          } else {
            element.style.transform =
              "translateX(" + (1 - scrollRatio) * 20 + "%)";
          }
        });
      }
    };

    const scaleShowItem = () => {
      let scaleItem = document.querySelector("#img-pco-row-1");
      let container = document.querySelector("#pco-row-1");

      if (scaleItem && scaleItem.style) {
        scaleItem.style.height = `${(1 - scrollRatio) * 40 + 40}vh`;
        scaleItem.style.width = "auto";
      }
      if (container && container.style) {
        container.style.width = `${scaleItem.width}px`;
        // console.log(
        //   `container:${container.style.width}  item:${scaleItem.width}`
        // );
      }
    };

    const scrollInProgress = () => {
      if (width > 1200) {
        updateScrollRatio();
        // //resizeClippingContainer();
        // resizeGriditems();
        scrollitems();
        scaleShowItem();
      }
      // moveShowItem();
    };

    if (inView) {
      window.addEventListener("scroll", scrollInProgress);
    }

    return () => window.removeEventListener("scroll", scrollInProgress);
  }, [inView]);

  const { ref: parllref } = useParallax({
    speed: [10],
    translateY: [-10, 0],
    scale: [0.9, 1],
    opacity: [0.9, 1],
    // onProgressChange: (percentage) => {
    //   setPercentages(percentage);
    // },
  });

  return (
    <div ref={ref}>
      <div ref={parllref}>
        {width <= 1200 && (
          <div>
            <img
              src="/images/project-grid-full.png/"
              alt="projects-image"
              className="h-[400px] w-auto object-cover"
            ></img>
          </div>
        )}

        {width > 1200 && (
          <div
            className="w-screen  h-[600px] h-[200vh]  relative -mb-5"
            ref={stickyContaier}
          >
            <div
              className=" sticky top-[10%] h-[80vh] w-screen"
              ref={bannerRef}
            >
              <div className="project-grid-clipping-container overflow-hidden h-[80vh] ">
                <div className="mx-auto mb-10 p-0" id="pco-row-1">
                  <img
                    id="img-pco-row-1"
                    src="/images/project-grid-1.png/"
                    alt="scrollinmg image"
                    data-direction="left"
                    className=" pco-scroll object-cover"
                  ></img>
                </div>

                <div className=" mx-auto m-0 p-0 " id="pco-row-2">
                  <img
                    src="/images/project-grid-2.png/"
                    alt="scrollinmg image-2"
                    className="pco-scroll h-[40vh] object-none"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
