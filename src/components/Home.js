import React from 'react';
import { Parallax } from 'react-parallax';
import About from './About';

const Home = () => {
  return (
    <>
      <Parallax
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgImageAlt="Background"
        strength={300} // Reduced strength for a subtler effect
        className="relative h-screen flex items-center justify-center"
      >
        <div className="relative z-10 text-white text-center p-4">
          <h1 className="text-4xl font-bold">Home</h1>
        </div>
      </Parallax>
      <div className="py-10">
        <About />
      </div>
    </>
  );
};

export default Home;
