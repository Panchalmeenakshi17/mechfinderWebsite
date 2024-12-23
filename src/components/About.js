// import React from "react";
// import { Parallax } from "react-parallax";
// import Header from "./Header";

// const backgroundImages = [
//   "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   // Add more background images if needed
// ];

// const fixedImages = [
//   "https://i.pinimg.com/564x/4d/1f/76/4d1f769ad7187a939afd371076b013f3.jpg",
//   "https://i.pinimg.com/564x/c8/eb/a7/c8eba7f096b45c5729fded725fe79ecc.jpg",
//   "https://i.pinimg.com/736x/5e/75/a6/5e75a6ba1a59e73801c53a7315147c04.jpg",
//   "https://i.pinimg.com/564x/63/ba/8b/63ba8b45cada2398686def9c0e65dfb4.jpg",
//   "https://i.pinimg.com/564x/fd/9e/17/fd9e17611fe11d0a220f7f609300b676.jpg",
//   "https://i.pinimg.com/564x/9c/53/7b/9c537bb81e208dd4e3e8b39adcfd41d9.jpg",
//   "https://i.pinimg.com/564x/66/f1/e3/66f1e3ab1cf6e0044b7deeff1142b558.jpg",
//   "https://i.pinimg.com/564x/53/08/05/530805744a6f5d578b9f89a449e16903.jpg",
//   "https://i.pinimg.com/736x/83/6a/99/836a99a7394b2452b2d8e2d74c9ebb1c.jpg",
//   "https://i.pinimg.com/564x/92/47/3c/92473c103d80577a8d09a33039299bd2.jpg",
//   "https://i.pinimg.com/564x/b8/fa/0b/b8fa0b0ea3ee2186c6318ac1cdc69cac.jpg",
//   "https://i.pinimg.com/564x/af/06/18/af061862b6e9a1736e1bda7c47be8c2f.jpg",
//   "https://i.pinimg.com/564x/0d/0b/80/0d0b8023d6e0349ac34d6a48350a245b.jpg",
//   "https://i.pinimg.com/564x/43/6d/ca/436dca225d043cf35ca635be47ef11a8.jpg"
// ];

// const words = ["plumber", "mechanic", "electrician", "service provider", "labourer", "worker", "meal-maker", "House Cleaner"];

// const About = () => {
//   const [bgImage, setBgImage] = React.useState(backgroundImages[0]);
//   const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
//   const [displayText, setDisplayText] = React.useState("");
//   const [isDeleting, setIsDeleting] = React.useState(false);
//   const [typingSpeed, setTypingSpeed] = React.useState(100);

//   // Background Image Interval
//   React.useEffect(() => {
//     const intervalId = setInterval(() => {
//       setBgImage((prevImage) => {
//         const currentIndex = backgroundImages.indexOf(prevImage);
//         const nextIndex = (currentIndex + 1) % backgroundImages.length;
//         return backgroundImages[nextIndex];
//       });
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, []);

//   // Typing Effect
//   React.useEffect(() => {
//     const handleTyping = () => {
//       const currentWord = words[currentWordIndex];
//       if (isDeleting) {
//         setDisplayText((prev) => prev.slice(0, -1));
//         setTypingSpeed(50);
//       } else {
//         setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
//         setTypingSpeed(100);
//       }

//       if (!isDeleting && displayText === currentWord) {
//         setTimeout(() => setIsDeleting(true), 2000);
//       } else if (isDeleting && displayText === "") {
//         setIsDeleting(false);
//         setCurrentWordIndex((prev) => (prev + 1) % words.length);
//       }
//     };

//     const typingInterval = setTimeout(handleTyping, typingSpeed);

//     return () => clearTimeout(typingInterval);
//   }, [displayText, isDeleting, typingSpeed, currentWordIndex]);

//   return (
//     <>
//       <Header />
//       <div className="relative h-screen overflow-hidden">
//         <div className="background-container absolute inset-0">
//           <div
//             className="background-image w-full h-full"
//             style={{ backgroundImage: `url(${bgImage})`, objectFit: "cover" }}
//           />
//         </div>

//         <Parallax
//           bgImage={bgImage}
//           bgImageAlt="Background"
//           strength={300}
//           className="relative h-screen flex items-start justify-center"
//         >
//           <div className="flex mt-36 items-center justify-center">
//             <div className="absolute inset-0 h-screen w-screen backdrop-blur-md bg-gradient-to-b from-black via-[#000000b3] to-transparent z-0"></div>

