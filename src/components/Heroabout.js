import React, { useState, useEffect } from 'react';
import HowWorks from './Howworks';
import MultiIncrementor from './NumberIncrementer';
import VisionPage from './VisionPage';
import { NavLink } from 'react-router-dom';

const HeroAbout = () => {
      // Images for the carousel
  const images = [
    'https://images.unsplash.com/photo-1604068105030-06d82bb48fd1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1568688271711-1aeee5ce0363?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1554532831-7e998a0bf556?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1551655510-555dc3be8633?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  // Current active image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, [images.length]);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    <>
      <div className="relative md:flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
        {/* Left Content */}
        <div className="absolute bg-transparent md:w-2/3 font-Poppins p-6 md:left-10 md:p-8 text-white">
          <h1 className="md:text-4xl text-2xl font-bold mb-4">MechFinder - Your Gateway to Reliable Service Providers</h1>
          <p className="mb-6">
            Welcome to MechFinder, the platform that connects you with top-rated, local service providers for all your needs. 
            Whether you require a quick plumbing fix, an electrician, or home improvement services, MechFinder has you covered. 
            Our mission is to bridge the gap between customers and skilled professionals, making it easier for you to find 
            reliable services and for professionals to grow their business.
          </p>
          <h2 className="text-2xl py-2 font-semibold mb-4">Why Choose MechFinder?</h2>
          <ul className="list-disc list-inside text-sm mb-6">
            <li>Access to verified and skilled service providers in your area</li>
            <li>Easy-to-use platform that allows you to post queries and get responses quickly</li>
            <li>Get in touch with local professionals offering competitive rates</li>
            <li>Unlock premium features for unlimited interactions and direct contact details</li>
            <li>Register your shop or service to gain visibility and reach more customers</li>
          </ul>
          {/* <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="mb-6">
            Simply post a job or query outlining your requirements, and nearby professionals will respond with quotes and availability. 
            Review profiles, compare offers, and choose the provider that best suits your needs. It's quick, efficient, and 
            designed to make your life easier.
          </p> */}
          <NavLink to='/Service'>
          <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300">
            Discover More
          </button>

          </NavLink>
        </div>

        {/* Right Image */}
        <div className="hidden md:block absolute md:right-10 right-0 w-20 md:w-96">
          <div className="md:relative">
            <img
              src={images[currentIndex]}
              alt="Service Providers"
              className="w-96 h-auto rounded-lg shadow-xl transition duration-500 ease-in-out transform"
            />
            {/* Previous and Next buttons */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-50 px-2 py-1 rounded-full"
            >
              &#8249;
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-3xl font-bold bg-black bg-opacity-50 px-2 py-1 rounded-full"
            >
              &#8250;
            </button>
          </div>
      </div>
      </div>
      <VisionPage/>
      <MultiIncrementor/>
      <HowWorks/>
    </>
  );
};

export default HeroAbout;
