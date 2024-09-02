import React from "react";
import { FaCodeBranch } from "react-icons/fa";

const RightSection = () => {
  return (
    <div className="RightSection pt-5">
      <div className="flex flex-col gap-2 ">
        <div className="topsection py-3 px-2">
          <div className="works relative text-white left-2 lg:left-0  ">
            WORKS
          </div>
          <div className="absolute h-[4px] w-[100px]  bg-slate-500"></div>
        </div>
        <div
          className="repocontainer flex flex-col justify-center items-center gap-5
        "
        >
          <div className="lg:w-[40vw] w-[80vw] repository1 p-4 border border-solid border-gray-500 flex lg:flex-row lg:gap-[250px] flex-col items-center  gap-4">
          <div className="flex flex-col gap-3">
              <div className="heading flex gap-4">
                <div className="text-blue-600 text-xl font-semibold">
                  SPLITWISE CLONE
                </div>
                <div>
                  <button className="border border-solid border-gray-500 px-2 rounded-md">
                    Public
                  </button>
                </div>
              </div>
              <div className="Discription">
                <p>A clone for splitwise alike application </p>
              </div>
              <div className="language flex gap-2 items-center">
                <p className="w-4 h-4 bg-blue-500 rounded-sm"></p>
                <p>TypeScript</p>
                <p>Created on : 1 Jan 2024</p>
              </div>
            </div>
            <div className="code flex items-center gap-3 border border-solid border-gray-800 bg-slate-300 p-1 rounded-sm">
              <div className="font-semibold text-black"><a href="https://github.com/subediaakash/splitwise-clone"> CODE </a> </div>
              <div className="text-black">
                <FaCodeBranch />
              </div>
            </div>
          </div>
          {/* {another work } */}
          <div className="lg:w-[40vw] w-[80vw] repository1 p-4 border border-solid border-gray-500 flex lg:flex-row lg:gap-[250px] flex-col items-center  gap-4">

            <div className="flex flex-col gap-3">
              <div className="heading flex gap-4">
                <div className="text-blue-600 text-xl font-semibold">
                  H M S
                </div>
                <div>
                  <button className="border border-solid border-gray-500 px-2 rounded-md">
                    Public
                  </button>
                </div>
              </div>
              <div className="Discription">
                <p>Backend for Hospital Management System</p>
              </div>
              <div className="language flex gap-2 items-center">
                <p className="w-4 h-4 bg-blue-500 rounded-sm"></p>
                <p>Typescript</p>
                <p>Created on : 23 Dec 2023</p>
              </div>
            </div>
            <div className="code flex items-center gap-3 border border-solid border-gray-800 bg-slate-300 p-1 rounded-sm">
              <div className="font-semibold text-black"> <a href="https://github.com/subediaakash/hospital-management-system-"></a>CODE</div>
              <div className="text-black">
                <FaCodeBranch />
              </div>
            </div>
          </div>
          {/* {Another work} */}
          <div className="lg:w-[40vw] w-[80vw] repository1 p-4 border border-solid border-gray-500 flex lg:flex-row lg:gap-[250px] flex-col items-center  gap-4">

            <div className="flex flex-col gap-3">
              <div className="heading flex gap-4">
                <div className="text-blue-600 text-xl font-semibold">
                  MEDIUM CLONE
                </div>
                <div>
                  <button className="border border-solid border-gray-500 px-2 rounded-md">
                    Public
                  </button>
                </div>
              </div>
              <div className="Discription">
                <p>Full Stack Blog Posting App</p>
              </div>
              <div className="language flex gap-2 items-center">
                <p className="w-4 h-4 bg-blue-500 rounded-sm"></p>
                <p>TypeScript</p>
                <p>Created on : 28 Oct 2023</p>
              </div>
            </div>
            <div className="code flex items-center gap-3 border border-solid border-gray-800 bg-slate-300 p-1 rounded-sm h-12">
              <div className="font-semibold text-black "> CODE </div>
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