//             <div className="absolute inset-0 flex items-center justify-center">
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   backgroundImage: `url(${bgImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                   filter: "blur(8px)",
//                   zIndex: -1,
//                 }}
//               ></div>
//             </div>

//             <div className="relative font-Poppins px-10 z-10 text-left p-4 flex items-center justify-left">
//               <div className="w-full flex justify-center overflow-hidden">
//                 <div className="marquee bg-red-800 w-full max-w-screen-xl   flex">
//                   {fixedImages.map((imgSrc, index) => (
//                     <div
//                       key={index}
//                       className="relative bg-yellow-400"
//                       style={{
//                         width: "800px",
//                         height: "300px",
//                         margin: "0 20px", // Add margin to create space between images
//                       }}
//                     >
//                       <img
//                         src={imgSrc}
//                         alt={`Fixed Image ${index}`}
//                         className="w-full h-full object-cover rounded-lg shadow-lg"
//                         style={{ height: "400px", width: "800px" }}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* <div className="w-1/2 ml-20 bg-yellow-0">
//                 <h1 className="text-6xl font-medium text-white px-10 font-Poppins text-indigo-300 uppercase text-left">
//                   Discover your streets in a new way
//                 </h1>
//               </div> */}
//             </div>
//           </div>
//         </Parallax>
//       </div>

//       {/* CSS for marquee animation */}
//       <style jsx>{`
//         .marquee {
//           display: flex;
//           animation: marquee 15s linear infinite;
//         }

//         @keyframes marquee {
//           from {
//             transform: translateX(100%);
//           }
//           to {
//             transform: translateX(-100%);
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default About;
import React , { useRef }from "react";
import { Parallax } from "react-parallax";
import Header from "./Header";
import Below from "./Below"
import Heroabout from "./Heroabout";
import NumberIncrementer from "./NumberIncrementer";
const backgroundImages = [
  "https://images.unsplash.com/photo-1496053104232-e7c7a99dafc0?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // Add more background images if needed
];

const fixedImages = [
  "https://i.pinimg.com/564x/4d/1f/76/4d1f769ad7187a939afd371076b013f3.jpg",
  "https://i.pinimg.com/564x/c8/eb/a7/c8eba7f096b45c5729fded725fe79ecc.jpg",
  "https://i.pinimg.com/736x/5e/75/a6/5e75a6ba1a59e73801c53a7315147c04.jpg",
  "https://i.pinimg.com/564x/63/ba/8b/63ba8b45cada2398686def9c0e65dfb4.jpg",
  "https://i.pinimg.com/564x/fd/9e/17/fd9e17611fe11d0a220f7f609300b676.jpg",
  "https://i.pinimg.com/564x/9c/53/7b/9c537bb81e208dd4e3e8b39adcfd41d9.jpg",
  "https://i.pinimg.com/564x/66/f1/e3/66f1e3ab1cf6e0044b7deeff1142b558.jpg",
  "https://i.pinimg.com/564x/53/08/05/530805744a6f5d578b9f89a449e16903.jpg",
  "https://i.pinimg.com/736x/83/6a/99/836a99a7394b2452b2d8e2d74c9ebb1c.jpg",
  "https://i.pinimg.com/564x/92/47/3c/92473c103d80577a8d09a33039299bd2.jpg",
  "https://i.pinimg.com/564x/b8/fa/0b/b8fa0b0ea3ee2186c6318ac1cdc69cac.jpg",
  "https://i.pinimg.com/564x/af/06/18/af061862b6e9a1736e1bda7c47be8c2f.jpg",
  "https://i.pinimg.com/564x/0d/0b/80/0d0b8023d6e0349ac34d6a48350a245b.jpg",
  "https://i.pinimg.com/564x/43/6d/ca/436dca225d043cf35ca635be47ef11a8.jpg",
];

const words = [
  "plumber",
  "mechanic",
  "electrician",
  "service provider",
  "labourer",
  "worker",
  "meal-maker",
  "House Cleaner",
];

