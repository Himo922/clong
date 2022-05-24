import React, { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import _ from "lodash";
import { useWindowSize } from "../../hooks/useWindowSize";

import throttle from "lodash.throttle";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import useOnScreen from "../../hooks/useOnScreen";

const images = [
  {
    src: "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];
function GalleryItem2({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      updateActiveImage(index);
    }
  }, [inView, index]);

  return (
    <div
      className={clsx("gallery-item-wrapper ", {
        "is-reveal": inView,
      })}
      id={`scroll_${index}`}
      ref={ref}
    >
      <div></div>
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

export function ProjectGallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);
  const gallery_ref = useRef(null);
  const { ref, inView } = useInView();
  const { width, height } = useWindowSize();
  const [scrollDir, setScrollDir] = useState("scrolling down");

  const ScrollHandler = () => {
    // do something
    console.log("scrolled");
  };
  const throttledCount = _.throttle(ScrollHandler, 1000);

  useEffect(() => {
    const threshold = 0;
    let galleryRef = gallery_ref.current;
    let lastScrollX = galleryRef.pageXOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollX = galleryRef.pageXOffset;

      if (Math.abs(scrollX - lastScrollX) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(
        scrollX > lastScrollX ? "scrolling Left" : "scrolling Right"
      );
      lastScrollX = scrollX > 0 ? scrollX : 0;
      ticking = false;
    };

    const scrollHandler = () => {
      let ProjectSection = document.querySelector("#ProjectSection");
      let test = document.querySelector("#projectGalSticky_cont");
      var scrolled = ProjectSection.offsetTop - test.offsetTop;
      gallery_ref.current.style.transform = `translateX(${scrolled}px)`;
      console.log("ProjectSection:", ProjectSection.offsetTop);
      console.log("scrollY:", test.offsetTop);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollDir]);

  //----------------------------

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section
      data-scroll-section
      className="w-full h-[300vh] "
      id="ProjectSection"
    >
      <div
        className="py-10 px-10 items-center bg-white sticky  top-10"
        id="projectGalSticky_cont"
      >
        <h3 className="hidden">selected-Project</h3>
        <p className="text-[96px] font-bold text-[#1d1d1f] ">Project</p>
        <p className="text-[48px] font-medium text-[#1d1d1f] ">
          <span>COOL</span> project
        </p>

        <div
          id="scrollingGallery"
          className="section-wrapper gallery-wrap w-[80vw]"
          ref={ref}
        >
          <div className="w-screen overflow-hidden h-[80vh] p-0 mt-10">
            <div className="gallery-counter">
              <span>{activeImage}</span>
              <span className="divider" />
              <span>{images.length}</span>
            </div>
            <div className="gallery h-[80vh]" ref={gallery_ref}>
              {images.map((image, index) => (
                <GalleryItem2
                  key={`${image.title}_${index}`}
                  index={index}
                  {...image}
                  updateActiveImage={handleUpdateActiveImage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
