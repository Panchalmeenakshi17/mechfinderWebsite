import React from "react";
import { NavLink } from "react-router-dom";
import Download from "./Download";
import Testimonials from "./Marquee";
import Next from "./Next";
import Allshops from "./Allshops";
import MultiIncrementor from "./NumberIncrementer";
import PremiumPage from "./PremiumPage";
import MIne from "./MIne";
const Neww = () => {
  const items = [
    {
      imageUrl:
        "https://i.pinimg.com/564x/4f/85/88/4f85882a250bbdb6d7f1387e0ecd55a8.jpg", // Image 1
      title: "Plumber",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/b3/13/d0/b313d094e4d94322fe954d4090aea76f.jpg", // Image 3
      title: "Cook",
    },
    {
      imageUrl:
        "https://i.pinimg.com/736x/ce/74/cc/ce74cce261194583ca8a800d42ca4fcc.jpg", // Image 2
      title: "Electrician",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/c5/65/c9/c565c97014acbb2aeda94ef014e547de.jpg", // Image 4
      title: "Mechanic",
    },
    {
      imageUrl:
        "https://i.pinimg.com/originals/7d/22/72/7d2272d127e5c81d4d8591f65e384b07.gif", // Image 4
      title: "Driver",
    },
    {
      imageUrl:
        "https://i.pinimg.com/enabled_lo/564x/89/ed/80/89ed806e5aa76a8c81e635ce870a8741.jpg", // Image 4
      title: "Photogragher",
    },
    {
      imageUrl:
        "https://i.pinimg.com/564x/c5/65/c9/c565c97014acbb2aeda94ef014e547de.jpg", // Image 4
      title: "Mechanic",
    },
  ];
  return (
    <>
    
      <div className=" h-full bg-gray-100 m-0">
        <div className="flex justify-center mb-10">
          <div className="flex mt- shadow-inner shadow-gray-00 bg-gray-300 w-full transition ease-in-out overflow-hidden">
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
                    {/* Styling the first letter */}
                    <span className="text-3xl font-semibold backdrop-blur-sm">
                      {item.title.charAt(0)}
                    </span>
                    <span className="text-xl">{item.title.slice(1)}</span>
                  </p>
                </span>
              ))}
            </div>
          </div>
        </div>
