import React from 'react';

const HowWorks = () => {
  return (
    <>
    
    <div className="bg-gray-50 md:py-10 py-5 font-Poppins">
      <div className="container mx-auto px-5">
        <h1 className="md:text-4xl text-2xl font-semibold text-center mb-8 text-indigo-600">How MechFinder Works</h1>

        {/* Flex Cards Section */}
        <div className="flex md:mt-20 mt-6 flex-wrap justify-center gap-10">
          {/* User Card */}
          <div className="bg-[white] shadow-lg rounded-3xl p-9 w-96 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-center">For Users</h2>
            <p className="mb-4">
              <strong className="text-blue-600">Search with Ease:</strong>
              <ul className="list-disc ml-5">
                <li>Open the app and type your need.</li>
                <li>Find a variety of service providers ready to assist you!</li>
              </ul>
            </p>
            <p className="mb-4">
              <strong className="text-blue-600">Location-Based Results:</strong>
              <ul className="list-disc ml-5">
                <li>View the best service providers in your area.</li>
                <li>Just enter your area name!</li>
              </ul>
            </p>
            <p className="mb-4">
              <strong className="text-blue-600">Instant Booking:</strong>
              <ul className="list-disc ml-5">
                <li>Contact and book services directly!</li>
                <li>Communicate with service providers with just one click.</li>
              </ul>
            </p>
            <div className='bg-indigo-500 p-3 rounded-3xl'>
              <p className="text-center text-white font-semibold">Discover Services Now!</p>
            </div>
          </div>

          {/* Individual Workers Card */}
          <div className="bg-[white] shadow-lg rounded-3xl p-9 w-96 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-center">For Individual Workers</h2>
            <p className="mb-4">
              <strong className="text-blue-600">Register Easily:</strong>
              <ul className="list-disc ml-5">
                <li>Create your profile in a few simple steps.</li>
                <li>Get ready to connect with clients!</li>
              </ul>
            </p>
            <p className="mb-4">
              <strong className="text-blue-600">Get Noticed:</strong>
              <ul className="list-disc ml-5">
                <li>Showcase your work to attract potential clients.</li>
                <li>Share images and ratings to draw in clients consistently.</li>
              </ul>
            </p>
            <p className="mb-4">
              <strong className="text-blue-600">Grow Your Business:</strong>
              <ul className="list-disc ml-5">
                <li>Leverage reviews and ratings to expand your business.</li>
                <li>Your hard work will pay off as you connect with new clients.</li>
              </ul>
            </p>
            <div className='bg-indigo-500 p-3 rounded-3xl'>
              <p className="text-center text-white font-semibold">Join Us Today!</p>
            </div>
          </div>

          {/* Shops Card */}
          <div className="bg-[white] shadow-lg rounded-3xl p-9 w-96 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-center">For Shops</h2>
            <p className="mb-4">
              <strong className="text-blue-600">Register Your Shop:</strong>
              <ul className="list-disc ml-5">
                <li>Create your shop profile easily.</li>
                <li>This is the perfect platform to showcase your products and services.</li>
              </ul>
            </p>
            <p className="mb-4">
              <strong className="text-blue-600">Reach More Customers:</strong>
              <ul className="list-disc ml-5">
                <li>Increase your visibility on MechFinder.</li>
                <li>Attract more customers to your shop.</li>
              </ul>
            </p>
            <p className="mb-4">
              <strong className="text-blue-600">Track Your Performance:</strong>
              <ul className="list-disc ml-5">
                <li>Monitor sales and feedback to improve your offerings.</li>
                <li>Understand your growth metrics and identify areas for enhancement.</li>
              </ul>
            </p>
            <div className='bg-indigo-500 p-3 rounded-3xl'>
              <p className="text-center text-white font-semibold">Boost Your Business!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HowWorks;
