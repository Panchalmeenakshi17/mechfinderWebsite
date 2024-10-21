// import React, { useState } from 'react';
// import { firestore } from '../firebase'; // Adjust the import path according to your setup
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [loading, setLoading] = useState(false); // New state for loading

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loader

//     try {
//       // Add form data to Firestore collection 'contactForms'
//       await addDoc(collection(firestore, 'contactForms'), {
//         ...formData,
//         timestamp: serverTimestamp() // Optionally add a server timestamp
//       });

//       alert('Form submitted successfully!');
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('Failed to submit the form');
//     } finally {
//       setLoading(false); // Stop loader
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//         <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
//           <div className="text-center pb-6">
//             <h1 className="text-3xl">Contact Us!</h1>
//             <p className="text-gray-300">
//               Fill up the form below to send us a message.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <input
//               className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="text"
//               placeholder="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />

//             <input
//               className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//             <input
//               className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               type="text"
//               placeholder="Subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />

//             <textarea
//               className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Type your message here..."
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               style={{ height: '121px' }}
//             ></textarea>

//             <div className="flex justify-between">
//               <button
//                 type="submit"
//                 className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 disabled={loading} // Disable button when loading
//               >
//                 {loading ? 'Sending...' : 'Send ➤'}
//               </button>
//               <input
//                 className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                 type="reset"
//                 onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
//               />
//             </div>

//             {loading && <p className="text-center text-gray-300 mt-4">Submitting form, please wait...</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;










import React, { useState } from 'react';
import { firestore } from '../firebase'; // Adjust the import path according to your setup
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false); // New state for loading

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any fields are empty
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all the fields before submitting.');
      return; // Stop submission if fields are empty
    }

    setLoading(true); // Start loader

    try {
      // Add form data to Firestore collection 'contactForms'
      await addDoc(collection(firestore, 'contactForms'), {
        ...formData,
        timestamp: serverTimestamp() // Optionally add a server timestamp
      });

      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form');
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r backdrop-blur-md from-[#ffffff25] to-[#ffffff] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="text-black relative px-4 py-10 bg-#090082-400 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl">Contact Us!</h1>
            <p className="text-gray-900">
              Fill up the form below to send us a message.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ height: '121px' }}
            ></textarea>

            <div className="flex justify-between">
              <button
                type="submit"
                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={loading} // Disable button when loading
              >
                {loading ? 'Sending...' : 'Send ➤'}
              </button>
              <input
                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
                onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
              />
            </div>

            {loading && <p className="text-center text-gray-300 mt-4">Submitting form, please wait...</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
