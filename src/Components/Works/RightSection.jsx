import React from "react";
import { FaCodeBranch } from "react-icons/fa";

const RightSection = () => {
  return (
    <div className="RightSection pt-5">
      <div className="flex flex-col gap-2 ">
        <div className="topsection pl-px-4">
          <div className="works relative text-white">WORKS</div>
          <div className="absolute h-[3.5px] w-[100px] bg-slate-500"></div>
        </div>
        <div
          className="repocontainer flex flex-col justify-center items-center gap-5
        "
        >
          <div className="repository1 p-4 border border-solid border-gray-500 flex lg:flex-row lg:gap-[250px] flex-col justify-center items-center gap-4">
            <div className="flex flex-col gap-3">
              <div className="heading flex gap-4">
                <div className="text-blue-600 text-xl font-semibold">
                  PORTFOLIO WEBSITE
                </div>
                <div>
                  <button className="border border-solid border-gray-500 px-2 rounded-md">
                    Public
                  </button>
                </div>
              </div>
              <div className="Discription">
                <p>This is my official portfolio website .</p>
              </div>
              <div className="language flex gap-2 items-center">
                <p className="w-4 h-4 bg-yellow-300 rounded-sm"></p>
                <p>Javascript</p>
                <p>Created on : 1 Jan 2024</p>
              </div>
            </div>
            <div className="code flex items-center gap-3 border border-solid border-gray-800 bg-slate-300 p-1 rounded-sm">
              <div className="font-semibold text-black"> CODE </div>
              <div className="text-black">
                <FaCodeBranch />
              </div>
            </div>
          </div>
          {/* {another work } */}
          <div className="repository1 p-4 border border-solid border-gray-500 flex lg:flex-row lg:gap-[250px] flex-col justify-center items-center gap-4">
            <div className="flex flex-col gap-3">
              <div className="heading flex gap-4">
                <div className="text-blue-600 text-xl font-semibold">
                  FOOD APPLICATION
                </div>
                <div>
                  <button className="border border-solid border-gray-500 px-2 rounded-md">
                    Public
                  </button>
                </div>
              </div>
              <div className="Discription">
                <p>Basic ui/ux for food delivery website</p>
              </div>
              <div className="language flex gap-2 items-center">
                <p className="w-4 h-4 bg-yellow-300 rounded-sm"></p>
                <p>Javascript</p>
                <p>Created on : 23 Dec 2023</p>
              </div>
            </div>
            <div className="code flex items-center gap-3 border border-solid border-gray-800 bg-slate-300 p-1 rounded-sm">
              <div className="font-semibold text-black"> CODE </div>
              <div className="text-black">
                <FaCodeBranch />
              </div>
            </div>
          </div>
          {/* {Another work} */}
          <div className="repository1 p-4 border border-solid border-gray-500 flex lg:flex-row lg:gap-[250px] flex-col justify-center items-center gap-4">
            <div className="flex flex-col gap-3">
              <div className="heading flex gap-4">
                <div className="text-blue-600 text-xl font-semibold">
                  Password Generator
                </div>
                <div>
                  <button className="border border-solid border-gray-500 px-2 rounded-md">
                    Public
                  </button>
                </div>
              </div>
              <div className="Discription">
                <p>Project that generates strong password</p>
              </div>
              <div className="language flex gap-2 items-center">
                <p className="w-4 h-4 bg-purple-600 rounded-sm"></p>
                <p>Python</p>
                <p>Created on : 28 Oct 2023</p>
              </div>
            </div>
            <div className="code flex items-center gap-3 border border-solid border-gray-800 bg-slate-300 p-1 rounded-sm">
              <div className="font-semibold text-black"> CODE </div>
              <div className="text-black">
                <FaCodeBranch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
