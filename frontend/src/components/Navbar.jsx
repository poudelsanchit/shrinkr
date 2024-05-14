import React from "react";
import { IoMdFingerPrint } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="   bg-primarybackground  bg-dotted-spacing-4 bg-dotted-[#191818] text-white flex w-full h-16 sticky top-0 justify-center items-center  shadow-md">
      <div className="w-11/12  flex justify-between ">
        <Link to="/">
          <div className=" font-RockSalt bg-gradient-to-r text-2xl">
            Shrinkr
          </div>
        </Link>
        <Link to="/signup">
          <div className=" font-RockSalt bg-gradient-to-r text-sm flex justify-center items-center gap-2 cursor-pointer select-none">
            <IoMdFingerPrint className="text-2xl" />
            login
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
