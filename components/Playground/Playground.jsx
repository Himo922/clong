import React, { useEffect, useState, useRef } from "react";
import clsx from "clsx";
import InView, { useInView } from "react-intersection-observer";
import { useWindowSize } from "../../hooks/useWindowSize";

//rmb to update the print method according to the article
//https://medium.com/@martin.crabtree/react-creating-an-interactive-canvas-component-e8e88243baf6

export const Playground = () => {
  const canvas_playground = useRef(null);
  const { width: w_width, height: w_height } = useWindowSize();

  const p = {
    x: 25,
    y: 25,
  };
  const velo = 3;
  const corner = 50;
  const rad = 20;

  const ball = {
    x: p.x,
    y: p.y,
  };

  useEffect(() => {
    const canvas = canvas_playground.current;

    let moveX = Math.cos((Math.PI / 180) * corner) * velo;
    let moveY = Math.sin((Math.PI / 180) * corner) * velo;

    function clickHandler(canvas, event) {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      console.log("x: " + x + " y: " + y);
    }

    if (canvas) {
      const ctx = canvas.getContext("2d");
      const DrawMe = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        console.log(`width:${canvas.width},height:${canvas.height}`);

        if (ball.x > canvas.width - rad || ball.x < rad) moveX = -moveX;
        if (ball.y > canvas.height - rad || ball.y < rad) moveY = -moveY;

        ball.x += moveX;
        ball.y += moveY;

        ctx.beginPath();
        ctx.fillStyle = "green";
        ctx.arc(ball.x, ball.y, rad, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
      };
      if (InView) {
        setInterval(DrawMe, 10);
        canvas.addEventListener("mousedown", function (e) {
          clickHandler(canvas, e);
        });
      }
      return () =>
        canvas.removeEventListener("mousedown", function (e) {
          clickHandler(canvas, e);
        });
    }
  }, []);

  return (
    <div>
      <div className="w-full md:float md:left ">
        <p className="text-[4rem] font-bold ">Play with Code</p>
        <p> you can also</p>
      </div>
      <canvas id="my-house" width={400} height={300} ref={canvas_playground} />
    </div>
  );
};
