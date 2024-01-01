import React from "react";
import Typewriter from "typewriter-effect";

const RightSide = () => {
  return (
    <div>
      <div className="top">
        <p className="text-sm">
          Aakash Subedi/README.<span className="text-slate-500">md</span>
        </p>
      </div>
      <div className="main text-3xl font-bold font-openSans text-[#8e2763] ">
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

      <div className="otherContents">
        <div className="aboutmesection">
          <div className="flex gap-4 items-center">
            <p>ABOUT ME</p>
            <p>
              <img
                src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/about_me.gif?raw=true"
                width="50px"
              />
            </p>
          </div>
          <div className="contents">
            <div>
              <p>Hello i am Aakash</p>
              <p>I am 20 Years old and currently working on learning web dev</p>
              <p> You can reach me in linked in </p>
              <p>Looking forward to learn Backend as well</p>
            </div>
            <div>
              <img
                src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/Right_Side.gif?raw=true"
                width="250px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
