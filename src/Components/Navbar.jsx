import { FaHome } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { MdOutlinePictureAsPdf } from "react-icons/md";

const Navbar = () => {
  const listItemStyle =
    "flex align-middle gap-2 items-center font-openSans font-medium p-1 lg:p-2 text-white relative hover:cursor-pointer hover:underline  decoration-3 underline-offset-8 transition ease-in-out  hover:text-[#969696]";

  return (
    <div>
      <div className="navcontainer p-1 lg:p-2 bg-[#212823] fixed lg:sticky lg:top-0">
        <ul className="flex">
          <a href="#home">
            {" "}
            <li className={listItemStyle}>
              HOME <FaHome className="text-gray-300 " />
            </li>
          </a>
          <a href="#skills">
            <li className={listItemStyle}>
              SKILLS <IoIosSettings className="text-gray-300" />
            </li>
          </a>
          <a href="#works">
            <li className={listItemStyle}>
              WORKS <MdWork className="text-gray-300" />
            </li>
          </a>
          <li className={listItemStyle}>
            RESUME <MdOutlinePictureAsPdf className="text-gray-300" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
