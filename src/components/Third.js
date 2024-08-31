// import React from 'react';

// const Third = () => {
//   return (
//     <div className="flex flex-wrap md:flex-nowrap items-center justify-center h-screen bg-gray-100">
//       {/* Left Side: Images */}
//       <div className="flex flex-col space-y-4 p-4">
//         <img
//           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Image 1"
//           className="w-full h-48 object-cover"
//         />
//         <img
//           src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Image 2"
//           className="w-full h-48 object-cover"
//         />
//         <img
//           src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Image 3"
//           className="w-full h-48 object-cover"
//         />
//       </div>

//       {/* Right Side: Text */}
//       <div className="flex-grow p-8 bg-white">
//         <h1 className="text-4xl font-Poppins text-gray-800">Third</h1>
//         <p className="mt-4 text-lg text-gray-600">
//           This is the right side text content. It is displayed next to the images on the left side. You can add more text or content here as needed.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Third;
import React from "react";

const Third = () => {
  return (
    <>
      <div className="flex flex-wrap bg-red500  font-Poppins md:flex-nowrap h-screen bg-gray-100">
        {/* Left Side: Images */}
        <div className="w-full bg-yellow-40 ml-10 mt-20 md:w-1/2 h-2/3 flex flex-col md:flex-row">
          {/* Large Image */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Large Image"
              className="w-full h-2/3 mt-20 object-cover shadow-[#000000] shadow-2xl rounded-tr-full"
            />
          </div>

          {/* Two Smaller Images */}
          <div className="w-full md:w-1/2 flex flex-col space-y-12 p-4">
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Small Image 1"
              className="w-full h-1/2 object-cover shadow-[#000000] shadow-2xl rounded-tr-full"
            />
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Small Image 2"
              className="w-full h-1/2 object-cover shadow-[#111112] shadow-2xl rounded-tl-full"
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-2/3 mt-28 flex bg-tal-400 items-start justify-start px-20">
          <div className="text-center md:text-center bg-yellw-300 font-Poppins">
            <div className="  flex items-center justify-start bg-gray-100">
              <h1 className="text-5xl font-bold text-left  bg-gradient-to-r from-indigo-700 via-indigo-500 to-[#dc9aff] text-transparent bg-clip-text">
                Book your shop or register individually
              </h1>
            </div>

            <p className="text-lg text-left mt-8 ">
              This is the text content that you want on the right side. You can
              add more details or descriptions here to complement the images on
              the left.
            </p>

          </div>
          
        </div>
        
      </div>
      
    </>
  );
};

export default Third;
