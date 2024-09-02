import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Home = () => {
  return (
    <div>
      <div
        className="flex flex-col md:flex-row lg:flex-row gap-3 p-6 bg-[#1b1f23] "
        id="home"
      >
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
