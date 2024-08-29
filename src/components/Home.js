import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import About from './About';

const backgroundImages = [
  "https://images.unsplash.com/photo-1527002151948-c2d14b0e0c93?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1464059728276-d877187d61a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const Home = () => {
  const [bgImage, setBgImage] = useState(backgroundImages[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgImage(prevImage => {
        const currentIndex = backgroundImages.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % backgroundImages.length;
        return backgroundImages[nextIndex];
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="background-container">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`background-image ${bgImage === image ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Content */}
      <Parallax
        bgImage={bgImage}
        bgImageAlt="Background"
        strength={300} // Reduced strength for a subtler effect
        className="relative h-screen flex items-center justify-left"
      >
        {/* Full-Screen Overlay */}
        <div className="absolute h-screen w-screen inset-0 bg-[#96c2cb] bg-opacity-30 backdrop-blur-md z-0"></div>

        {/* Content */}
        <div className="relative font-Poppins px-10 z-10 text-left p-4">
          <h1 className="text-4xl font-medium text-white px-20">
            Need a reliable plumber, mechanic, or other essential services?
            {/* Find skilled professionals easily with MechFinder. */}
          </h1>
          <h2 className="text-2xl mt-4 font-medium text-white px-20">
            Discover top-rated service providers in your area and get instant quotes.
          </h2>
        </div>
      </Parallax>
     
     
    </div>
        <About />
    </>
  );
};

export default Home;
