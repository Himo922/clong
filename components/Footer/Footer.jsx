import React from "react";
import styles from "../../styles/Home.module.css";

export const Footer = () => {
  return (
    <footer className="flex flex-1 py-6 b-top-1 justify-center items-center">
      <a
        href="https://github.com/clonglam/clong-web-master"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center grow"
      >
        Create and Design by CLong Lam
      </a>
    </footer>
  );
};
