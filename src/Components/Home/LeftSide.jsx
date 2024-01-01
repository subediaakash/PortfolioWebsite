import React from "react";
import images from "../../assets";

const LeftSide = () => {
  return (
    <div className="bg-[#121610] lg:w-1/3 lg:h-full">
      <div className="container text-white p-5 flex flex-col justify-center items-center gap-1">
        <div className="imageContainer ">
          <img src={images[0]} width={"300px"} className="rounded-full" />
        </div>
        <div className="discription flex flex-col gap-2">
          <p className="font-semibold text-xl">Aakash Subedi</p>
          <p className="text-slate-400">Country : Nepal </p>
          <p className="text-slate-400">Education : B-tech</p>
          <p className="text-slate-400">University : Jain University</p>
          <div className="flex justify-center  items-center ">
            {" "}
            <button className="mt-3 border border-white p-2 font-semibold bg-[#444444] w-24">
              RESUME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
