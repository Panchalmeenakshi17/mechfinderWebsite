// import React, { useState, useEffect } from "react";
// import { Parallax } from "react-parallax";
// import About from "./About";
// import Header from "./Header";

// const backgroundImages = [
//   "https://i.pinimg.com/564x/dd/bc/f5/ddbcf5e920a9423b76950a925da00efa.jpg",
//   // Other images if needed
// ];

// const words = ["plumber", "mechanic", "electrician", "service provider", "labourer", "worker", "meal-maker", "Safai wala"];

// const Home = () => {
//   const [bgImage, setBgImage] = useState(backgroundImages[0]);
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typingSpeed, setTypingSpeed] = useState(100);

//   // Background Image Interval
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setBgImage((prevImage) => {
//         const currentIndex = backgroundImages.indexOf(prevImage);
//         const nextIndex = (currentIndex + 1) % backgroundImages.length;
//         return backgroundImages[nextIndex];
//       });
//     }, 3000); // Change every 3 seconds

//     return () => clearInterval(intervalId); // Cleanup interval on component unmount
//   }, []);

//   // Typing Effect
//   useEffect(() => {
//     const handleTyping = () => {
//       const currentWord = words[currentWordIndex];
//       if (isDeleting) {
//         setDisplayText((prev) => prev.slice(0, -1));
//         setTypingSpeed(50); // Faster when deleting
//       } else {
//         setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
//         setTypingSpeed(100); // Normal speed when typing
//       }

//       // When word is fully typed or deleted, toggle typing/deleting
//       if (!isDeleting && displayText === currentWord) {
//         setTimeout(() => setIsDeleting(true), 2000); // Wait 2 seconds before deleting
//       } else if (isDeleting && displayText === "") {
//         setIsDeleting(false);
//         setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to next word
//       }
//     };

//     const typingInterval = setTimeout(handleTyping, typingSpeed);

//     return () => clearTimeout(typingInterval); // Cleanup interval
//   }, [displayText, isDeleting, typingSpeed, currentWordIndex]);

//   return (
//     <>
//       <Header />
//       <div className="relative h-screen overflow-hidden">
//         {/* Background Images */}
//         <div className="background-container">
//           {backgroundImages.map((image, index) => (
//             <div
//               key={index}
//               className={`background-image ${bgImage === image ? "active" : ""}`}
//               style={{ backgroundImage: `url(${image})` }}
//             />
//           ))}
//         </div>

//         {/* Content */}
//         <Parallax
//           bgImage={bgImage}
//           bgImageAlt="Background"
//           strength={300} // Reduced strength for a subtler effect
//           className="relative h-screen flex items-center justify-left"
//         >
//           {/* Full-Screen Overlay */}
//           <div className="absolute h-screen w-screen inset-0 bg-[#9fbacd] bg-opacity-10 backdrop-blur-md z-0"></div>

//           {/* Content */}
//           <div className="relative font-Poppins px-20 z-10 text-left p-4 flex items-center justify-left">
//             <div className="w-1/2">
//               <h1 className="text-6xl font-medium text-white px-20">
//                 Facing a lot of difficulties in Finding <span className="text-indigo-500">{displayText}</span>?
//               </h1>
//               <h2 className="text-2xl mt-4 font-medium text-white px-20">
//                 Discover top-rated service providers in your area and get instant quotes.
//               </h2>
//             </div>
//             <div className="w-1/2 flex justify-center">
//               <div className="floating-wrapper">
//                 <div className="curvy-bg"></div>
//                 <img
//                   src="ss.png" // Replace with your image URL
//                   alt="Service Image"
//                   className="floating-image"
//                 />
//               </div>
//             </div>
//           </div>
//         </Parallax>
//       </div>
//       <About />
//     </>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import Header from "./Header";
import Below from "./Below";
import Third from "./Third";

const backgroundImages = [
  // "https://i.pinimg.com/564x/dd/bc/f5/ddbcf5e920a9423b76950a925da00efa.jpg",
  "https://i.pinimg.com/564x/00/f3/16/00f316692de75946c24e1cf077faa519.jpg"
  // Other background images if needed
];

const floatingImages = [
  "https://i.pinimg.com/564x/2d/eb/e8/2debe867fa196f70cc97ee9ea27f1ef1.jpg", 
  'https://i.pinimg.com/564x/e9/a1/69/e9a16935a42822e76bac00848e61ed5f.jpg',
  "https://i.pinimg.com/564x/1f/a2/e9/1fa2e958959281529234c695116abf61.jpg",
  "https://i.pinimg.com/564x/7a/1c/c4/7a1cc44e8356752747500a5271cd4325.jpg",
  'https://content3.jdmagicbox.com/comp/pune/c5/020pxx20.xx20.190405110327.h3c5/catalogue/super-fast-puncher-service-pune-1mcbssikwt.jpg',
  'https://i.pinimg.com/564x/a5/37/29/a537294a019964af7b759836dd11cfff.jpg',
  'https://images.bhaskarassets.com/web2images/521/2022/03/28/orig_orig1641775050_1648419455.jpg',
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
  "puncture-worker",
  "carpenter",
  "painter",
  "gardener",
  "cleaner",
  "welder",
  "mason",
  "roofing-specialist",
  "hvac-technician",
  "landscaper",
  "tiler",
  "construction-worker",
  "tile-installer",
  "furniture-maker",
  "sanitation-worker",
  "security-guard",
  "tailor",
  "beautician",
  "driver",
  "cook-chef",
  "photographer",
  "car-washer",
  "packager",
  "other"
];


const Home = () => {
  const [bgImage, setBgImage] = useState(backgroundImages[0]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [currentFloatingImageIndex, setCurrentFloatingImageIndex] = useState(0);

  // Background Image Interval
  useEffect(() => {
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
  useEffect(() => {
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

  // Floating Image Interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFloatingImageIndex((prevIndex) => (prevIndex + 1) % floatingImages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Header />
      <div className="relative h-screen overflow-hidden">
        <div className="background-container absolute inset-0">
          <div
            className="background-image w-full h-full"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        </div>

        <Parallax
          bgImage={bgImage}
          bgImageAlt="Background"
          strength={300}
          className="relative h-screen flex items-center justify-left"
        >
          <div className="absolute h-screen w-screen inset-0 bg-[#9fbacd] bg-opacity-10 backdrop-blur-md z-0"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(8px)",
                zIndex: -1,
              }}
            ></div>
          </div>

          <div className="relative font-Poppins bg-red-0 px-10 z-10 text-left p-4 flex items-center justify-left">
            <div className="w-1/2 ml-20 bg-yellow-0">
              <h1 className="text-6xl font-medium text-white text-left">
                Facing a lot of difficulties in Finding any <span className="text-indigo-500">{displayText}</span>?
              </h1>
              <h2 className="text-2xl mt-10 font-medium text-white text-left">
                Discover top-rated service providers in your area and get instant quotes.
              </h2>
            </div>
            <div className="w-1/2 flex justify-center relative">
              <div className="floating-wrapper relative">
                <div
                  className="absolute rounded-full inset-0 flex items-center justify-center blur-2xl shadow-2xl shadow-[#ce7eff] bg-[#4f46e5] opacity-70 animate-morph"
                  style={{
                    zIndex: -1,
                  }}
                ></div>
                <img
                  src={floatingImages[currentFloatingImageIndex]}
                  alt="Service Image"
                  className="floating-image rounded-full shadow-2xl shadow-[#0d0d0d] relative z-10 w-[400px] h-[400px] object-cover animate-morph"
                />
              </div>
            </div>
            
          </div>
          
        </Parallax>
      </div>
      <Third />
      <Below />
    </>
  );
};

export default Home;
