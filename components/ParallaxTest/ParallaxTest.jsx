import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Parallax, Background } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

export const ParallaxTest = ({ className, styles }) => {
  // const { ref } = useParallax({ speed: 10 });
  const [offsetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={styles}>
        <Parallax
          translateY={["0px", "-400px"]}
          scale={[0.75, 1]}
          easing="easeInQuad"
        >
          <div style={{ height: 500 }}>
            <div style={insideStyles}>Reverse direction</div>
          </div>
        </Parallax>
        <h2>| | |</h2>
        <Parallax
          translateX={["-400px", "0px"]}
          scale={[0.75, 1]}
          rotate={[-180, 0]}
          easing="easeInQuad"
        >
          <div style={{ height: 500 }}>
            <div style={insideStyles}>renderProp</div>
          </div>
        </Parallax>
      </div>
    </>
  );
};
