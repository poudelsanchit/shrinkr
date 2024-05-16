import React, { useState } from "react";
import { IoMdFingerPrint } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuthStore from "../zustand/store";

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const [isActive, setIsActive] = useState(false);
  const handleLogOut = () => {};

  return (
    <div className="bg-primarybackground bg-dotted-spacing-4 bg-dotted-[#191818] text-white flex w-full h-16 sticky top-0 justify-center items-center shadow-md">
      <div className="w-11/12 flex justify-between">
        <Link to="/">
          <div className="font-RockSalt bg-gradient-to-r text-2xl">Shrinkr</div>
        </Link>
        {isAuthenticated ? (
          <>
            <div
              className="relative font-Poppins bg-gradient-to-r text-base flex justify-center items-center gap-2 cursor-pointer select-none"
              onClick={() => setIsActive((prev) => !prev)}
            >
              {user}
            </div>
            {isActive ? (
              <div
                className="absolute h-auto w-auto top-14 right-14 text-black px-4 py-2 bg-white rounded-md select-none cursor-pointer hover:bg-[#e7e0e0] hover:scale-105 transition-all"
                onClick={() => logout()}
              >
                Logout
              </div>
            ) : null}
          </>
        ) : (
          // Render login link if not authenticated
          <Link to="/login">
            <div className="font-RockSalt bg-gradient-to-r text-sm flex justify-center items-center gap-2 cursor-pointer select-none">
              <IoMdFingerPrint className="text-2xl" />
              Login
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
