// // // import React, { useState } from 'react';
// // // import { firestore } from '../firebase'; // Adjust the import path according to your setup
// // // import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// // // const Contact = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     subject: '',
// // //     message: ''
// // //   });

// // //   const [loading, setLoading] = useState(false); // New state for loading

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true); // Start loader

// // //     try {
// // //       // Add form data to Firestore collection 'contactForms'
// // //       await addDoc(collection(firestore, 'contactForms'), {
// // //         ...formData,
// // //         timestamp: serverTimestamp() // Optionally add a server timestamp
// // //       });

// // //       alert('Form submitted successfully!');
// // //       setFormData({
// // //         name: '',
// // //         email: '',
// // //         subject: '',
// // //         message: ''
// // //       });
// // //     } catch (error) {
// // //       console.error('Error submitting form:', error);
// // //       alert('Failed to submit the form');
// // //     } finally {
// // //       setLoading(false); // Stop loader
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
// // //       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
// // //         <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
// // //         <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
// // //           <div className="text-center pb-6">
// // //             <h1 className="text-3xl">Contact Us!</h1>
// // //             <p className="text-gray-300">
// // //               Fill up the form below to send us a message.
// // //             </p>
// // //           </div>

// // //           <form onSubmit={handleSubmit}>
// // //             <input
// // //               className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// // //               type="text"
// // //               placeholder="Name"
// // //               name="name"
// // //               value={formData.name}
// // //               onChange={handleChange}
// // //               required
// // //             />

// // //             <input
// // //               className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// // //               type="email"
// // //               placeholder="Email"
// // //               name="email"
// // //               value={formData.email}
// // //               onChange={handleChange}
// // //               required
// // //             />

// // //             <input
// // //               className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// // //               type="text"
// // //               placeholder="Subject"
// // //               name="subject"
// // //               value={formData.subject}
// // //               onChange={handleChange}
// // //               required
// // //             />

// // //             <textarea
// // //               className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// // //               placeholder="Type your message here..."
// // //               name="message"
// // //               value={formData.message}
// // //               onChange={handleChange}
// // //               required
// // //               style={{ height: '121px' }}
// // //             ></textarea>

// // //             <div className="flex justify-between">
// // //               <button
// // //                 type="submit"
// // //                 className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// // //                 disabled={loading} // Disable button when loading
// // //               >
// // //                 {loading ? 'Sending...' : 'Send ➤'}
// // //               </button>
// // //               <input
// // //                 className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// // //                 type="reset"
// // //                 onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
// // //               />
// // //             </div>

// // //             {loading && <p className="text-center text-gray-300 mt-4">Submitting form, please wait...</p>}
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Contact;










// // import React, { useState } from 'react';
// // import { firestore } from '../firebase'; // Adjust the import path according to your setup
// // import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     subject: '',
// //     message: ''
// //   });

// //   const [loading, setLoading] = useState(false); // New state for loading

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Check if any fields are empty
// //     if (!formData.name || !formData.email || !formData.subject || !formData.message) {
// //       alert('Please fill in all the fields before submitting.');
// //       return; // Stop submission if fields are empty
// //     }

// //     setLoading(true); // Start loader

// //     try {
// //       // Add form data to Firestore collection 'contactForms'
// //       await addDoc(collection(firestore, 'contactForms'), {
// //         ...formData,
// //         timestamp: serverTimestamp() // Optionally add a server timestamp
// //       });

// //       alert('Form submitted successfully!');
// //       setFormData({
// //         name: '',
// //         email: '',
// //         subject: '',
// //         message: ''
// //       });
// //     } catch (error) {
// //       console.error('Error submitting form:', error);
// //       alert('Failed to submit the form');
// //     } finally {
// //       setLoading(false); // Stop loader
// //     }
// //   };

// //   return (
// //     <div
// //       className="min-h-screen bg-cover bg-center flex flex-col justify-center"
// //       style={{
// //         backgroundImage: `url('https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
// //       }}
// //     >
// //       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
// //         <div className="absolute inset-0 bg-gradient-to-r backdrop-blur-md from-[#ffffff25] to-[#ffffff] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
// //         <div className="text-black relative px-4 py-10 bg-#090082-400 shadow-lg sm:rounded-3xl sm:p-20">
// //           <div className="text-center pb-6">
// //             <h1 className="text-3xl">Contact Us!</h1>
// //             <p className="text-gray-900">
// //               Fill up the form below to send us a message.
// //             </p>
// //           </div>

// //           <form onSubmit={handleSubmit}>
// //             <input
// //               className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               type="text"
// //               placeholder="Name"
// //               name="name"
// //               value={formData.name}
// //               onChange={handleChange}
// //               required
// //             />

