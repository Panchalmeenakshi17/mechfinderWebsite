import React from 'react';

const ServiceHero = () => {
  return (
    <div className="flex flex-col  font-Poppins md:flex-row bg-[#32314e] text-white">
      {/* Left Section: Main Heading and Subtext */}
      <div className="flex flex-col justify-center items-start px-8 mt-20 md:w-1/2 space-y-6">
        <h1 className=" text-3xl md:text-5xl font-semibold leading-tight">
          Find Trusted Services at Your Fingertips
        </h1>
        <p className="text-lg text-gray-300 max-w-md">
          At MechFinder, we connect you with reliable service providers in your area. Whether it's plumbing, electrical work, or home repairs, our platform ensures you find the right professional for the job, making your life easier and stress-free.
        </p>
      </div>

      {/* Right Section: Image Grid */}
      <div className="grid md:mt-20 grid-cols-2 gap-4 md:w-1/2 p-8">
        <img
          src="https://i.pinimg.com/564x/e8/30/c0/e830c084b43d53eb3da282130f5d22fd.jpg" // Replace with actual image URLs
          alt="Plumber fixing a sink"
          className="object-cover w-full h-48 rounded-3xl" // Set a consistent height
        />
        <img
          src="https://i.pinimg.com/564x/ed/a2/46/eda24672419178acb8ef75924c427837.jpg"
          alt="Electrician working on a circuit"
          className="object-cover w-full h-48 rounded-3xl" // Set a consistent height
        />
        <img
          src="https://i.pinimg.com/564x/d8/ca/73/d8ca730163d4aec7f6b9fcd3ceca1cd2.jpg"
          alt="Carpenter measuring wood for furniture"
          className="object-cover w-full h-48 rounded-3xl" // Set a consistent height
        />
        <img
          src="https://i.pinimg.com/736x/c6/e9/0b/c6e90b0e6d3344ff4d70d3629a1b3fa2.jpg"
          alt="Technician repairing home appliances"
          className="object-cover w-full h-48 rounded-3xl" // Set a consistent height
        />
      </div>
    </div>
  );
};

export default ServiceHero;
