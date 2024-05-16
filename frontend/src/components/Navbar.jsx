import React from "react";
import { IoMdFingerPrint } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuthStore from "../zustand/store"; // Import the Zustand store for authentication

const Navbar = () => {
  const { isAuthenticated, user } = useAuthStore(); // Access the authentication state and user from the Zustand store

  return (
    <div className="bg-primarybackground bg-dotted-spacing-4 bg-dotted-[#191818] text-white flex w-full h-16 sticky top-0 justify-center items-center shadow-md">
      <div className="w-11/12 flex justify-between">
        <Link to="/">
          <div className="font-RockSalt bg-gradient-to-r text-2xl">Shrinkr</div>
        </Link>
        {isAuthenticated ? (
          // Render username if authenticated
          <div className="font-RockSalt bg-gradient-to-r text-sm flex justify-center items-center gap-2 cursor-pointer select-none">
            <IoMdFingerPrint className="text-2xl" />
            {user.username}
          </div>
        ) : (
          // Render login link if not authenticated
          <Link to="/signup">
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