// //             <input
// //               className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               type="email"
// //               placeholder="Email"
// //               name="email"
// //               value={formData.email}
// //               onChange={handleChange}
// //               required
// //             />

// //             <input
// //               className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               type="text"
// //               placeholder="Subject"
// //               name="subject"
// //               value={formData.subject}
// //               onChange={handleChange}
// //               required
// //             />

// //             <textarea
// //               className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
// //               placeholder="Type your message here..."
// //               name="message"
// //               value={formData.message}
// //               onChange={handleChange}
// //               required
// //               style={{ height: '121px' }}
// //             ></textarea>

// //             <div className="flex justify-between">
// //               <button
// //                 type="submit"
// //                 className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                 disabled={loading} // Disable button when loading
// //               >
// //                 {loading ? 'Sending...' : 'Send ➤'}
// //               </button>
// //               <input
// //                 className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
// //                 type="reset"
// //                 onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
// //               />
// //             </div>

// //             {loading && <p className="text-center text-gray-300 mt-4">Submitting form, please wait...</p>}
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;



// import React, { useState } from "react";
// import { firestore } from "../firebase"; // Adjust the import path according to your setup
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import Header from "./Header";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false); // New state for loading

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if any fields are empty
//     if (
//       !formData.name ||
//       !formData.email ||
//       !formData.subject ||
//       !formData.message
//     ) {
//       alert("Please fill in all the fields before submitting.");
//       return; // Stop submission if fields are empty
//     }

//     setLoading(true); // Start loader

//     try {
//       // Add form data to Firestore collection 'contactForms'
//       await addDoc(collection(firestore, "contactForms"), {
//         ...formData,
//         timestamp: serverTimestamp(), // Optionally add a server timestamp
//       });

//       alert("Form submitted successfully!");
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to submit the form");
//     } finally {
//       setLoading(false); // Stop loader
//     }
//   };

//   return (
//     <>
//       <Header />

//       <div
//         className="md:h-[400px]   bg-cover bg-center flex flex-col justify-center"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1603714228681-b399854b8f80?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//         }}
//       >
//         <div className="absolute md:h-[400px]  inset-0 bg-gradient-to-t from-[#8185e8] via-[#8184e8c1] to-[#000000] opacity-75"></div>

//         <div className="relative bg-gradient-to-r from-[#8185e8] via-[#8184e8c1] to-[#8184e8af] py-7 mt-16 ">
//           {/* <div className="absolute inset-0 bg-gradient-to-r   from-[#ffffff25] to-[#ffffff14] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div> */}
//           <div className="text-[white] font-semibold font-Poppins relative px-4 py-10  sm:rounded-3xl sm:p-20">
//             <div className="text-left pb-6">
//               <h1 className="text-4xl">Contact Us</h1>
//               <p className="text-white text-2xl mt-5">
//                 We Would love to hear from you!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <section className="bg-white  " id="contact">
//     <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      
//         <div className="flex font-Poppins items-stretch justify-center">
//             <div className="grid md:grid-cols-2">
//                 <div className="h-full pr-6">
//                 <div className="mb-4">
//             <div className="mb-6 max-w-3xl text-left    md:mb-12">
//             <h1 className=" text-2xl font-bold text-gray-900">Get in Touch</h1>
//             <h2 className="text-xl font-semibold mt-2">
//               We’re Excited to Hear from You!
//             </h2>{" "}
//             {/* Larger Subheading */}
//             <p className="mt-2 text-lg">
//               Fill up the form below to send us a message.
//             </p>
//             <hr className="mt-5 border-gray-300" />
//             </div>
//         </div>
//                     <p className="  mb-12 text-lg text-gray-600 dark:text-slate-400">
//                         Class aptent taciti sociosqu ad
//                         litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
//                         sagittis ante, ac tincidunt sem venenatis ut.
//                     </p>
//                     <ul className="mb-6 md:mb-0">
//                         <li className="flex">
//                             <div className="flex h-10 w-10 items-center justify-center rounded bg-indigo-600 text-gray-50">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                     stroke-linejoin="round" className="h-6 w-6">
//                                     <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
//                                     <path
//                                         d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
//                                     </path>
//                                 </svg>
//                             </div>
//                             <div className="ml-4  mb-4">
//                                 <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
//                                 </h3>
//                                 <p className="text-gray-600 dark:text-slate-400">Wazirpur, Gurugram, 122505</p>
//                                 <p className="text-gray-600 dark:text-slate-400"> Haryana, India</p>
//                             </div>
//                         </li>
//                         <li className="flex">
//                             <div className="flex h-10 w-10 items-center justify-center rounded bg-indigo-600 text-gray-50">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                     stroke-linejoin="round" className="h-6 w-6">
//                                     <path
//                                         d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
//                                     </path>
//                                     <path d="M15 7a2 2 0 0 1 2 2"></path>
//                                     <path d="M15 3a6 6 0 0 1 6 6"></path>
//                                 </svg>
//                             </div>
//                             <div className="ml-4 mb-4">
//                                 <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
//                                 </h3>
//                                 <p className="text-gray-600 dark:text-slate-400">Mobile: +91 9818908237</p>
//                                 <p className="text-gray-600 dark:text-slate-400">Mail: mechfinderhelp@gmail.com</p>
//                             </div>
//                         </li>
//                         <li className="flex">
//                             <div className="flex h-10 w-10 items-center justify-center rounded bg-indigo-600 text-gray-50">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
//                                     stroke-linejoin="round" className="h-6 w-6">
//                                     <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
//                                     <path d="M12 7v5l3 3"></path>
//                                 </svg>
//                             </div>
//                             <div className="ml-4 mb-4">
//                                 <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
//                                     hours</h3>
//                                 <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
//                                 <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className=" " id="form">
//                     <h2 className="mb-4 text-2xl font-bold dark:text-indigo-700">Ready to Get Started?</h2>
//                     <div className="shadow-2xl shadow-gray-700 bg-white w-4/5 flex justify-center  font-Poppins">
//               <form className=" p-10 " onSubmit={handleSubmit}>
//                 <input
//                   className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
//                   type="text"
//                   placeholder="Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
//                   type="text"
//                   placeholder="Subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                 />

