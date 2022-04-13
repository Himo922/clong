import React from "react";

import { Logo_github, Logo_linkedin, Logo_twitter } from "../../assets/Images";
const SvgLogos = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex flex-row gap-5 align-center ">
        <Logo_linkedin className="text-2xl fill-blue-700" />
        <Logo_github className="text-2xl fill-blue-700" />
        <Logo_twitter className="text-2xl fill-blue-700" />
      </div>
    </div>
  );
};
export { SvgLogos };
