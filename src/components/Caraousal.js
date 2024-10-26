import React, { useState, useEffect } from "react";
import Header from "./Header";
import Third from "./Third";
import Below from "./Below";
import Neww from "./Neww";
import { firestore } from "../firebase"; // Adjust the import path according to your setup
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { NavLink } from "react-router-dom";
import Allshops from "./Allshops";
 
const images = [
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1626186767260-c9301d4dd628?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1627660080110-20045fd3875d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1480455454781-1af590be2a58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1708540084677-dc5838b37627?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const captions = [
  "MechFinder: Your go-to platform for connecting with local service providers—plumbers, electricians, painters, and more.",
  "Post a query in seconds and get immediate responses from trusted professionals in your area.",
  "Unlock premium features for unlimited access to provider details and seamless interaction.",
  "Service providers can register their businesses for enhanced visibility and connect with more customers.",
  "MechFinder makes it easier than ever to find reliable solutions for all your home and repair needs.",
];
const words = [
  "plumber",
  "Phone-Repair",
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
  "other",
];
const items = [
  {
    imageUrl: "https://i.pinimg.com/564x/4f/85/88/4f85882a250bbdb6d7f1387e0ecd55a8.jpg", // Image 1
    title: "Plumber",
  },
  {
    imageUrl: "https://i.pinimg.com/736x/b3/13/d0/b313d094e4d94322fe954d4090aea76f.jpg", // Image 3
    title: "Cook",
  },
  {
    imageUrl: "https://i.pinimg.com/736x/ce/74/cc/ce74cce261194583ca8a800d42ca4fcc.jpg", // Image 2
    title: "Electrician",
  },
  {
    imageUrl: "https://i.pinimg.com/564x/c5/65/c9/c565c97014acbb2aeda94ef014e547de.jpg", // Image 4
    title: "Mechanic",
  },
  {
    imageUrl: "https://i.pinimg.com/originals/7d/22/72/7d2272d127e5c81d4d8591f65e384b07.gif", // Image 4
    title: "Driver",
  },
  {
    imageUrl: "https://i.pinimg.com/enabled_lo/564x/89/ed/80/89ed806e5aa76a8c81e635ce870a8741.jpg", // Image 4
    title: "Photogragher",
  },
  {
    imageUrl: "https://i.pinimg.com/564x/c5/65/c9/c565c97014acbb2aeda94ef014e547de.jpg", // Image 4
    title: "Mechanic",
  },
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0); // To track scroll position for parallax effect
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // New state for loading

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any fields are empty
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all the fields before submitting.");
      return; // Stop submission if fields are empty
    }

    setLoading(true); // Start loader

    try {
      // Add form data to Firestore collection 'contactForms'
      await addDoc(collection(firestore, "contactForms"), {
        ...formData,
        timestamp: serverTimestamp(), // Optionally add a server timestamp
      });

      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Adding smooth transitions for the slideshow itself
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  useEffect(() => {
    const handleScroll = () => {
      // Throttling the scroll event for smoother updates
      requestAnimationFrame(() => {
        setScrollY(window.scrollY); // Update scroll position
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup scroll event listener
    };
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
  return (
    <>
     <div className="scroll-container">

     </div>
      <Header />
      <div id="carousel" className="relative w-full mb-10">
        <div className="relative h-96 overflow-hidden shadow-2xl shadow-[#4a4a4a] rounded-br-4xl md:rounded-bl-4xl md:rounded-br-4xl md:h-[600px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect, image moves slower
                willChange: "transform", // Optimize rendering for smoothness
              }}
            >
              <img
                src={img}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
              {/* Gradient Overlay */}
              <div className="absolute top-0 left-0 w-full h-full backdrop-blur-0 bg-gradient-to-b from-[#00000098] via-[#00000075] to-[#050314]" />
            </div>
          ))}
        </div>

        {/* Updated Caption Positioning and Styling */}
        <div
          className="absolute md:mt-0 mt-24 md:p-0 p-4 -top-0 md:top-64 md:w-2/3 w-full backdrop-blur-0 md:left-20 font-Poppins transform md:-translate-y-1/2 text-white text-xl md:text-3xl"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`, // Parallax effect, caption moves slower
            transition: "transform 0.5s ease-out", // Smooth transition for text
          }}
        >
          {captions[currentIndex]}
          <h1 className=" text-lg md:text-4xl md:mt-10 font-medium text-indigo-500">
            Example services: {displayText}{" "}
          </h1>
          <div className="flex w-2/3 md:w-1/2 mt-5 flex-col font-Poppins items-left ">
        <NavLink
          to="https://play.google.com/store/apps/details?id=com.mechfinder&hl=en_IN"
          className="bg-gradient-to-r w-full md:p-0 p-1 from-green-500 to bg-green-600 hover:bg-green-600 text-white md:py-3 md:px-5 rounded-full flex items-center space-x-3 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./images/p.jpg"
            alt="Google Play Store"
            className="md:w-8 w-6 h-6 md:h-8"
          />
          <span className="md:text-lg  text-xs font-semibold">Download Mechfinder from Play Store Now!</span>
        </NavLink>
 
      </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 flex space-x-3 transform -translate-x-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-1 h-1 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* <div className="flex justify-center mb-20">
     
   <div className="flex   mt-8 shadow-inner shadow-gray-00 bg-gray-300 w-full transition ease-in-out overflow-hidden">
      <div className="animate-marquee transition ease-in-out rounded-2xl px-6 py-9 inline-block text-white text-xl font-semibold font-Poppins whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={index}
            className="mx-4 bg-gray-100 transition ease-in-out shadow-gray-600 shadow-xl text-blue-500 rounded-2xl py-6 px-4 inline-block"
            style={{ width: "210px", height: "210px" }} // Size adjustments
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full transition ease-in-out object-cover rounded-xl"
              style={{ width: "150px", height: "150px" }} // Square image box
            />
            <p className="text-right text-2xl md:-mt-3 ">
         
              <span className="text-3xl font-semibold backdrop-blur-sm">
                {item.title.charAt(0)}
              </span>
              <span className="text-xl">
                {item.title.slice(1)}
              </span>
            </p>
          </span>
        ))}
      </div>
    </div>
  
</div> */}

<Neww/>

<div className="  font-Poppins" id="form">
                    <h2 className="mb-4 text-2xl font-bold dark:text-indigo-700">Ready to Get Started?</h2>
                    <div className="  bg-white w-4/8 flex justify-center  font-Poppins">
              <form className=" p-10 " onSubmit={handleSubmit}>
                <input
                  className="mb-4 appearance-none border rounded-full w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  className="mb-4 appearance-none border rounded-full w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  className="mb-4 appearance-none border rounded-full w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <textarea
                  className="mb-4 min-h-0 appearance-none border rounded-2xl h-64 w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline "
                  placeholder="Type your message here..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ height: "121px" }}
                ></textarea>

                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font- py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    disabled={loading} // Disable button when loading
                  >
                    {loading ? "Sending..." : "Send ➤"}
                  </button>
                  <input
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font- py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    type="reset"
                    onClick={() =>
                      setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      })
                    }
                  />
                </div>

                {loading && (
                  <p className="text-center text-gray-800 placeholder:text-gray-400 mt-4">
                    Submitting form, please wait...
                  </p>
                )}
              </form>
            </div>
                </div>
{/* 
      <Third />
      <Below /> */}
    </>
  );
};

export default Carousel;