//                 <textarea
//                   className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
//                   placeholder="Type your message here..."
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   style={{ height: "121px" }}
//                 ></textarea>

//                 <div className="flex justify-between">
//                   <button
//                     type="submit"
//                     className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font- py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     disabled={loading} // Disable button when loading
//                   >
//                     {loading ? "Sending..." : "Send ➤"}
//                   </button>
//                   <input
//                     className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font- py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     type="reset"
//                     onClick={() =>
//                       setFormData({
//                         name: "",
//                         email: "",
//                         subject: "",
//                         message: "",
//                       })
//                     }
//                   />
//                 </div>

//                 {loading && (
//                   <p className="text-center text-gray-800 placeholder:text-gray-400 mt-4">
//                     Submitting form, please wait...
//                   </p>
//                 )}
//               </form>
//             </div>
//                 </div>
//             </div>
//         </div>
//         <div style={{ position: 'relative', height: 0, overflow: 'hidden', marginBottom: '1.5rem', paddingBottom: '56.25%' }}>
//   <iframe className=" mt-10"
//     style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '70%' }}
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d77.0887982!3d28.4537227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c5eb21e60a0cf%3A0x6db7b0f1ed250885!2sWazirpur%2C%20Gurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1610035984427"
//     frameBorder="0"
//     allowFullScreen=""
//     aria-hidden="false"
//     tabIndex="0"
//   ></iframe>
// </div>


//     </div>
// </section>
//       {/* <div className="flex flex-col justify-center items-center bg-gray-50">
//       <div className="mt-20 bg-fuchsi-500 flex items-center justify-center w-full">
//       <div className="font-Poppins bg-teal-600 text-left">
//             <div className=" p-9">

//             <h1 className=" text-2xl font-bold text-gray-900">Get in Touch</h1>
//             <h2 className="text-xl font-semibold mt-2">
//               We’re Excited to Hear from You!
//             </h2>{" "}
            
//             <p className="mt-2 text-lg">
//               Fill up the form below to send us a message.
//             </p>
//             <hr className="mt-5 border-gray-300" />

//             </div>
//             <div className=" flex justify-start">
                
//             <div className="flex flex-col items-start mt-4">
//               <div className="flex items-center mb-2">
//                 <img src='https://i.pinimg.com/enabled_lo/564x/76/f7/66/76f766f9feb3a53fab877d34a1eba19b.jpg' alt='' className=' h-1/6 w-1/6' />
//                 <span className="text-gray-800">+1 (234) 567-890</span>  
//               </div>
//               <div className="flex items-center">
//               <img src='https://i.pinimg.com/564x/7e/4f/4e/7e4f4e5e8e50a9aa900edafb9adca4a1.jpg' alt='' className=' h-1/2 w-1/2' />

//                 <span className="text-gray-800">123 Address St, City, Country</span>  
//               </div>
//             </div>
//             </div>
//             <hr className="mt-5 border-gray-300" />
//           </div>
//           <div className=" bg-yellow-50">
//           <div className="shadow-2xl shadow-gray-700 bg-white w-1/2 flex justify-center translate-x-1/2 font-Poppins">
//               <form className=" p-10 " onSubmit={handleSubmit}>
//                 <input
//                   className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
//                   type="text"
//                   placeholder="Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />

