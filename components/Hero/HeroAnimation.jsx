import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import useDimensions from "../../hooks/useDimensions";

export const HeroPendulum = ({ sketchReff }) => {
  // https://codesandbox.io/s/react-p5-forked-ri866?file=/src/index.js
  // https://codesandbox.io/s/ethblock-art-visual-algorithm-template-p5-forked-8l8x4c?file=/src/YourStyle.js
  // Will only import `react-p5` on client-side
  const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
    ssr: false,
  });

  const canvasRef = useRef(null);

  let r1 = 200;
  let r2 = 200;
  let m1 = 40;
  let m2 = 40;
  let a1 = 0;
  let a2 = 0;

  const setup = (p5, canvasParentRef) => {
    const width = window.innerWidth;
    const height = 600;

    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255, 130, 20);
    p5.stroke(0);
    p5.strokeWeight(2);

    p5.translate(p5.CENTER, 50);

    let x1 = r1 * Math.sin(a1);
    let y1 = r1 * Math.cos(a1);
    let x2 = x1 + r2 * Math.sin(a2);
    let y2 = y1 + r2 * Math.cos(a2);
    p5.line(0, 0, x1, y1);
    p5.fill(0);
    p5.line(x1, y1, x2, y2);
    p5.ellipse(x1, y1, m1, m1);
    p5.fill(0);
    p5.ellipse(x2, y2, m2, m2);
    a1 += 0.1;
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} ref={canvasRef} />
    </>
  );
};

export default HeroPendulum;

// import React, { useEffect, useRef, useState } from "react";
// import { Canvas } from "./Canvas";

// export const HeroPendulum = () => {
//   let r1 = 100;
//   let r2 = 100;
//   let m1 = 100;
//   let m2 = 100;
//   let a1 = 0;
//   let a2 = 0;

//   const draw = (ctx, frameCount) => {
//     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
//     ctx.fillStyle = "#000000";
//     ctx.beginPath();
//     ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
//     ctx.fill();

//     let x1 = r1 * Math.sin(a1);
//     let y1 = r1 * Math.cos(a1);

//     ctx.beginPath();
//     ctx.moveTo(0, 0);
//     ctx.lineTo(x1, y1);
//     // ctx.ellipse(x1, y1, m1, m1);
//   };

//   return <Canvas draw={draw} />;
// };
