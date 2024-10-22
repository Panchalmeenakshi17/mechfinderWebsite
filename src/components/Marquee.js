// import React, { useState, useEffect, useRef } from 'react';

// const Marquee = ({ children, hoverToStop }) => {
//   const [pause, setPause] = useState(false); // Control pausing
//   const containerRef = useRef();
//   const contentRef = useRef();

//   const STEP = 1; // Speed of scrolling
//   const reqAnimationFrame = window.requestAnimationFrame;

//   useEffect(() => {
//     let animationFrameId;
//     let position = 0;

//     const scroll = () => {
//       if (!pause) {
//         if (contentRef.current && containerRef.current) {
//           position -= STEP;
//           if (-position >= contentRef.current.scrollWidth) {
//             position = containerRef.current.offsetWidth; // Reset the scroll when content moves out of view
//           }
//           contentRef.current.style.transform = `translateX(${position}px)`;
//         }
//       }
//       animationFrameId = reqAnimationFrame(scroll);
//     };

//     scroll(); // Start the scrolling

//     return () => cancelAnimationFrame(animationFrameId); // Cleanup on component unmount
//   }, [pause]); // Re-run effect when pause state changes

//   return (
//     <div
//       className='marquee-container'
//       ref={containerRef}
//       onMouseEnter={() => hoverToStop && setPause(true)} // Pause on hover
//       onMouseLeave={() => setPause(false)} // Resume on mouse leave
//       style={{ overflow: 'hidden', width: '100%', position: 'relative' }}
//     >
//       <div
//         className='marquee-content'
//         ref={contentRef}
//         style={{
//           display: 'inline-flex',
//           whiteSpace: 'nowrap',
//           transform: 'translateX(0)',
//         }}
//       >
//         {children}
//         {children} {/* Duplicate the content for continuous scrolling */}
//       </div>
//     </div>
//   );
// };

// export default Marquee;
// import React, { useState } from 'react';
// import { motion } from 'framer-motion'; // Import framer-motion

// const testimonials = [
//   {
//     name: 'Rahul Sharma',
//     role: 'Plumber',
//     testimonial: 'MechFinder helped me connect with more customers than ever before. Highly recommended!',
//     image: 'https://i.pinimg.com/enabled_lo/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg',
//   },
//   {
//     name: 'Priya Verma',
//     role: 'Electrician',
//     testimonial: 'Thanks to MechFinder, I was able to grow my business by 30% in just a few months.',
//     image: 'https://i.pinimg.com/564x/2c/d1/5c/2cd15c6593b6d6c26ef642b004b6d772.jpg',
//   },
//   {
//     name: 'Amit Patel',
//     role: 'Painter',
//     testimonial: 'This app is a game changer for service providers like me. The premium features are worth it!',
//     image: 'https://i.pinimg.com/564x/b2/66/f7/b266f7c8ecb53960c5eaa19d2a40dc41.jpg',
//   },
//   {
//     name: 'Suresh Kumar',
//     role: 'Mechanic',
//     testimonial: 'Using MechFinder has transformed how I find work. It’s a must-have app for anyone in the service industry.',
//     image: 'https://i.pinimg.com/564x/44/62/c3/4462c3a63a8dc24d074d1ebab0ba8840.jpg',
//   },
//   {
//     name: 'Neha Gupta',
//     role: 'Carpenter',
//     testimonial: 'My business has grown significantly since I started using MechFinder. Highly recommended!',
//     image: 'https://i.pinimg.com/564x/79/e3/ec/79e3ecb1b781c7c7f5357c41f1c4393f.jpg',
//   },
//   {
//     name: 'Rakesh Yadav',
//     role: 'Welder',
//     testimonial: 'The premium features in MechFinder are excellent for reaching more clients and growing my reputation.',
//     image: 'https://i.pinimg.com/564x/52/46/49/524649971a55b2f3a0dae1d537c61098.jpg',
//   },
// ];

// const TestimonialCard = ({ name, role, testimonial, image }) => {
//   return (
//     <div className="bg-white hover:scale-95 transition ease-in-out font-Poppins md:p-6 rounded-lg shadow-lg max-w-sm mx-auto">
//       <img
//         className="md:w-20 md:h-20 w-12 h-12 md:p-0 p-1 rounded-full md:mx-auto mb-4"
//         src={image}
//         alt={name}
//       />
//       <h3 className="md:text-lg font-semibold text-center">{name}</h3>
//       <p className="md:text-sm text-gray-500 text-center mb-2">{role}</p>
//       <p className="text-center text-gray-700 italic">"{testimonial}"</p>
//     </div>
//   );
// };

// const Testimonials = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const totalSlides = Math.ceil(testimonials.length / 3); // Calculate how many sets of 3 testimonials we have

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
//   };

//   const bounceTransition = {
//     type: 'spring',
//     stiffness: 300,
//     damping: 30,
//   };

//   const startIndex = currentSlide * 3;
//   const visibleTestimonials = testimonials.slice(startIndex, startIndex + 3); // Get 3 testimonials for the current slide

//   return (
//     <>
//     <section className="md:py-20 py-10   bg-gray-100">
//       <div className="container mx-auto px-4 overflow-hidden"> {/* Apply overflow-hidden here */}
//         <h2 className="md:text-4xl text-3xl font-bold font-Poppins text-center mb-3  text-[#5e68ff]">
//           What Our Service Providers Say
//         </h2>
//         <h2 className="md:text-xl text-sm font-base font-Poppins text-center mb-8 text-[#6d76ed]">
//          Just Review on our Application and get a chance to Featured by us!
//         </h2>

