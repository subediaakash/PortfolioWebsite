import React from "react";
import Typewriter from "typewriter-effect";
import images from "../../assets";

const RightSide = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-3 p-4 w-full  border border-gray-700 text-white">
      <div className="top">
        <p className="text-sm">
          Aakash Subedi/README.<span className="text-slate-500">md</span>
        </p>
      </div>
      <div className="main text-2xl lg:text-3xl font-bold font-openSans text-[#8e2763] ">
        <Typewriter
          options={{
            strings: [
              "Hello I am Aakash Subedi .",
              "I am a Web Developer .",
              "I love writing journals .",
              "Thank you for visiting . ",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div className="otherContents ">
        <div className="aboutmesection flex flex-col gap-7 lg:gap-3">
          <div>
            <div className="flex gap-4 items-center relative mb-4">
              <p>
                <img
                  src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/about_me.gif?raw=true"
                  width="50px"
                />
              </p>{" "}
              <p>ABOUT ME</p>
            </div>
            <div className="absolute w-[70vw] lg:w-[40vw] h-[0.5px] bg-slate-600 "></div>
          </div>
          <div className="contents lg:flex lg:items-center">
            <ul>
              <li>Hello i am Aakash</li>
              <li>
                I am 20 Years old and currently working on learning web dev
              </li>
              <li> You can reach me in linked in </li>
              <li>Looking forward to learn Backend as well</li>
            </ul>
            <div>
              <img
                src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Right_Side.gif?raw=true"
                width="200px"
                height={"200px"}
              />
            </div>
          </div>
          <div className="connections">
            <p>WE CAN CONNECT ON:</p>
            <div>
              <ul className="flex items-center ">
                <li>
                  <img src={images[2]} className="w-[67px]" />
                </li>
                <li>
                  <img src={images[3]} className="w-[85px] " />
                </li>
                <li>
                  <img
                    src={images[5]}
                    className="w-[55px] h-[50px] bg-white rounded-2xl "
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
