import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#121610] text-white border border-solid border-gray-600 mb-[0.5px]">
      <div className="maincontainer  flex lg:flex-row md:flex-row md:items-center flex-col lg:justify-evenly gap-6 p-8">
        <p className="w-56 ">
          <span className="text-base font-semibold">Reach Me at :</span>{" "}
          aakashlol594@gmail.com
        </p>
        <div>
          <p className="text-base font-semibold">Social Media :</p>{" "}
          <ul className="lg:flex md:flex gap-4 text-sm">
            <li className="lg:flex items-center gap-2   ">
              <p>INSTAGRAM</p>
              <FaInstagram className="md:hidden lg:block " />
            </li>
            <li className="lg:flex items-center gap-2   ">
              <p>FACEBOOK</p>
              <FaFacebook className="md:hidden lg:block" />
            </li>
            <li className="lg:flex items-center gap-2   ">
              <p>LINKED IN</p> <FaLinkedin className="md:hidden lg:block" />
            </li>
          </ul>
        </div>
        <div className="flex items-center text-base font-bold">
          <p>
            <FaRegCopyright />
          </p>
          <p>Aakash Subedi</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
