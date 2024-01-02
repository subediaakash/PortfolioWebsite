import React from "react";
import images from "../../assets";

const Rightpart = () => {
  return (
    <div>
      <div className="overallcontainer flex gap-5 items-center ">
        <div className="skillsContainer text-white p-3">
          <div className="heading py-2">
            <div className="relative">
              <p>Skills</p>
            </div>
            <div className="absolute h-[3.5px] w-[100px] bg-slate-500"></div>
          </div>
          <div className="itemskills  w-[200px]">
            {/* for html */}
            <div className="htmlcontainer flex items-center justify-between p-2 ">
              <div className="name">
                <p className="font-medium">HTML</p>
              </div>
              <div className="boxes">
                <ul className="flex gap-[1.5px]">
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#b6d8b6]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#7cbc7c]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#2ead2e]"></li>
                  <li className="w-4 h-4 border border-slate-500  rounded-sm bg-[#2ccc2c]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#04f704]"></li>
                </ul>
              </div>
            </div>
            {/* for the css container */}
            <div className="csscontainer flex items-center justify-between p-2 ">
              <div className="name">
                <p className="font-medium">CSS</p>
              </div>
              <div className="boxes">
                <ul className="flex gap-[1.5px]">
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#b6d8b6]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#7cbc7c]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#2ead2e]"></li>
                  <li className="w-4 h-4 border border-black  rounded-sm bg-[#2ccc2c]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#04f704]"></li>
                </ul>
              </div>
            </div>
            {/* FOR JAVASCRIPT CONTAINER */}
            <div className="jscontainer flex items-center justify-between p-2 ">
              <div className="name">
                <p className="font-medium">JS</p>
              </div>
              <div className="boxes">
                <ul className="flex gap-[1.5px]">
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#b6d8b6]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#7cbc7c]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#2ead2e]"></li>
                  <li className="w-4 h-4 border border-black  rounded-sm bg-[#2ccc2c]"></li>
                  <li className="w-4 h-4 border border-slate-500  rounded-sm"></li>
                </ul>
              </div>
            </div>
            {/* for react js */}
            <div className="reactjscontainer flex items-center justify-between p-2 ">
              <div className="name">
                <p className="font-medium">REACT JS</p>
              </div>
              <div className="boxes">
                <ul className="flex gap-[1.5px]">
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#b6d8b6]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#7cbc7c]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#2ead2e]"></li>
                  <li className="w-4 h-4 border border-black  rounded-sm bg-[#2ccc2c]"></li>
                  <li className="w-4 h-4 border border-slate-500  rounded-sm "></li>
                </ul>
              </div>
            </div>
            {/* for express */}
            <div className="expressjscontainer flex items-center justify-between p-2 ">
              <div className="name">
                <p className="font-medium">EXPRESS JS</p>
              </div>
              <div className="boxes">
                <ul className="flex gap-[1.5px]">
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#b6d8b6]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#7cbc7c]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#2ead2e]"></li>
                  <li className="w-4 h-4 border border-slate-500   rounded-sm"></li>
                  <li className="w-4 h-4 border border-slate-500  rounded-sm"></li>
                </ul>
              </div>
            </div>
            {/* {for python} */}
            <div className="pythoncontainer flex items-center justify-between p-2 ">
              <div className="name">
                <p className="font-medium">PYTHON</p>
              </div>
              <div className="boxes">
                <ul className="flex gap-[1.5px]">
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#b6d8b6]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#7cbc7c]"></li>
                  <li className="w-4 h-4 border border-black rounded-sm bg-[#2ead2e]"></li>
                  <li className="w-4 h-4 border border-black  rounded-sm bg-[#2ccc2c]"></li>
                  <li className="w-4 h-4 border border-slate-500  rounded-sm"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col gap-4 items-center">
          <div className="skills flex gap-3">
            <a href="https://www.w3.org/html/" target="_blank">
              <img src="https://img.shields.io/badge/HTML5%20-%23E34F26.svg?style=plastic&logo=html5&logoColor=white" />
            </a>
            <a href="https://www.w3schools.com/css/" target="_blank">
              <img
                alt="CSS"
                src="https://img.shields.io/badge/CSS%20-%231572B6.svg?style=plastic&logo=css3&logoColor=white"
              />
            </a>
            <a href="https://www.python.org" target="_blank">
              <img
                alt="Python"
                src="https://img.shields.io/badge/react-%2361DAFB.svg?style=plastic&logo=React&logoColor=black"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
            >
              <img
                alt="JavaScript"
                src="https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=plastic&logo=javascript&logoColor=black"
              />
            </a>
            <a href="https://www.python.org" target="_blank">
              <img
                alt="Python"
                src="https://img.shields.io/badge/Python%20-%2314354C.svg?style=plastic&logo=python&logoColor=white"
              />
            </a>
          </div>
          <div className="otherskills flex gap-3">
            <a href="https://www.cprogramming.com/" target="_blank">
              <img
                alt="C"
                src="https://img.shields.io/badge/C%20-%232370ED.svg?style=plastic&logo=c&logoColor=white"
              />
            </a>
            <a href="https://www.java.com" target="_blank">
              <img
                alt="Java"
                src="https://img.shields.io/badge/Java-%23007396.svg?style=plastic&logo=java&logoColor=white"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute w-[30vw] lg:w-[60vw] h-[1.5px] bg-slate-700 "></div>
    </div>
  );
};

export default Rightpart;
