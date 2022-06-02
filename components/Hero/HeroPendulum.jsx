import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useParallax } from "react-scroll-parallax";

import useDimensions from "../../hooks/useDimensions";

var agents = [];
var agentCount = 4000;
var noiseScale = 350;
var noiseStrength = 10;
var overlayAlpha = 10;
var agentAlpha = 90;
var strokeWidth = 0.2;
var drawMode = 1;

var Agent = function (myp5) {
  this.vector = myp5.createVector(
    myp5.random(myp5.width),
    myp5.random(myp5.height)
  );
  this.vectorOld = this.vector.copy();
  this.stepSize = myp5.random(0.5, 3);
  this.isOutside = false;
  this.angle;
};

Agent.prototype.update = function (myp5, strokeWidth) {
  this.vector.x += myp5.cos(this.angle) * this.stepSize;
  this.vector.y += myp5.sin(this.angle) * this.stepSize;
  this.isOutside =
    this.vector.x < 0 ||
    this.vector.x > myp5.width ||
    this.vector.y < 0 ||
    this.vector.y > myp5.height;
  if (this.isOutside) {
    this.vector.set(myp5.random(myp5.width), myp5.random(myp5.height));
    this.vectorOld = this.vector.copy();
  }
  myp5.strokeWeight(strokeWidth * this.stepSize);
  myp5.line(this.vectorOld.x, this.vectorOld.y, this.vector.x, this.vector.y);
  this.vectorOld = this.vector.copy();
  this.isOutside = false;
};

Agent.prototype.update1 = function (
  myp5,
  noiseScale,
  noiseStrength,
  strokeWidth
) {
  this.angle =
    myp5.noise(this.vector.x / noiseScale, this.vector.y / noiseScale) *
    noiseStrength;
  this.update(myp5, strokeWidth);
};

Agent.prototype.update2 = function (
  myp5,
  noiseScale,
  noiseStrength,
  strokeWidth
) {
  this.angle =
    myp5.noise(this.vector.x / noiseScale, this.vector.y / noiseScale) * 24;
  this.angle = (this.angle - myp5.floor(this.angle)) * noiseStrength;
  this.update(myp5, strokeWidth);
};

export const HeroPendulum = ({ sketchReff, c_width, c_height }) => {
  // https://codesandbox.io/s/react-p5-forked-ri866?file=/src/index.js
  // https://codesandbox.io/s/ethblock-art-visual-algorithm-template-p5-forked-8l8x4c?file=/src/YourStyle.js
  // Will only import `react-p5` on client-side
  const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
    ssr: false,
  });

  const canvasRef = useRef(null);

  const setup = (p5, canvasParentRef) => {
    const width = c_width;
    const height = 800;
    agentCount = width / 2;

    p5.createCanvas(window.innerWidth, 800).parent(canvasParentRef);
    for (var i = 0; i < agentCount; i++) {
      agents[i] = new Agent(p5);
    }
  };

  const draw = (p5) => {
    p5.fill(255, overlayAlpha);
    p5.noStroke();
    p5.rect(0, 0, p5.width, p5.height);
    // p5.rect(0, 0, c_width, c_height);

    // Draw agents
    p5.stroke(0, agentAlpha);
    for (var i = 0; i < agentCount; i++) {
      if (drawMode === 1)
        agents[i].update1(p5, noiseScale, noiseStrength, strokeWidth);
      else agents[i].update2(p5, noiseScale, noiseStrength, strokeWidth);
    }
  };

  const [entered, setEntered] = useState(false);

  const { ref } = useParallax({
    easing: "easeOutQuad",
    translateY: [0, 1000],
    opacity: [0, 1],
    scale: [0.2, 1],
  });

  return (
    <>
      <div ref={ref}>
        <Sketch setup={setup} draw={draw} ref={canvasRef} />
      </div>
    </>
  );
};

export default HeroPendulum;
