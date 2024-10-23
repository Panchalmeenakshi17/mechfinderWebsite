// // // // import React from 'react'

// // // // const Next = () => {
// // // //   return (
// // // //     <>
// // // //     <div className=' h-screen'>
// // // //     <div className="w-full  p-10 bg-yellow-40  pr-4 mt-20 md:w-1/2 h-2/3 flex flex-col md:flex-row">
// // // //           {/* Large Image */}
// // // //           <div className="w-full md:w-1/2  ">
// // // //             <img
// // // //               src="https://i.pinimg.com/564x/ff/8a/82/ff8a82933f2e2169b4433997adce9b25.jpg"
// // // //               alt="Large Image"
// // // //               className="w-full h-1/2  object-cover shadow-[#000000] shadow-2xl rounded-tl-full"
// // // //             />
// // // //             <img
// // // //               src="https://i.pinimg.com/564x/ff/8a/82/ff8a82933f2e2169b4433997adce9b25.jpg"
// // // //               alt="Large Image"
// // // //               className="w-full h-1/2 mt-12 object-cover shadow-[#000000] shadow-2xl rounded-bl-full"
// // // //             />
// // // //           </div>

// // // //           {/* Two Smaller Images */}
// // // //           <div className="w-full md:w-1/2 flex flex-col space-y-12 ml-10">
// // // //             <img
// // // //               src="https://i.pinimg.com/564x/ee/8c/bc/ee8cbc307543c2cd3e1e7d07bbfedbb3.jpg"
// // // //               alt="Small Image 1"
// // // //               className="w-full h-1/2 object-cover shadow-[#000000] shadow-2xl rounded-tr-full"
// // // //             />
// // // //             <img
// // // //               src="https://i.pinimg.com/564x/68/f8/d6/68f8d61289daa2bb5f0f26dbed8c6ed6.jpg"
// // // //               alt="Small Image 2"
// // // //               className="w-full h-1/2 object-cover shadow-[#111112] shadow-2xl rounded-br-full"
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //     </div>
// // // //     </>
// // // //   )
// // // // }

// // // // export default Next
// // // // import React from 'react';

// // // // const Next = () => {
// // // //   const benefits = [
// // // //     "Find local professionals easily",
// // // //     "Get doorstep services at your location",
// // // //     "Connect with area experts quickly",
// // // //     "Wide range of professions covered",
// // // //     "Simple and fast registration process",
// // // //     "Transparent pricing from professionals",
// // // //     "Read customer reviews and ratings",
// // // //     "Reliable and vetted professionals"
// // // //   ];

// // // //   const images = [
// // // //     "https://i.pinimg.com/564x/fd/4f/1f/fd4f1f38bd98008ed2e015df9a0dbea8.jpg", // Replace with actual image URLs
// // // //     "https://i.pinimg.com/564x/21/c7/0d/21c70d04e1c4c263c61d0ccab806fd71.jpg",
// // // //     "https://i.pinimg.com/564x/21/1a/87/211a87130cb57ca660ffe0fa31736402.jpg",
// // // //     "https://i.pinimg.com/564x/df/91/56/df9156f20e67562337caf380d38571d1.jpg",
// // // //     "https://i.pinimg.com/564x/5c/61/d1/5c61d1925da1cd891c5c27abbafbe888.jpg",
// // // //     "https://i.pinimg.com/564x/2d/2a/ff/2d2affc2e8ac43c3b5d2a8f0c908aa94.jpg",
// // // //     "https://i.pinimg.com/564x/57/7e/a8/577ea8ddd010b4c13e07fdd34e5914b4.jpg",
// // // //     "https://i.pinimg.com/736x/10/2c/66/102c66dab3dc98386eb34f7195825f1f.jpg",
// // // //   ];

// // // //   return (
// // // //     <>
// // // //       <div className="font-Poppins h-screen py-20 flex flex-col items-center mb-48  ">
// // // //         <div className="text-center">
// // // //           <h1 className="bg-gradient-to-t from-indigo-900 via-indigo-700 to-[#cc89f0] text-transparent bg-clip-text text-center font-semibold text-3xl py-0">
// // // //             Benefits of Mechfinder
// // // //           </h1>
// // // //         </div>