const About = () => {
  const [bgImage, setBgImage] = React.useState(backgroundImages[0]);
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(100);
  const heroRef = useRef(null); // Create a ref for the HeroAbout section

  const scrollToHero = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the HeroAbout section smoothly
    }
  };
  // Background Image Interval
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setBgImage((prevImage) => {
        const currentIndex = backgroundImages.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % backgroundImages.length;
        return backgroundImages[nextIndex];
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // Typing Effect
  React.useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [displayText, isDeleting, typingSpeed, currentWordIndex]);

  return (
    <>
      {/* <Header />
      <div className="relative h-screen overflow-hidden">
        <div
          // bgImage={bgImage}
          // bgImageAlt="Background"
          // strength={300}
          className="relative h-[400px] bg-indigo-300 flex w items-center justify-start"
        > */}
          {/* <div
  className="absolute inset-0  "
  style={{
    background: 'linear-gradient(to right, #000000, #000000ff)' // Aap yahan apne colors change kar sakte hain
  }}
></div> */}

          {/* Overlay */}
          {/* <div className="relative  bg-yellow-00  flex h-screen w-full"> */}
            {/* <div className="w-  bg-yellow-400  flex justify- items- overflow-hidden"> */}
              {/* <div className="marquee-container flex items-center"> */}
                {/* <div className="marquee">
                  {fixedImages.map((imgSrc, index) => (
                    <div
                      key={index}
                      className="relative"
                      style={{
                        width: "300px",
                        height: "200px",
                        margin: "0 10px",
                      }}
                    >
                      <img
                        src={imgSrc}
                        alt={`Fixed Image ${index}`}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                        style={{ height: "200px", width: "300px" }}
                      />
                    </div>
                  ))}
                </div>
                <div className="marquee">
                  {fixedImages.map((imgSrc, index) => (
                    <div
                      key={index + fixedImages.length}
                      className="relative"
                      style={{
                        width: "300px",
                        height: "200px",
                        margin: "0 10px",
                      }}
                    >
                      <img
                        src={imgSrc}
                        alt={`Fixed Image ${index}`}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                        style={{ height: "200px", width: "300px" }}
                      />
                    </div>
                  ))}
                </div> */}
              {/* </div> */}
            {/* </div> */}

            {/* <div className="h-[500px] bg-teal-400  p-10 text-white flex items-center justify-left"> */}
              {/* <div className=" h-[410px] mt-40 bg-slate-50 p-10">
                <div className=" mt-20">
                <h1 className="  text-indigo-300 font-Poppins font- text-2xl">
                  {" "}
                  About us
                </h1>
                <h2 className=" bg-yellow-10 py-2 w-full font-serif   text-5xl">
                Discover your street in a new way
                </h2>
                <div className="glow-on-hover mt-10  font-Poppins"  >
                  <h1 className=" text-white font-Poppins text-center   py-3">
Explore more
                  </h1>
                </div>

                </div>
              </div> */}
              {/* <h2 className="text-4xl mt-4">{displayText}</h2> */}
             
            {/* </div> */}
            
          {/* </div>
        </div>
      </div>
      <Below/> */}
      <Header/>
<div className="md:relative  md:h-[450px] h-full overflow-hidden md:flex">
        <div className="relative  flex-1 md:flex flex-col justify-center items-start p-6 md:p-20 bg-white">
          <h1 className="mt-14 md:mt-0 font-Poppins font-semibold md:text-2xl">We are <span className="text-indigo-500 "> Mechfinder</span></h1>
          <h2 className="bg-yellow-10 py-2 w-full font-serif  text-3xl md:text-5xl">
            Discover your street in a new way
          </h2>
          <div className="bg-black md:px-5  hover:scale-95 transition ease-in-out  md:mt-10 font-Poppins" onClick={scrollToHero}>
            <h1 className="text-white font-Poppins text-center py-2 md:py-3">
              Explore more
            </h1>
          </div>
        </div>
        <div className="relative flex-1">
          <img
            src="https://i.pinimg.com/564x/6c/96/8b/6c968be6b5d485129fe6ab3d3c2aef87.jpg" // Replace with your image URL
            alt="Right Side"
            className="object-cover w-full h-" // Adjust object-cover and h-full based on your design preference
          />
        </div>
      </div>
      <div ref={heroRef}>
        
      <Heroabout/>
      {/* <NumberIncrementer  /> */}
        </div> {/* Attach the ref here */}
      <Below />
      {/* CSS for marquee animation */}
      <style jsx>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee {
          display: inline-flex;
          animation: marquee 150s linear infinite; /* Slowed down speed */
        }

        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
};

export default About;