//         <div className="relative bg-yellw-500 md:py-20 py-5 overflow-hidden"> {/* Apply overflow-hidden here */}
//         <button
//   className="absolute left-0 transform  -translate-y-1/2 top-1/2 bg-[#5e68f5] text-white px-3 py-1 rounded-lg z-10 font-Poppins  -rotate-90 "
//   onClick={prevSlide}
// >
//   Previous
// </button>


//           <motion.div
//             key={currentSlide}
//             initial={{ x: 300, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -300, opacity: 0 }}
//             transition={bounceTransition}
//             className="grid grid-cols-2 px-10 md:grid-cols-3 gap-6"
//           >
//             {visibleTestimonials.map((testimonial, index) => (
//               <TestimonialCard
//                 key={index}
//                 name={testimonial.name}
//                 role={testimonial.role}
//                 testimonial={testimonial.testimonial}
//                 image={testimonial.image}
//               />
//             ))}
//           </motion.div>

//           <button
//             className="absolute right-0 transform -translate-y-1/2 top-1/2 bg-[#5e68f5] text-white px-3 py-1 rotate-90 font-Poppins rounded-lg z-10"
//             onClick={nextSlide}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default Testimonials;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Plumber',
    testimonial: 'MechFinder helped me connect with more customers than ever before. Highly recommended!',
    image: 'https://i.pinimg.com/enabled_lo/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg',
  },
  {
    name: 'Priya Verma',
    role: 'Electrician',
    testimonial: 'Thanks to MechFinder, I was able to grow my business by 30% in just a few months.',
    image: 'https://i.pinimg.com/564x/2c/d1/5c/2cd15c6593b6d6c26ef642b004b6d772.jpg',
  },
  {
    name: 'Amit Patel',
    role: 'Painter',
    testimonial: 'This app is a game changer for service providers like me. The premium features are worth it!',
    image: 'https://i.pinimg.com/564x/b2/66/f7/b266f7c8ecb53960c5eaa19d2a40dc41.jpg',
  },
  {
    name: 'Suresh Kumar',
    role: 'Mechanic',
    testimonial: 'Using MechFinder has transformed how I find work. It’s a must-have app for anyone in the service industry.',
    image: 'https://i.pinimg.com/564x/44/62/c3/4462c3a63a8dc24d074d1ebab0ba8840.jpg',
  },
  {
    name: 'Neha Gupta',
    role: 'Carpenter',
    testimonial: 'My business has grown significantly since I started using MechFinder. Highly recommended!',
    image: 'https://i.pinimg.com/564x/79/e3/ec/79e3ecb1b781c7c7f5357c41f1c4393f.jpg',
  },
  {
    name: 'Rakesh Yadav',
    role: 'Welder',
    testimonial: 'The premium features in MechFinder are excellent for reaching more clients and growing my reputation.',
    image: 'https://i.pinimg.com/564x/52/46/49/524649971a55b2f3a0dae1d537c61098.jpg',
  },
];

const TestimonialCard = ({ name, role, testimonial, image }) => {
  return (
    <div className="bg-white hover:scale-95 transition ease-in-out font-Poppins md:p-6 p-3 rounded-lg shadow-lg max-w-sm mx-auto">
      <img
        className="md:w-20 md:h-20 w-20 h-20 translate-x-3/4  ml-3 md:translate-x-0 md:p-0 p-1 rounded-full md:mx-auto mb-4"
        src={image}
        alt={name}
      />
      <h3 className="md:text-lg font-semibold text-center">{name}</h3>
      <p className="md:text-sm text-gray-500 text-center mb-2">{role}</p>
      <p className="text-center text-gray-700 italic">"{testimonial}"</p>
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = window.innerWidth < 768; // Adjust based on your mobile breakpoint
  const itemsPerSlide = isMobile ? 1 : 3; // 1 for mobile, 3 for desktop
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const bounceTransition = {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  };

  const startIndex = currentSlide * itemsPerSlide;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerSlide); // Get testimonials based on screen size

  return (
    <section className="md:py-20 py-10 bg-gray-100">
      <div className="container mx-auto px-4 overflow-hidden">
        <h2 className="md:text-4xl text-3xl font-bold font-Poppins text-center mb-3 text-[#5e68ff]">
          What Our Service Providers Say
        </h2>
        <h2 className="md:text-xl text-sm font-base font-Poppins text-center mb-8 text-[#6d76ed]">
          Just Review on our Application and get a chance to Featured by us!
        </h2>

        <div className="relative bg-yellow500 md:py-16 py-5 overflow-hidden">
          <button
            className="absolute md:left-0 -left-6 transform -translate-y-1/2 top-1/2 bg-[#5e68f5] text-white px-3 py-1 rounded-lg z-10 font-Poppins -rotate-90"
            onClick={prevSlide}
          >
            Previous
          </button>

          <motion.div
            key={currentSlide}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={bounceTransition}
            className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3'} px-10 gap-6`}
          >
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            ))}
          </motion.div>

          <button
            className="absolute md:right-0 -right-3 transform -translate-y-1/2 top-1/2 bg-[#5e68f5] text-white px-3 py-1 rotate-90 font-Poppins rounded-lg z-10"
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
