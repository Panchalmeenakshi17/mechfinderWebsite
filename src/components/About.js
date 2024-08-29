import React from 'react'
import { Parallax } from 'react-parallax';
import Third from './Third';
const About = () => {
  return (
    
    <>
    <Parallax
      bgImage="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      bgImageAlt="Background"
      strength={200} // Adjust strength for more or less parallax effect
      className="relative h-screen flex items-center justify-center"
    >
      <div className="relative z-10 text-white text-center p-4">
        <h1 className="text-4xl font-bold">About</h1>
      </div>
    </Parallax>
    <Third/>
    </>
  )
}

export default About