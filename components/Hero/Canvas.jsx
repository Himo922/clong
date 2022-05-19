import React, { useEffect, useRef } from "react";

export const Canvas = ({ draw, ...rest }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = 600;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${600}px`;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    //Our first draw
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas className="" ref={canvasRef} {...rest} id="canvas1" />;
};