<MultiIncrementor/>

        <div className="md:p-16 p-4">
          <h1 className="font-semibold font-Poppins text-2xl md:text-3xl">
            Need any Plumber or Electrician or maybe a Cook?
          </h1>
          <div className="bg-blue-00 w-full md:h-[450px] justify-center gap-20 md:flex mt-8 md:mt-20">
            {/* <div className="bg-blue-500 w-1/4 rounded-5xl h-1/2 shadow-2xl shadow-black flex flex-col items-center justify-center">
      <img src="https://i.pinimg.com/564x/75/94/bc/7594bc73658dfa5819610d6b1aa0b226.jpg" alt="Example" className="mb-4 rounded-xl w-1/2 h-1/2" />
      <h1 className=" font-Poppins text-xl font text-white font-semibold">Register as Individual</h1>
    </div>

    <div className="bg-blue-500 w-1/4 rounded-5xl h-1/2 shadow-2xl shadow-black flex flex-col items-center justify-center">
      <img src="https://i.pinimg.com/564x/78/44/80/784480366a8cf77bb0f7f25272b2b47d.jpg" alt="Example" className="mb-4 rounded-xl w-1/2 h-1/2" />
      <h1 className=" font-Poppins text-xl font text-white font-semibold">Register as Shop Owner</h1>
    </div> */}
            <NavLink
              to="/SignUp"
              className="bg-blue-500 w-3/4  ml-8 md:ml-0   h-[280px] md:w-1/5 md:mb-20 hover:bg-blue-600 hover:scale-105 transition-transform duration-300 rounded-5xl md:h-[300px] shadow-2xl shadow-black flex flex-col items-center justify-center  ease-in-out   hover:cursor-pointer"
            >
              <div className="  shadow-black flex flex-col items-center justify-center">
                <img
                  src="https://i.pinimg.com/564x/77/75/5e/77755e565ef7ddbff2546231cd8732bf.jpg"
                  alt="Example"
                  className="mb-4 rounded-xl   h-1/2"
                />
                <h1 className=" font-Poppins text-xl font-semibold text-white">
                  Register as User
                </h1>
              </div>
            </NavLink>
            <div className="md:mt-1 mt-10  h-full md:w-1/2">
              <h1 className="font-Poppins text-2xl font-semibold">
                Register as User
              </h1>

              <p className="font-Poppins mt-5 text-lg">
                When a user registers on{" "}
                <span className="font-semibold text-blue-500">MechFinder</span>,
                they gain access to a variety of services from local
                professionals like plumbers, electricians, and cooks.
              </p>

              <h2 className="font-Poppins text-xl font-semibold mt-5">
                Benefits of Registering:
              </h2>

              <ul className="list-disc list-inside font-Poppins mt-3 space-y-2">
                <li>
                  <span className="font-semibold">Post service requests:</span>{" "}
                  Whether it's a home repair or hiring a cook, registered users
                  can post their specific requirements, and nearby professionals
                  can respond to the job.
                </li>
                <li>
                  <span className="font-semibold">Get quick responses:</span>{" "}
                  Registered users receive timely responses from trusted
                  professionals in their area.
                </li>
                <li>
                  <span className="font-semibold">
                    View and unlock contact details:
                  </span>{" "}
                  With MechFinder's premium option, users can unlock
                  professional contact details to directly communicate with the
                  service provider.
                </li>
              </ul>

              <p className="font-Poppins mt-5 text-lg">
                Registering as a user is simple and ensures you get the help you
                need from skilled service providers in your neighborhood.
              </p>
            </div>
          </div>
          <div
            className="md:rounded-bl-4xl rounded-bl-3xl rounded-tr-4xl mt-7 md:mt-10 md:rounded-tr-6xl shadow-xl shadow-gray-400 md:h-[600px] relative"
            style={{
              backgroundImage: `
      linear-gradient(to right, #818df8dd, #818df8eb,#818df84d), 
      url('https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" p-6 md:p-14">
              <h1 className="font-semibold animate-h1 font-Poppins md:text-xl">
                Looking for any Work?
              </h1>
              <h2 className="font-semibold animate-h2 font-Poppins text-2xl md:text-3xl">
                or wanna make your shop grow n' Famous?
              </h2>
              <div className="md:mt-20 mt-5 md:flex justify-start gap-6">
                <NavLink
                  to="/SignUp"
                  className="bg-white w-5/6 md:w-1/5 hover:scale-105 transition-transform duration-300 rounded-5xl h-[260px] md:h-[300px] shadow-2xl shadow-black flex flex-col items-center justify-center md:ml-0 ml-6 ease-in-out hover:bg-gray-200 hover:cursor-pointer"
                >
                  <div className=" rounded-5xl md:h-[280px]  flex flex-col items-center justify-center transition duration-300 ease-in-out  hover:cursor-pointer">
                    <img
                      src="https://i.pinimg.com/564x/75/94/bc/7594bc73658dfa5819610d6b1aa0b226.jpg"
                      alt="Example"
                      className="mb-4 rounded-xl  h-1/2"
                    />
                    <h1 className="font-Poppins text-lg text-center text-blue-500 font-semibold">
                      Register as Individual
                    </h1>
                  </div>
                </NavLink>

                <NavLink
                  to="/SignUp"
                  className="bg-white mt-6 w-5/6 md:w-1/5 hover:scale-105 transition-transform duration-300 md:ml-0 ml-6 rounded-5xl h-[260px] md:h-[300px] shadow-2xl shadow-black flex flex-col items-center justify-center ease-in-out hover:bg-gray-200 hover:cursor-pointer"
                >
                  <div className="rounded-5xl   flex flex-col items-center justify-center transition duration-300 ease-in-out   hover:cursor-pointer">
                    <img
                      src="https://i.pinimg.com/564x/78/44/80/784480366a8cf77bb0f7f25272b2b47d.jpg"
                      alt="Example"
                      className="mb-4 rounded-xl h-1/2"
                    />
                    <h1 className="font-Poppins text-center text-lg text-blue-500 font-semibold">
                      Register as Shop Owner
                    </h1>
                  </div>
                </NavLink>
                <div className="bg-[#090909d0] hover:scale-105 transition-transform duration-300 backdrop-blur-md md:w-[340px] rounded-3xl md:h-[400px] md:p-0 p-4 mt-6 font-Poppins md:-mt-10 shadow-2xl shadow-black flex flex-col items-center justify-center 0 ease-in-out hover:cursor-pointer">
                  <h1 className="font-Poppins text-xl text-left text-blue-700 font-semibold">
                    Register as Individual
                  </h1>
                  <p className="text-white text-sm text-center mt-5 px-4">
                    By registering as an <strong>Individual</strong> on
                    MechFinder, you unlock access to a variety of local service
                    providers:
                  </p>
                  <ul className="list-disc text-white text-sm mt-4 px-6">
                    <li>
                      <strong>Post Service Requests</strong>: Submit specific
                      needs like repairs or cooking assistance.
                    </li>
                    <li>
                      <strong>Connect with Nearby Professionals</strong>: Get
                      responses from trusted local providers.
                    </li>
                    <li>
                      <strong>Unlock Contact Details</strong>: Use the premium
                      option to directly connect with professionals.
                    </li>
                  </ul>
                </div>

                <div className="bg-[#090909d0] hover:scale-105 transition-transform duration-300 backdrop-blur-md md:w-[340px] rounded-3xl md:h-[400px] md:p-0 p-4 mt-6 font-Poppins md:-mt-10 shadow-2xl shadow-black flex flex-col items-center justify-center   ease-in-out hover:cursor-pointer">
                  <h1 className="font-Poppins text-center text-xl text-blue-700 font-semibold">
                    Register as Shop Owner
                  </h1>
                  <p className="text-white text-sm text-center mt-5 px-4">
                    As a <strong>Shop Owner</strong>, registering on MechFinder
                    offers several benefits:
                  </p>
                  <ul className="list-disc text-white text-sm mt-4 px-6">
                    <li>
                      <strong>Promote Your Business</strong>: Gain visibility by
                      listing your services on the platform.
                    </li>
                    <li>
                      <strong>Respond to Requests</strong>: Reach out to users
                      seeking the services your shop provides.
                    </li>
                    <li>
                      <strong>Grow Your Shop’s Reputation</strong>: Utilize the
                      platform to attract more customers and boost credibility.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<Allshops/>

<Testimonials/>
{/* <Next/> */}
     {/* <MIne/> */}
     <PremiumPage/>
      <Download />

    </>
  );
};

export default Neww;
