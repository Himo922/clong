import React, { Component, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import _ from "lodash";

export const Tds = () => {
  const { ref, inView } = useInView();
  const rows = 9;
  const cols = 16;
  var boxArray = [];
  var colorslist = [
    "#636366",
    "#636366",
    "#64D2FF",
    "#32D74B",
    "#FFD60A",
    "#FF9F0A",
    "#ff453a",
  ];

  const handleClick = (i, j) => {
    console.log(`buttone (${i},${j}) is clicked`);

    // boxArray[i][j].dataset.colorI = 6;

    infect(i, j, 6, 2, 3);
  };

  function infectConcer(i, j, colorI, distance) {
    for (let x = 0; x < distance; x++) {
      for (let y = 0; y < distance; y++) {
        if (!isMargin(i - x, j - y)) {
          boxArray[i - x][j - y].dataset.colorI = colorI; //Left UP
        }
        if (!isMargin(i + x, j - y)) {
          boxArray[i + x][j - y].dataset.colorI = colorI; //Right UP
        }
        if (!isMargin(i + x, j + y)) {
          boxArray[i + x][j + y].dataset.colorI = colorI; //Right Bootom
        }
        if (!isMargin(i - x, j + y)) {
          boxArray[i - x][j + y].dataset.colorI = colorI; //Left Bottom
        }
      }
    }
    // if (!isMargin(i - distance, j + distance)) {
    //   boxArray[i - distance][j + distance].dataset.colorI = colorI; //Right-UP
    // }
  }

  function infect(i, j, colorI, cur_distance, distance) {
    if (cur_distance < distance) {
      console.log(
        `ismargin:${isMargin(i - cur_distance, j)} dataset:${
          boxArray[i - cur_distance][j].dataset.colorI
        }`
      );

      if (
        !isMargin(i - cur_distance, j) &&
        boxArray[i - cur_distance][j].dataset.colorI != 0
      ) {
        boxArray[i - cur_distance][j].dataset.colorI = colorI; //UP
      }

      if (
        !isMargin(i + cur_distance, j) &&
        boxArray[i + cur_distance][j].dataset.colorI != 0
      ) {
        boxArray[i + cur_distance][j].dataset.colorI = colorI; //DOWN
      }

      if (
        !isMargin(i, j - cur_distance) &&
        boxArray[i][j - cur_distance].dataset.colorI != 0
      ) {
        boxArray[i][j - cur_distance].dataset.colorI = colorI; //LEFT
      }

      if (
        !isMargin(i, j + cur_distance) &&
        boxArray[i][j + cur_distance].dataset.colorI != 0
      ) {
        boxArray[i][j + cur_distance].dataset.colorI = colorI; //Right
      }
      cur_distance++;
      //   infectConcer(i, j, colorI, cur_distance), 300;
      //   setTimeout(function () {
      //     infect(i, j, colorI, cur_distance, distance);
      //   }, 300);
    }
  }

  function isMargin(i, j) {
    if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1) {
      console.log(`it is border ${i} : ${j}`);
      return true;
    } else {
      return false;
      //   console.log(`XXXX ${i} : ${j}`);
    }
  }

  const getColor = (c_index) => {
    let color = "white";
    if (c_index == "6") {
      color = "orange";
    }
    if (c_index == "5") {
      color = "rose";
    }
    return `bg-${color}-900`;
  };

  const createbox = (i, j) => {
    const boxElement = document.createElement("div");
    boxElement.classList.add("colorBox");
    boxElement.dataset.colorI = 0;
    // boxElement.classList.add(`${getColor(boxElement.dataset.colorI)}`);

    boxElement.onclick = () => handleClick(i, j);
    return boxElement;
  };

  function updateColor(i, j) {
    if (boxArray[i][j].dataset.colorI >= 0) {
      boxArray[i][j].style.backgroundColor =
        colorslist[parseInt(boxArray[i][j].dataset.colorI)];

      parseInt(boxArray[i][j].dataset.colorI) - 2 < 0
        ? (boxArray[i][j].dataset.color = 0)
        : (boxArray[i][j].dataset.colorI =
            parseInt(boxArray[i][j].dataset.colorI) - 2);

      //   console.log(`dataset colo =${boxArray[i][j].dataset.colorI}`);
    }
    // console.log(boxArray[i][j]);
  }

  useEffect(() => {
    const boxContainer = document.getElementById("color-box-container");
    boxContainer.style.setProperty("--grid-rows", rows);
    boxContainer.style.setProperty("--grid-cols", cols);
    for (let i = 0; i < rows; i++) {
      boxArray.push([]);
      boxArray[i].push(new Array(cols));
      for (let j = 0; j < cols; j++) {
        let BoxElement = createbox(i, j);
        boxArray[i][j] = BoxElement;

        boxContainer.appendChild(BoxElement);
      }
    }

    const interval = setInterval(() => {
      if (boxArray.length > 0)
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            updateColor(i, j);
          }
        }
      //   console.log("I am Counting");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div
        ref={ref}
        className="w-full h-full p-5 gap-4 h-[70vh]"
        id="color-box-container"
      ></div>
    </div>
  );
};
