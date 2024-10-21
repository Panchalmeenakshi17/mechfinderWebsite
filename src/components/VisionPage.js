import React from 'react';

const VisionPage = () => {
    return (
        <div className="flex md:mt-0 mt-10 flex-col items-left md:px-24 justify-center min-h-screen bg-gray-100 p-5">
            <h1 className="font-Poppins text-4xl font-bold mb-5 text-left">
                Our Vision
            </h1>
            <div className=' mt-3 md:mt-6 md:flex justify-center'>

                <img
                    src="https://i.pinimg.com/564x/63/bd/42/63bd422acd31feba7c62f764badc6489.jpg" // Change to your desired image
                    alt="Vision"
                    className="rounded-lg mb-5"
                />
            <div className="max-w-3xl bg-white  shadow-lg rounded-lg p-6 mb-6">
                <p className="text-regular font-Poppins text-gray-700">
                    At MechFinder, we envision a world where every individual has immediate access to skilled locals for their everyday needs. Our goal is to bridge the gap between service providers and users, empowering communities through technology and collaboration. We strive to create a seamless platform that fosters trust and efficiency, ensuring that every service request is met with the highest standards of quality and care.
                </p>
            <div className="flex flex-col mt-10 items-left">
                <h2 className="font-Poppins text-2xl font-semibold mb-2">Join Us in Realizing This Vision</h2>
                <p className="text-gray-600 font-Poppins text-left mb-4">
                    Together, we can transform the way services are delivered and experienced. Join us in making a difference!
                </p>
                <button className="bg-indigo-600 w-1/2 text-white font-Poppins py-2 px-4 rounded-3xl hover:bg-indigo-700 transition duration-300">
                    Get Started
                </button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default VisionPage;
