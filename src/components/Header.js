import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#5f9ead] via-[#96c2cb] via-[#96c2cb] via-[#d4e1e5] to-[#8bbbc7] font-Poppins backdrop-blur-md flex justify-center items-center py-4">
      {/* <NavLink to="/">
        <img
          className="w-20"
          src="../images/n4nn.jpg"
          alt="Logo"
        />
      </NavLink> */}
      <div className="ml-6 text-white text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[black] font-medium" : ""
          }
        >
          Home
        </NavLink>
      </div>
      <div className="ml-6 text-white text-lg">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-[black] font-medium" : ""
          }
        >
          About
        </NavLink>
      </div>
      <div className="ml-6 text-white text-lg">
        <NavLink
          to="/third"
          className={({ isActive }) =>
            isActive ? "text-[black] font-medium" : ""
          }
        >
          Third
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
