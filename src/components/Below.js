import React from 'react';

const Below = () => {
  return (
    <>
    
    <div className='px-28 font-Poppins w-full h-screen bg-[#e0e7f0] '>
      <h1 className='text-center font-semibold text-3xl py-20'>
        A Platform which meets all your regular Needs
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-4 gap-7">
          {/* Card 1 */}
          <div className="relative w-72 h-96 cursor-pointer overflow-hidden group transform transition-transform duration-300 hover:scale-110">
            <img
              src="https://i.pinimg.com/564x/bf/1f/20/bf1f20a865b06a5cd04da39e55269ef4.jpg"
              alt="Card 1"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000083] via-black to-black opacity- group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold">Electrician</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-72 h-96 cursor-pointer overflow-hidden group transform transition-transform duration-300 hover:scale-110">
            <img
              src="https://i.pinimg.com/564x/6f/e2/a2/6fe2a2a8f04dc2a157fc470d51f47015.jpg"
              alt="Card 2"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000083] via-black to-black opacity- group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold">Plumber</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-72 h-96 cursor-pointer overflow-hidden group transform transition-transform duration-300 hover:scale-110">
            <img
              src="https://i.pinimg.com/564x/4c/17/50/4c1750efcff731ea4883c7b0180cbb6c.jpg"
              alt="Card 3"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000083] via-black to-black opacity- group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold">Labourer</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative w-72 h-96 cursor-pointer overflow-hidden group transform transition-transform duration-300 hover:scale-110">
            <img
              src="https://staticimg.amarujala.com/assets/images/2024/06/18/safai-karamchari_f1e8a161671a0118e9373835e62c0ea4.jpeg?w=414"
              alt="House Cleaner"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#00000083] via-black to-black opacity- group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold">House Cleaner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Below;
