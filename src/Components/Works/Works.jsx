import React from "react";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const Works = () => {
  return (
    <div
      className="bg-[#121610] text-gray-400 pt-[55px] pb-12 lg:flex"
      id="works"
    >
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Works;
