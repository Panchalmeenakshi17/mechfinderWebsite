import React from 'react';

const MIne = () => {
  return (
    <>
      {/* Main wrapper */}
      <div className="relative h-screen w-full bg-cover bg-center" 
           style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1722795239761-42d289aef43c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
        
        {/* Background Blur Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

        {/* Foreground Image (background removed version of the same image) */}
        <div className="relative flex justify-center items-center h-full">
          <img 
            src='https://plus.unsplash.com/premium_photo-1722795239761-42d289aef43c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            alt='Foreground Image' 
            className='absolute z-20 w-1/2 max-w-sm'
            style={{ bottom: '-10%', left: '25%' }} // Adjust position as needed
          />

          {/* Text content */}
          <h1 className="relative z-10 text-white font-poppins text-6xl font-bold">
            A <span className="relative z-30">Stylish</span> Look
          </h1>
        </div>
      </div>
    </>
  );
}

export default MIne;
