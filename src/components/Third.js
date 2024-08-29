import React from 'react'
import { Parallax } from 'react-parallax';
const Third= () => {
  return (
    
    <>
    <Parallax
      bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      bgImageAlt="Background"
      strength={300} // Adjust strength for more or less parallax effect
      className="relative h-screen flex items-center justify-center"
    >
      <div className="relative z-10 text-white text-center p-4">
        <h1 className="text-4xl font-bold">About</h1>
      </div>
    </Parallax>
    
    </>
  )
}

export default Third   