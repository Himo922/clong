import React, { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

export const SmoothScroll = () => {
  useEffect(() => {
    Scrollbar.init(document.querySelector("#my-scrollbar"));
  });
  return null;
};
