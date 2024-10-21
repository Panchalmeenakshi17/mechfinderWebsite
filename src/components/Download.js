import React from 'react';
import { NavLink } from 'react-router-dom';

const Download = () => {
  // Array of categories
  const categories = [
    {
      title: "Top Electricians in Your Area",
      description: "Get expert electrical services from trusted professionals near you."
    },
    {
      title: "Find Reliable Plumbers",
      description: "Instantly connect with skilled plumbers for your urgent repairs."
    },
    {
      title: "Hire Professional Home Cooks",
      description: "Enjoy homemade meals by hiring experienced home cooks."
    },
    {
      title: "Cleaning Services",
      description: "Find reliable cleaning professionals for your home or office."
    },
    {
      title: "Carpentry Experts",
      description: "Connect with skilled carpenters for furniture repairs or custom work."
    },
    {
      title: "Painters for Hire",
      description: "Hire expert painters to give your space a fresh, new look."
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-5 py-10">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1644331683064-37e3fabb07af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black  opacity-40"></div> {/* Backdrop Effect */}
      </div>

      {/* Trending Section */}
      <h1 className="text-5xl text-white backdrop-blur-0  font-semibold font-Poppins mb-10 relative z-10">Trending on MechFinder</h1>

      {/* Trending Cards */}
      <div className="grid backdrop-blur-sm bg-[#ffffff00] p-2 rounded-2xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16 relative z-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 font-Poppins rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-700">{category.title}</h2>
            <p className="mt-4 text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>

      {/* Play Store Button */}
      <div className="flex flex-col font-Poppins items-center relative z-10">
        <NavLink
          to="https://play.google.com/store/apps/details?id=com.mechfinder&hl=en_IN"
        className=" backdrop-blur-lg bg-[#759fe8] transition ease-in-out shadow-inner text-white py-3 px-5 rounded-full flex items-center space-x-3  duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./images/p.jpg"
            alt="Google Play Store"
            className="w-14 h-14"
          />
          <span className="text-lg font-semibold">Download from Play Store</span>
        </NavLink>

        <p className="mt-5 text-gray-200">
          Get the MechFinder app to easily connect with trusted local professionals.
        </p>
      </div>
    </div>
  );
};

export default Download;
