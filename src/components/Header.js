// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 w-full transition-colors duration-300 ease-in-out ${
//         isScrolled
//           ? " backdrop-blur-2xl bg-[#000000f4] text-black z-50"
//           : " backdrop-blur-md"
//       } font-Poppins px-28 py-4 z-10`}
//     >
//       <div className="flex justify-between items-center">
//         <div className="flex">
//           <div className="ml-6 text-indigo-400 text-xl">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "text-indigo-600 font-semibold" : ""
//               }
//             >
//               MechFinder
//             </NavLink>
//           </div>
//           <div className="ml-6 text-indigo-200 text-sm">

//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "text-indigo-600 font-semibold" : ""
//               }
//             >
//               Home
//             </NavLink>
// </div>
//           <div className="ml-6 text-indigo-200 text-sm">
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive ? "text-indigo-600 font-semibold" : ""
//               }
//             >
//               About
//             </NavLink>
           
//           </div>
//           <div className="ml-6 text-indigo-200 text-sm">
//             <NavLink
//               to="/Service"
//               className={({ isActive }) =>
//                 isActive ? "text-indigo-600 font-semibold" : ""
//               }
//             >
//               Services
//             </NavLink>
//           </div>
//           <div className="ml-6 text-indigo-200 text-sm">
//             <NavLink
//               to="/Contact"
//               className={({ isActive }) =>
//                 isActive ? "text-indigo-600 font-semibold" : ""
//               }
//             >
//               Contact
//             </NavLink>
//           </div>
//           <div className="ml-6 text-indigo-200 text-sm">
//             <NavLink
//               to="/PrivacyPolicy"
//               className={({ isActive }) =>
//                 isActive ? "text-indigo-600 font-semibold" : ""
//               }
//             >
//               Privacy Policy
//             </NavLink>
//           </div>
//         </div>
//         <div className="text-sm">
//           <NavLink
//             to="/signup"
//             className={({ isActive }) =>
//               isActive ? "text-indigo-600 font-semibold bg-indigo-500 px-4 py-2 rounded" : "text-indigo-200 bg-indigo-500 hover:bg-indigo-700  transition ease-in-out px-4 py-2 rounded-md"
//             }
//           >
//             Sign Up
//           </NavLink>
//           <NavLink
//             to="/Login"
//             className={({ isActive }) =>
//               isActive ? "text-[black] font-medium bg-indigo-500 px-4 py-2 rounded" : "text-indigo-200 ml-5 bg-indigo-500  hover:bg-indigo-700 transition ease-in-out px-4 py-2 rounded-md"
//             }
//           >
//             Log In
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full transition-colors duration-300 ease-in-out ${
        isScrolled
          ? "backdrop-blur-2xl bg-[#000000f4] text-black z-50"
          : "backdrop-blur-md"
      } font-Poppins px-4 md:px-28 py-4 z-10`}
    >
      <div className="flex justify-between items-center">
        <div className="ml-6 text-indigo-400 font-semibold text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-semibold" : ""
            }
          >
            MechFinder
          </NavLink>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src="./images/e.png" alt="" className=" w-7 h-7 text-white"/>
            {/* <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
              <span className="block w-8 h-1 bg-indigo-200 mb-1"></span>
              <span className="block w-8 h-1 bg-indigo-200 mb-1"></span>
              <span className="block w-8 h-1 bg-indigo-200"></span>
            </div> */}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-semibold ml-6" : "text-indigo-400 ml-6"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-semibold ml-6" : "text-indigo-400 ml-6"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-semibold ml-6" : "text-indigo-400 ml-6"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-semibold ml-6" : "text-indigo-400 ml-6"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/privacypolicy"
            className={({ isActive }) =>
              isActive ? "text-indigo-600 font-semibold ml-6" : "text-indigo-400 ml-6"
            }
          >
            Privacy Policy
          </NavLink>
        </div>

        {/* Signup/Login Links */}
        <div className="hidden md:flex text-sm">
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold bg-indigo-500 px-4 py-2 rounded"
                : "text-white bg-indigo-500 hover:bg-indigo-700 transition ease-in-out px-4 py-2 rounded-md"
            }
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-[black] font-medium bg-indigo-500 px-4 py-2 rounded"
                : "text-white ml-5 bg-indigo-500 hover:bg-indigo-700 transition ease-in-out px-4 py-2 rounded-md"
            }
          >
            Log In
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center transition-transform duration-500 ease-out animate-bounceInDown">
          {/* Close button (cross icon) */}
          <button
            className="absolute top-4 right-4 text-4xl text-black focus:outline-none z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>

          <div className="mt-4 text-center z-50">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold block mb-4 text-lg"
                  : "text-indigo-400 block mb-4 text-lg"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold block mb-4 text-lg"
                  : "text-indigo-400 block mb-4 text-lg"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold block mb-4 text-lg"
                  : "text-indigo-400 block mb-4 text-lg"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold block mb-4 text-lg"
                  : "text-indigo-400 block mb-4 text-lg"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink
              to="/privacypolicy"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold block mb-4 text-lg"
                  : "text-indigo-400 block mb-4 text-lg"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-600 font-semibold bg-indigo-500 px-4 py-2 rounded block mb-4"
                  : "text-white bg-indigo-500 hover:bg-indigo-700 transition ease-in-out px-4 py-2 rounded-md block mb-4"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-[black] font-medium bg-indigo-500 px-4 py-2 rounded block mb-4"
                  : "text-white bg-indigo-500 hover:bg-indigo-700 transition ease-in-out px-4 py-2 rounded-md block mb-4"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </NavLink>
          </div>
        </div>
      )}

      {/* CSS for Hamburger Menu and Animation */}
      <style>{`
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @keyframes bounceInDown {
          0% {
            opacity: 0;
            transform: translateY(-100%);
          }
          60% {
            opacity: 1;
            transform: translateY(10%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-bounceInDown {
          animation: bounceInDown 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Header;
