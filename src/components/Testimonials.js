import React from 'react';
import Marquee from './Marquee'; // Correctly import the Marquee component

const Testimonials = () => {
  return (
    <div>
      <Marquee hoverToStop={true}>
        <span style={{ color: 'red', margin: '0 1rem' }}>This is my testimonial text</span>
        <span style={{ color: 'green', margin: '0 1rem' }}>Another testimonial text</span>
        <span style={{ color: 'blue', margin: '0 1rem' }}>More feedback here</span>
      </Marquee>
    </div>
  );
};

export default Testimonials;