// // // //         {/* Boxes with Benefits */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4    ">
// // // //           {benefits.map((benefit, index) => (
// // // //             <div key={index} className="flex flex-col items-center">
// // // //               <div className="w-64 h-64 mt-12 bg-indigo-500 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#000000af] transition-shadow duration-300 flex items-center justify-center relative overflow-hidden">
// // // //                 {/* Image */}
// // // //                 <img
// // // //                   src={images[index]}
// // // //                   alt={`Benefit ${index + 1}`}
// // // //                   className="w-full h-full  object-cover"
// // // //                 />
// // // //                 {/* Darker Gradient Overlay */}
// // // //                 <div className="absolute inset-0 bg-gradient-to-b from-[#00000087] via-[#00000067] to-transparent opacity-60"></div>
// // // //               </div>
// // // //               <p className="mt-4 text-center font-medium text-black text-md px-4">{benefit}</p>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // // export default Next;

// // // import React from 'react';

// // // const Next = () => {
// // //   const cards = [
// // //     {
// // //       title: "Find local professionals easily",
// // //       body: "Search and connect with local experts in your area.",
// // //       image: "https://i.pinimg.com/564x/fd/4f/1f/fd4f1f38bd98008ed2e015df9a0dbea8.jpg"
// // //     },
// // //     {
// // //       title: "Get doorstep services",
// // //       body: "Professionals come to your location for services.",
// // //       image: "https://i.pinimg.com/564x/21/c7/0d/21c70d04e1c4c263c61d0ccab806fd71.jpg"
// // //     },
// // //     {
// // //       title: "Connect with area experts",
// // //       body: "Quickly find and hire experts in your local area.",
// // //       image: "https://i.pinimg.com/564x/21/1a/87/211a87130cb57ca660ffe0fa31736402.jpg"
// // //     },
// // //     {
// // //       title: "Wide range of professions",
// // //       body: "Find professionals across various fields and industries.",
// // //       image: "https://i.pinimg.com/564x/df/91/56/df9156f20e67562337caf380d38571d1.jpg"
// // //     },
// // //     {
// // //       title: "Fast registration process",
// // //       body: "Sign up quickly and start finding professionals instantly.",
// // //       image: "https://i.pinimg.com/564x/5c/61/d1/5c61d1925da1cd891c5c27abbafbe888.jpg"
// // //     },
// // //     {
// // //       title: "Transparent pricing",
// // //       body: "Know the prices upfront, no hidden costs.",
// // //       image: "https://i.pinimg.com/564x/2d/2a/ff/2d2affc2e8ac43c3b5d2a8f0c908aa94.jpg"
// // //     },
// // //     {
// // //       title: "Read customer reviews",
// // //       body: "See what others have to say about the professionals.",
// // //       image: "https://i.pinimg.com/564x/57/7e/a8/577ea8ddd010b4c13e07fdd34e5914b4.jpg"
// // //     },
// // //     {
// // //       title: "Reliable and vetted professionals",
// // //       body: "Work with professionals you can trust.",
// // //       image: "https://i.pinimg.com/736x/10/2c/66/102c66dab3dc98386eb34f7195825f1f.jpg"
// // //     }
// // //   ];

// // //   return (
// // //     <>
// // //     <div className=' font-Poppins mt-10 md:mb-20 px-28'>
// // //     <h1 className='   bg-gradient-to-r from-indigo-400 via-indigo-700 to-[#cc89f0] text-transparent bg-clip-text text-center font-semibold text-4xl  '>
// // //         Benefits of Mechfinder
// // //       </h1>
    
// // //     <div className="grid grid-cols-1 font-Poppins md:grid-cols-2 lg:grid-cols-4  gap-10 mt-10">
        
// // //       {cards.map((card, index) => (
// // //         <div key={index} className="card bg-white mt-8 hover:shadow-black hover:shadow-2xl shadow-xl rounded-xl overflow-hidden">
// // //           <img
// // //             src={card.image}
// // //             alt={card.title}
// // //             className="w-full rounded-2xl h-48 object-cover"
// // //           />
// // //           <div className="p-4">
// // //             <p className="text-title font-semibold text-lg text-center">{card.title}</p>
// // //             {/* <p className="text-body text-gray-600 mt-2"></p> */}
// // //             <button className="card-button   bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500">
// // //             {card.body}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div></div>
// // //     </>
// // //   );
// // // }

// // // export default Next;


// // import React from 'react';

