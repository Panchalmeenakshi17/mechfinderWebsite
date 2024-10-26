import React from 'react';
import { NavLink } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="bg-[#f9f8ff] font-Poppins text-blue-500 font-semibold py-10 px-6 flex flex-col items-center justify-center text-center">
      <h2 className=" text-xl md:text-3xl font-Poppins mb-4">
        Join our community today and experience hassle-free service solutions!
      </h2>
      <p className="text- mb-6 text-gray-500">
        Download the MechFinder app now and connect with trusted professionals in your area!
      </p>
      <div className="flex space-x-4">
      <NavLink
          to="https://play.google.com/store/apps/details?id=com.mechfinder&hl=en_IN"
        className=" backdrop-blur-lg bg-[#759fe8] transition ease-in-out shadow-inner text-white py-3 px-5 rounded-full flex items-center space-x-3  duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
          Download App
        </button>

        </NavLink>
        <button className="border border-white hover:bg-blue-100 hover:text-indigo-600 text-black font-semibold py-2 px-4 rounded transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
