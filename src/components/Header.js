import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black/30 backdrop-blur-md flex justify-center items-center py-4">
      {/* <NavLink to="/">
        <img
          className="w-20"
          src="../images/n4nn.jpg"
          alt="Logo"
        />
      </NavLink> */}
      <div className="ml-6 text-black text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold" : ""
          }
        >
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
