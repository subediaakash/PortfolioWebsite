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
      <div className="main">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello I am Aakash")
              .pauseFor(1000)
              .deleteAll()
              .typeString("I am a Web Developer")
              .start()
              .deleteAll()
              .typeString("I love writing journals")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Thank you for visiting")
              .start();
          }}
        />
      </div>
    </div>
  );
};

export default RightSide;
