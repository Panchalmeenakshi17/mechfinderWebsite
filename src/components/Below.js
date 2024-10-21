import React from "react";
import New from "./New";
import FeaturesHighlight from "./FeaturesHighlight";

const Below = () => {
  return (
    <>
      <div className="md:px-28 px-4 font-Poppins w-full h-screen bg-[#171717] ">
        <div className=" py-20">
          <h1 className="   bg-gradient-to-r from-indigo-300 via-indigo-400 to-[#cc89f0] text-transparent bg-clip-text text-center font-semibold text-2xl md:text-4xl  ">
            A Platform which meets all your regular Needs
          </h1>
          <h2 className="   bg-gradient-to-r from-indigo-300 via-indigo-400 to-[#cc89f0] text-transparent bg-clip-text text-center  py-3 text-sm  md:text-2xl">
            Glimpse of the Categories found on MechFinder
          </h2>
        </div>
        <div className="md:flex justify-center md:overflow-hidden overflow-x-auto overflow-y-hidden items-center">
          <div className="grid grid-cols-5 gap-80">
            {/* Card 1 */}
            <div className="relative w-72 h-96 cursor-pointer  hover:shadow-indigo-700 hover:border-indigo-800 border-2  ease-in-out border-[#171717]   overflow-hidden group transform transition-transform duration-300 hover:scale-110">
              <img
                src="https://i.pinimg.com/564x/bf/1f/20/bf1f20a865b06a5cd04da39e55269ef4.jpg"
                alt="Card 1"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#00000083] via-black to-black opacity- group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">
                  Electrician
                </span>
              </div>
            </div>

            {/* Card 2 trans ease-in-out */}
            <div className="relative w-72 h-96 cursor-pointer hover:border-indigo-800 border-[#]  border-2 transition ease-in-out   border-[#171717] overflow-hidden group transform transition-transform duration-300 hover:scale-110">
              <img
                src="https://i.pinimg.com/564x/6f/e2/a2/6fe2a2a8f04dc2a157fc470d51f47015.jpg"
                alt="Card 2 trans ease-in-out"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#00000083] via-black to-black opacity- group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">
                  Plumber
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-72 h-96 cursor-pointer hover:border-indigo-800 border-[#]  border-2 transition ease-in-out   border-[#171717] overflow-hidden group transform transition-transform duration-300 hover:scale-110">
              <img
                src="https://i.pinimg.com/564x/4c/17/50/4c1750efcff731ea4883c7b0180cbb6c.jpg"
                alt="Card 3"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#00000083] via-black to-black opacity- group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">
                  Labourer
                </span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative w-72 h-96 cursor-pointer hover:border-indigo-800 bo-2 transition ease-in-out   border-[#171717] overflow-hidden group transform transition-transform duration-300 hover:scale-110">
              <img
                src="https://staticimg.amarujala.com/assets/images/2024/06/18/safai-karamchari_f1e8a161671a0118e9373835e62c0ea4.jpeg?w=414"
                alt="House Cleaner"
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#00000083] via-black to-black opacity- group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">
                  House Cleaner
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center w-20 text-[#ffffffc4]">
  <div>
    <a 
      href="https://play.google.com/store/apps/details?id=com.mechfinder&hl=en" 
      target="_blank" // Opens in the same tab
      rel="noopener noreferrer" // Security best practice
    >
      <div className="hover:border-2 hover:border-[#ffffff50] transition ease-in-out w-full justify-center flex p-6 rounded-full backdrop-blur-lg bg-[#272727a9]">
        <h1 className="text-2xl">→</h1>
      </div>
    </a>
    <h1 className="text-center text-xs mt-2 font-Poppins">
      Get More on Mechfinder App!
    </h1>
  </div>
</div>

          </div>
        </div>
      </div>
      {/* <New/> */}
      <FeaturesHighlight/>
    </>
  );
};

export default Below;
