import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full transition-colors duration-300 ease-in-out ${
        isScrolled
          ? " backdrop-blur-2xl text-black z-50"
          : "bg-gradient-to-r from-[#151c2d]   via-[#151c2d]   to-[#161826] backdrop-blur-md"
      } font-Poppins px-28 py-4 z-10`}
    >
      <div className="flex justify-between items-center">
        <div className="flex">
          <div className="ml-6 text-indigo-200 text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </div>
          <div className="ml-6 text-indigo-200 text-lg">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-semibold" : ""
              }
            >
              About
            </NavLink>
          </div>
          <div className="ml-6 text-indigo-200 text-lg">
            <NavLink
              to="/Service"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-semibold" : ""
              }
            >
              Services
            </NavLink>
          </div>
          <div className="ml-6 text-indigo-200 text-lg">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-semibold" : ""
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="text-lg">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-semibold bg-indigo-500 px-4 py-2 rounded" : "text-indigo-200 bg-indigo-500 hover:bg-indigo-700  transition ease-in-out px-4 py-2 rounded-md"
            }
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "text-[black] font-medium bg-indigo-500 px-4 py-2 rounded" : "text-indigo-200 ml-5 bg-indigo-500  hover:bg-indigo-700 transition ease-in-out px-4 py-2 rounded-md"
            }
          >
            Log In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