// // const Next = () => {
// //   const cards = [
// //     {
// //       title: "Find local professionals easily",
// //       body: "Search and connect with local experts in your area.",
// //       image: "https://i.pinimg.com/564x/fd/4f/1f/fd4f1f38bd98008ed2e015df9a0dbea8.jpg"
// //     },
// //     {
// //       title: "Get doorstep services",
// //       body: "Professionals come to your location for services.",
// //       image: "https://i.pinimg.com/564x/21/c7/0d/21c70d04e1c4c263c61d0ccab806fd71.jpg"
// //     },
// //     {
// //       title: "Connect with area experts",
// //       body: "Quickly find and hire experts in your local area.",
// //       image: "https://i.pinimg.com/564x/21/1a/87/211a87130cb57ca660ffe0fa31736402.jpg"
// //     },
// //     {
// //       title: "Wide range of professions",
// //       body: "Find professionals across various fields and industries.",
// //       image: "https://i.pinimg.com/564x/df/91/56/df9156f20e67562337caf380d38571d1.jpg"
// //     },
// //     {
// //       title: "Fast registration process",
// //       body: "Sign up quickly and start finding professionals instantly.",
// //       image: "https://i.pinimg.com/564x/5c/61/d1/5c61d1925da1cd891c5c27abbafbe888.jpg"
// //     },
// //     {
// //       title: "Transparent pricing",
// //       body: "Know the prices upfront, no hidden costs.",
// //       image: "https://i.pinimg.com/564x/2d/2a/ff/2d2affc2e8ac43c3b5d2a8f0c908aa94.jpg"
// //     },
// //     {
// //       title: "Read customer reviews",
// //       body: "See what others have to say about the professionals.",
// //       image: "https://i.pinimg.com/564x/57/7e/a8/577ea8ddd010b4c13e07fdd34e5914b4.jpg"
// //     },
// //     {
// //       title: "Reliable and vetted professionals",
// //       body: "Work with professionals you can trust.",
// //       image: "https://i.pinimg.com/736x/10/2c/66/102c66dab3dc98386eb34f7195825f1f.jpg"
// //     }
// //   ];

// //   return (
// //     <>
// //       <div className='font-Poppins mt-10 mb-20 px-4 md:px-10 lg:px-20'>
// //         <h1 className='bg-gradient-to-r from-indigo-400 via-indigo-700 to-[#cc89f0] text-transparent bg-clip-text text-center font-semibold text-4xl'>
// //           Benefits of Mechfinder
// //         </h1>
      
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
// //           {cards.map((card, index) => (
// //             <div key={index} className="card bg-white mt-8 hover:shadow-lg shadow-xl rounded-xl overflow-hidden transition-shadow duration-300">
// //               <img
// //                 src={card.image}
// //                 alt={card.title}
// //                 className="w-full rounded-t-xl h-48 object-cover"
// //               />
// //               <div className="p-4">
// //                 <p className="text-title font-semibold text-lg text-center">{card.title}</p>
// //                 <button className="card-button bg-indigo-600 text-white py-2 px-4 rounded-lg mt-2 hover:bg-indigo-500 transition duration-200 w-full text-center">
// //                   {card.body}
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Next;


// import React from 'react';

// const Next = () => {
//   const cards = [
//     {
//       title: "Find local professionals easily",
//       body: "Search and connect with local experts in your area.",
//       image: "https://i.pinimg.com/564x/fd/4f/1f/fd4f1f38bd98008ed2e015df9a0dbea8.jpg"
//     },
//     {
//       title: "Get doorstep services",
//       body: "Professionals come to your location for services.",
//       image: "https://i.pinimg.com/564x/21/c7/0d/21c70d04e1c4c263c61d0ccab806fd71.jpg"
//     },
//     {
//       title: "Connect with area experts",
//       body: "Quickly find and hire experts in your local area.",
//       image: "https://i.pinimg.com/564x/21/1a/87/211a87130cb57ca660ffe0fa31736402.jpg"
//     },
//     {
//       title: "Wide range of professions",
//       body: "Find professionals across various fields and industries.",
//       image: "https://i.pinimg.com/564x/df/91/56/df9156f20e67562337caf380d38571d1.jpg"
//     },
//     {
//       title: "Fast registration process",
//       body: "Sign up quickly and start finding professionals instantly.",
//       image: "https://i.pinimg.com/564x/5c/61/d1/5c61d1925da1cd891c5c27abbafbe888.jpg"
//     },
//     {
//       title: "Transparent pricing",
//       body: "Know the prices upfront, no hidden costs.",
//       image: "https://i.pinimg.com/564x/2d/2a/ff/2d2affc2e8ac43c3b5d2a8f0c908aa94.jpg"
//     },
//     {
//       title: "Read customer reviews",
//       body: "See what others have to say about the professionals.",
//       image: "https://i.pinimg.com/564x/57/7e/a8/577ea8ddd010b4c13e07fdd34e5914b4.jpg"
//     },
//     {
//       title: "Reliable and vetted professionals",
//       body: "Work with professionals you can trust.",
//       image: "https://i.pinimg.com/736x/10/2c/66/102c66dab3dc98386eb34f7195825f1f.jpg"
//     }
//   ];