//                 <input
//                   className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
//                   type="text"
//                   placeholder="Subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                 />

//                 <textarea
//                   className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
//                   placeholder="Type your message here..."
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   style={{ height: "121px" }}
//                 ></textarea>

//                 <div className="flex justify-between">
//                   <button
//                     type="submit"
//                     className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     disabled={loading} // Disable button when loading
//                   >
//                     {loading ? "Sending..." : "Send ➤"}
//                   </button>
//                   <input
//                     className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     type="reset"
//                     onClick={() =>
//                       setFormData({
//                         name: "",
//                         email: "",
//                         subject: "",
//                         message: "",
//                       })
//                     }
//                   />
//                 </div>

//                 {loading && (
//                   <p className="text-center text-gray-800 placeholder:text-gray-400 mt-4">
//                     Submitting form, please wait...
//                   </p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default Contact;










import React, { useState } from "react";
import { firestore } from "../firebase"; // Adjust the import path according to your setup
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Header from "./Header";

const Contact = () => {
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

  return (
    <>
      <Header />

      <div
        className="md:h-[400px]   bg-cover bg-center flex flex-col justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1603714228681-b399854b8f80?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute  h-[290px]  md:h-[400px] lg:h-[400px] xl:h-[400px]  inset-0 bg-gradient-to-t from-[#8185e8] via-[#8184e8c1] to-[#000000] opacity-75"></div>

        <div className="relative md:bg-gradient-to-r from-[#8185e8] via-[#8184e8c1] to-[#8184e8af] py-7 md:mt-16 ">
          {/* <div className="absolute inset-0 bg-gradient-to-r   from-[#ffffff25] to-[#ffffff14] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div> */}
          <div className="text-[white] font-semibold font-Poppins relative px-4 py-10  sm:rounded-3xl sm:p-20">
            <div className="text-left md:mt-2 md:pb-6">
              <h1 className="md:mt-0 mt-8 text-2xl md:text-4xl">Contact Us</h1>
              <p className="text-white text-2xl mt-5">
                We Would love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white  " id="contact">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      
        <div className="flex font-Poppins items-stretch justify-center">
            <div className="grid md:grid-cols-2">
                <div className="h-full pr-6">
                <div className="mb-4">
            <div className="mb-6 max-w-3xl text-left    md:mb-12">
            <h1 className=" text-2xl font-bold text-gray-900">Get in Touch</h1>
            <h2 className="text-xl font-semibold mt-2">
              We’re Excited to Hear from You!
            </h2>{" "}
            {/* Larger Subheading */}
            <p className="mt-2 text-lg">
              Fill up the form below to send us a message.
            </p>
            <hr className="mt-5 border-gray-300" />
            </div>
        </div>
                    <p className="  mb-12 text-lg text-gray-600 dark:text-slate-400">
                        Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                        sagittis ante, ac tincidunt sem venenatis ut.
                    </p>
                    <ul className="mb-6 md:mb-0">
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-indigo-600 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="ml-4  mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">Wazirpur, Gurugram, 122505</p>
                                <p className="text-gray-600 dark:text-slate-400"> Haryana, India</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-indigo-600 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                </h3>
                                <p className="text-gray-600 dark:text-slate-400">Mobile: +91 9818908237</p>
                                <p className="text-gray-600 dark:text-slate-400">Mail: mechfinderhelp@gmail.com</p>
                            </div>
                        </li>
                        <li className="flex">
                            <div className="flex h-10 w-10 items-center justify-center rounded bg-indigo-600 text-gray-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" className="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div className="ml-4 mb-4">
                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                    hours</h3>
                                <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                <p className="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className=" " id="form">
                    <h2 className="mb-4 text-2xl font-bold dark:text-indigo-700">Ready to Get Started?</h2>
                    <div className="shadow-2xl shadow-gray-700 bg-white w-4/8 flex justify-center  font-Poppins">
              <form className=" p-10 " onSubmit={handleSubmit}>
                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <textarea
                  className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
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
                    className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font- py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    disabled={loading} // Disable button when loading
                  >
                    {loading ? "Sending..." : "Send ➤"}
                  </button>
                  <input
                    className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font- py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
            </div>
        </div>
        <div style={{ position: 'relative', height: 0, overflow: 'hidden', marginBottom: '1.5rem', paddingBottom: '56.25%' }}>
  <iframe className=" mt-10"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '70%' }}
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d77.0887982!3d28.4537227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c5eb21e60a0cf%3A0x6db7b0f1ed250885!2sWazirpur%2C%20Gurugram%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1610035984427"
    frameBorder="0"
    allowFullScreen=""
    aria-hidden="false"
    tabIndex="0"
  ></iframe>
</div>


    </div>
</section>
    
    </>
  );
};

export default Contact;
