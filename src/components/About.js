import React from 'react';
import { Parallax } from 'react-parallax';
import Third from './Third';

const About = () => {
  return (
    <>
      {/* <Parallax
        bgImage="https://images.unsplash.com/photo-1707305639760-477e8052c037?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgImageAlt="Background"
        strength={200}
        className="relative h-screen flex items-start justify-center"
      > */}
        <div className="relative bg-[#f8f9fc] h-screen flex items-start justify-center">
          <h1 className="text-3xl font-semibold mt-20 font-Poppins text-center">About</h1>
        </div>
      {/* </Parallax> */}
      <Third />
    </>
  );
};

export default About;
