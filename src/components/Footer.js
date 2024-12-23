import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" font-Poppins bg-gray-900">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="md:text-3xl text-2xl mb-3">
              {" "}
              Download our All in one app{" "}
            </h3>
            <p> Book, enjoy and book again </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center hover:bg-[#c6c6c67e] transition ease-in-out border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              {/* <div className="flex items-center border hover:bg-[#c6c6c67e] transition ease-in-out w-auto rounded-lg px-4 py-2 w-44 mx-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8"/>
                    <div className="text-left  ml-3">
                        <p className='text-xs text-gray-200'>Download on </p>
                        <p className="text-sm md:text-base"> Apple Store </p>
                    </div>
                </div> */}
            </div>
          </div>
          <div className="mt-20 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {" "}
              &copy; Mechfinder, 2024.{" "}
            </p>
            <div className="order-1 md:order-2">
              <NavLink to="/about">
                <span className="px-2">About us</span>
              </NavLink>
              <NavLink to="/Contac">
                <span className="px-2 border-l">Contact us</span>
              </NavLink>
              <NavLink to="/Service">
                <span className="px-2 border-l">Services</span>
              </NavLink>
              <NavLink to="">
                <span className="px-2 border-l">Services</span>

              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