//   return (
//     <>
//       <div className='font-Poppins mt-10 mb-20 px-4 md:px-10 lg:px-20'>
//         <h1 className='bg-gradient-to-r from-indigo-400 via-indigo-700 to-[#cc89f0] text-transparent bg-clip-text text-center font-semibold text-4xl mb-6 shadow-lg'>
//           Benefits of Mechfinder
//         </h1>
      
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 justify-items-center">
//           {cards.map((card, index) => (
//             <div key={index} className="card bg-white mt-8 hover:shadow-lg shadow-xl rounded-xl overflow-hidden transition-shadow duration-300 border border-gray-300 max-w-xs">
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="w-full rounded-t-xl h-48 object-cover transition-transform duration-300 hover:scale-105"
//               />
//               <div className="p-4">
//                 <p className="text-title font-semibold text-lg text-center mb-2">{card.title}</p>
//                 <button className="card-button bg-indigo-600 text-white py-2 px-4 rounded-lg mt-2 hover:bg-indigo-500 transition duration-200 w-full text-center shadow-md hover:shadow-lg">
//                   {card.body}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Next;


import React from 'react';

const Next = () => {
  const cards = [
    {
      title: "Find local professionals easily",
      body: "Search and connect with local experts in your area.",
      image: "https://i.pinimg.com/564x/fd/4f/1f/fd4f1f38bd98008ed2e015df9a0dbea8.jpg"
    },
    {
      title: "Get doorstep services",
      body: "Professionals come to your location for services.",
      image: "https://i.pinimg.com/564x/21/c7/0d/21c70d04e1c4c263c61d0ccab806fd71.jpg"
    },
    {
      title: "Connect with area experts",
      body: "Quickly find and hire experts in your local area.",
      image: "https://i.pinimg.com/564x/21/1a/87/211a87130cb57ca660ffe0fa31736402.jpg"
    },
    {
      title: "Wide range of professions",
      body: "Find professionals across various fields and industries.",
      image: "https://i.pinimg.com/564x/df/91/56/df9156f20e67562337caf380d38571d1.jpg"
    },
    {
      title: "Fast registration process",
      body: "Sign up quickly and start finding professionals instantly.",
      image: "https://i.pinimg.com/564x/5c/61/d1/5c61d1925da1cd891c5c27abbafbe888.jpg"
    },
    {
      title: "Transparent pricing",
      body: "Know the prices upfront, no hidden costs.",
      image: "https://i.pinimg.com/564x/2d/2a/ff/2d2affc2e8ac43c3b5d2a8f0c908aa94.jpg"
    },
    {
      title: "Read customer reviews",
      body: "See what others have to say about the professionals.",
      image: "https://i.pinimg.com/564x/57/7e/a8/577ea8ddd010b4c13e07fdd34e5914b4.jpg"
    },
    {
      title: "Reliable and vetted professionals",
      body: "Work with professionals you can trust.",
      image: "https://i.pinimg.com/736x/10/2c/66/102c66dab3dc98386eb34f7195825f1f.jpg"
    }
  ];

  return (
    <div className='font-Poppins mt-10 mb-20 px-4 md:px-10 lg:px-20'>
      <h1 className='bg-gradient-to-r from-indigo-400 via-indigo-700 to-[#cc89f0] text-transparent bg-clip-text text-center font-semibold text-4xl mb-6 shadow-lg'>
        Benefits of Mechfinder
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 justify-items-center">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="card bg-white mt-8 hover:shadow-lg shadow-xl rounded-xl overflow-hidden transition-shadow duration-300 border border-gray-300 max-w-xs transform hover:scale-105"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full rounded-t-xl h-48 object-cover transition-transform duration-300"
              aria-label={`Image representing ${card.title}`}
            />
            <div className="p-4">
              <p className="text-title font-semibold text-lg text-center mb-2">{card.title}</p>
              <button 
                className="card-button bg-indigo-600 text-white py-2 px-4 rounded-lg mt-2 hover:bg-indigo-500 transition duration-200 w-full text-center shadow-md hover:shadow-lg"
                aria-label={card.body}
              >
                {card.body}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Next;
