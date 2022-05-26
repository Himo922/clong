import React, { useEffect, useState } from "react";
import clsx from "clsx";

export const Testimonials = ({ styles, className }) => {
  const [offsetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "flex justify-center items-center text-center flex-wrap px-5 py-10 min-h-screen w-full h-[500px]",
        className
      )}
      styles={styles}
    >
      <p className="text-[48px] text-center max-w-[1000px] bg-white-500 h-full ">
        I do web development and create different element to interreact with
        users
      </p>
    </div>
  );
};
