// // import React from 'react';

// // const Third = () => {
// //   return (
// //     <div className="flex flex-wrap md:flex-nowrap items-center justify-center h-screen bg-gray-100">
// //       {/* Left Side: Images */}
// //       <div className="flex flex-col space-y-4 p-4">
// //         <img
// //           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// //           alt="Image 1"
// //           className="w-full h-48 object-cover"
// //         />
// //         <img
// //           src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// //           alt="Image 2"
// //           className="w-full h-48 object-cover"
// //         />
// //         <img
// //           src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// //           alt="Image 3"
// //           className="w-full h-48 object-cover"
// //         />
// //       </div>

// //       {/* Right Side: Text */}
// //       <div className="flex-grow p-8 bg-white">
// //         <h1 className="text-4xl font-Poppins text-gray-800">Third</h1>
// //         <p className="mt-4 text-lg text-gray-600">
// //           This is the right side text content. It is displayed next to the images on the left side. You can add more text or content here as needed.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Third;
// import React from "react";

// const Third = () => {
//   return (
//     <>
      // <div className="flex flex-wrap bg-red500  font-Poppins md:flex-nowrap h-screen bg-gray-100">
      //   {/* Left Side: Images */}
      //   <div className="w-full bg-yellow-40 ml-10 mt-20 md:w-1/2 h-2/3 flex flex-col md:flex-row">
      //     {/* Large Image */}
      //     <div className="w-full md:w-1/2  ">
      //       <img
      //         src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      //         alt="Large Image"
      //         className="w-full h-2/3 mt-20 object-cover shadow-[#000000] shadow-2xl rounded-tr-full"
      //       />
      //     </div>

      //     {/* Two Smaller Images */}
      //     <div className="w-full md:w-1/2 flex flex-col space-y-12  ">
      //       <img
      //         src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      //         alt="Small Image 1"
      //         className="w-full h-1/2 object-cover shadow-[#000000] shadow-2xl rounded-tr-full"
      //       />
      //       <img
      //         src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      //         alt="Small Image 2"
      //         className="w-full h-1/2 object-cover shadow-[#111112] shadow-2xl rounded-tl-full"
      //       />
      //     </div>
      //   </div>

//         {/* Right Side: Text */}
//         <div className=" bg-indigo-400 ">
     
        
//         <div className="w-full  mt-28 flex bg-tal-400 items-start justify-start  ">
//           <div className="text-center ml-20  md:text-center bg-yellw-300 font-Poppins">
//             <div className="  flex items-center justify-start   ">
//               <h1 className="text-5xl font-bold text-left  bg-gradient-to-r from-[#e0e7f0] via-[#e0e7f0] to-[#d382ff] text-transparent bg-clip-text">
//                 Book your shop or register individually
//               </h1>
//             </div>

//             <p className="text-lg text-left mt-8 ">
//               This is the text content that you want on the right side. You can
//               add more details or descriptions here to complement the images on
//               the left.
//             </p>
//           </div>
//         </div>
//         <div className=" px-10 mt-10">

//         <a href="#_" class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
// <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
// <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
// <span class="relative text-white">Button Text</span>
// </a>
//         </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Third;
import React from "react";
import Next from "./Next";
import { NavLink } from "react-router-dom";

const Third = () => {
  return (
    <>
         <div className="flex flex-wrap bg-red500  font-Poppins md:flex-nowrap h-screen bg-gray-100">
        {/* Left Side: Images */}
        <div className="w-full  p-10 bg-yellow-40  pr-4 mt-20 md:w-1/2 h-2/3 flex flex-col md:flex-row">
          {/* Large Image */}
          <div className="w-full md:w-1/2  ">
            <img
              src="https://i.pinimg.com/564x/ff/8a/82/ff8a82933f2e2169b4433997adce9b25.jpg"
              alt="Large Image"
              className="w-full h-2/3 mt-20 object-cover shadow-[#000000] shadow-2xl rounded-tr-full"
            />
          </div>

          {/* Two Smaller Images */}
          <div className="w-full md:w-1/2 flex flex-col space-y-12 ">
            <img
              src="https://i.pinimg.com/564x/ee/8c/bc/ee8cbc307543c2cd3e1e7d07bbfedbb3.jpg"
              alt="Small Image 1"
              className="w-full h-1/2 object-cover shadow-[#000000] shadow-2xl rounded-tr-full"
            />
            <img
              src="https://i.pinimg.com/564x/68/f8/d6/68f8d61289daa2bb5f0f26dbed8c6ed6.jpg"
              alt="Small Image 2"
              className="w-full h-1/2 object-cover shadow-[#111112] shadow-2xl rounded-tl-full"
            />
          </div>
        </div>
        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 ml-6 flex flex-col items-start justify-center p-8 bg-[#c2d0ff]">
        <div className="">
          <div className="text-center ml-8   md:text-center font-Poppins">
            <h1 className="text-5xl font-bold text-left bg-gradient-to-r from-indigo-500 via-indigo-400 to-[#d78dfe] text-transparent bg-clip-text pb-2">
              Book your shop or register individually
            </h1>
            <p className="text-lg text-left mt-8">
              This is the text content that you want on the right side. You can
              add more details or descriptions here to complement the images on
              the left.
            </p>
          </div>

          <div className="px-10 mt-10 flex justify-start gap-10">
            <NavLink to ="/SignUp"
              className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative font-Poppins text-white">Register as Shop</span>
            </NavLink>
            <NavLink to ="/SignUp" className="inline-flex items-center justify-center h-12 px-6 py-6  font-Poppins font-medium text-center text-gray-900 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-indigo-600 hover:border-indigo-600 focus:shadow-xs focus:no-underline">
Register as Individual
</NavLink>
          </div>
          </div>
        </div>
      </div>
      <Next/>
    </>
  );
};

export default Third;
