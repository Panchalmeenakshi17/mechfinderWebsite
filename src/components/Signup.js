// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import styled from 'styled-components';
// // import { auth, firestore, storage } from '../firebase'; // Import Firebase services
// // import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// // import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, sendEmailVerification } from 'firebase/auth';
// // import { doc, setDoc } from 'firebase/firestore';

// // const Container = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   padding: 20px;
// // `;

// // const Title = styled.h1`
// //   color: #391f99;
// //   font-size: 24px;
// //   font-weight: bold;
// //   margin-bottom: 20px;
// //   text-decoration: underline;
// // `;

// // const Input = styled.input`
// //   margin-bottom: 20px;
// //   padding: 10px;
// //   width: 80%;
// //   border: 1px solid #391f99;
// //   border-radius: 25px;
// //   outline: none;
// //   font-size: 16px;
// // `;

// // const Button = styled.button`
// //   background-color: #391f99;
// //   color: #ffffff;
// //   padding: 10px 20px;
// //   border: none;
// //   border-radius: 25px;
// //   cursor: pointer;
// //   font-size: 16px;
// //   margin-bottom: 20px;
// // `;

// // const ImagePreview = styled.img`
// //   width: 100px;
// //   height: 100px;
// //   border-radius: 50%;
// //   margin-bottom: 20px;
// // `;

// // const ImageInput = styled.input`
// //   margin-bottom: 20px;
// // `;

// // const SignUp = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [profileImage, setProfileImage] = useState(null);
// //   const navigate = useNavigate();

// //   const handleTogglePasswordVisibility = () => {
// //     setShowPassword(!showPassword);
// //   };

// //   const handleSelectImage = (event) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setProfileImage(reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const uploadImage = async (file, userId) => {
// //     const storageRef = ref(storage, `profilePictures/${userId}/${file.name}`); // Corrected this line
// //     await uploadBytes(storageRef, file);
// //     return await getDownloadURL(storageRef);
// //   };
  

// //   const handleSignUp = async () => {
// //     try {
// //       setLoading(true);

// //       if (!name || !email || !password || !mobileNumber || !profileImage) {
// //         alert('Please fill in all the fields and select a profile picture.');
// //         return;
// //       }

// //       if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
// //         alert('Password must be at least 8 characters long and include at least one letter and one number.');
// //         return;
// //       }

// //       if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
// //         alert('Please enter a valid email address.');
// //         return;
// //       }

// //       const signInMethods = await fetchSignInMethodsForEmail(auth, email);
// //       if (signInMethods.length > 0) {
// //         alert('This email is already associated with an account.');
// //         return;
// //       }

// //       const { user } = await createUserWithEmailAndPassword(auth, email, password);

// //       let profileImageUrl = '';
// //       if (profileImage) {
// //         const response = await fetch(profileImage);
// //         const file = await response.blob();
// //         profileImageUrl = await uploadImage(file, user.uid);
// //       }

// //       await setDoc(doc(firestore, 'users', user.uid), {
// //         name,
// //         email,
// //         mobileNumber,
// //         profileImageUrl,
// //       });

// //       // Set user email in local storage
// //       localStorage.setItem('userEmail', email);

// //       // Send email verification
// //       await sendEmailVerification(user);

// //       alert('User account created successfully. Please verify your email.');
// //       navigate('/login');

// //     } catch (error) {
// //       console.error('Error during sign up:', error.message);
// //       alert('An error occurred. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <Container>
// //       <Title>Join Our Community!</Title>
// //       {profileImage && (
// //         <ImagePreview src={profileImage} alt="Profile Preview" />
// //       )}
// //       <ImageInput type="file" accept="image/*" onChange={handleSelectImage} />
// //       <Input
// //         type="text"
// //         placeholder="Name"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //       />
// //       <Input
// //         type="email"
// //         placeholder="Email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //       />
// //       <Input
// //         type={showPassword ? 'text' : 'password'}
// //         placeholder="Password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //       />
// //       <Button type="button" onClick={handleTogglePasswordVisibility}>
// //         {showPassword ? 'Hide Password' : 'Show Password'}
// //       </Button>
// //       <Input
// //         type="text"
// //         placeholder="Mobile Number"
// //         value={mobileNumber}
// //         onChange={(e) => setMobileNumber(e.target.value)}
// //         maxLength={10}
// //       />
// //       {loading ? (
// //         <Button disabled>Loading...</Button>
// //       ) : (
// //         <Button onClick={handleSignUp}>Sign Up</Button>
// //       )}
// //       <Button onClick={() => navigate('/login')}>Login</Button>
// //     </Container>
// //   );
// // };

// // export default SignUp;









// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { auth, firestore, storage } from '../firebase'; // Import Firebase services
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, sendEmailVerification } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: linear-gradient(to right, #f8f9fa, #e9ecef);
// `;

// const Card = styled.div`
//   background: white;
//   padding: 30px;
//   border-radius: 15px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   width: 400px;
// `;

// const Title = styled.h1`
//   color: #391f99;
//   font-size: 28px;
//   font-weight: bold;
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const Input = styled.input`
//   margin-bottom: 15px;
//   padding: 10px;
//   width: 100%;
//   border: 1px solid #ced4da;
//   border-radius: 5px;
//   outline: none;
//   font-size: 16px;
//   transition: border-color 0.2s;

//   &:focus {
//     border-color: #391f99;
//   }
// `;

// const Button = styled.button`
//   background-color: #391f99;
//   color: #ffffff;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;
//   width: 100%;
//   margin-bottom: 15px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #321577;
//   }

//   &:disabled {
//     background-color: #6c757d;
//   }
// `;

// const ImagePreview = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   margin: 0 auto 20px;
//   display: block;
// `;

// const ImageInput = styled.input`
//   margin-bottom: 15px;
// `;

// const ErrorMessage = styled.p`
//   color: red;
//   font-size: 14px;
//   margin: 5px 0;
// `;

// // SignUp Component
// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [profileImage, setProfileImage] = useState(null);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleTogglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSelectImage = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfileImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const uploadImage = async (file, userId) => {
//     const storageRef = ref(storage, `profilePictures/${userId}/${file.name}`);
//     await uploadBytes(storageRef, file);
//     return await getDownloadURL(storageRef);
//   };

//   const handleSignUp = async () => {
//     try {
//       setLoading(true);
//       setError('');

//       if (!name || !email || !password || !mobileNumber || !profileImage) {
//         setError('Please fill in all fields and select a profile picture.');
//         return;
//       }

//       if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
//         setError('Password must be at least 8 characters long and include at least one letter and one number.');
//         return;
//       }

//       if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//         setError('Please enter a valid email address.');
//         return;
//       }

//       const signInMethods = await fetchSignInMethodsForEmail(auth, email);
//       if (signInMethods.length > 0) {
//         setError('This email is already associated with an account.');
//         return;
//       }

//       const { user } = await createUserWithEmailAndPassword(auth, email, password);

//       let profileImageUrl = '';
//       if (profileImage) {
//         const response = await fetch(profileImage);
//         const file = await response.blob();
//         profileImageUrl = await uploadImage(file, user.uid);
//       }

//       await setDoc(doc(firestore, 'users', user.uid), {
//         name,
//         email,
//         mobileNumber,
//         profileImageUrl,
//       });

//       localStorage.setItem('userEmail', email);
//       await sendEmailVerification(user);
//       alert('User account created successfully. Please verify your email.');
//       navigate('/login');

//     } catch (error) {
//       console.error('Error during sign up:', error.message);
//       setError('An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container>
//       <Card>
//         <Title>Join Our Community!</Title>
//         {profileImage && (
//           <ImagePreview src={profileImage} alt="Profile Preview" />
//         )}
//         <ImageInput type="file" accept="image/*" onChange={handleSelectImage} />
//         <Input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <Input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <Input
//           type={showPassword ? 'text' : 'password'}
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button type="button" onClick={handleTogglePasswordVisibility}>
//           {showPassword ? 'Hide Password' : 'Show Password'}
//         </Button>
//         <Input
//           type="text"
//           placeholder="Mobile Number"
//           value={mobileNumber}
//           onChange={(e) => setMobileNumber(e.target.value)}
//           maxLength={10}
//         />
//         {error && <ErrorMessage>{error}</ErrorMessage>}
//         {loading ? (
//           <Button disabled>Loading...</Button>
//         ) : (
//           <Button onClick={handleSignUp}>Sign Up</Button>
//         )}
//         <Button onClick={() => navigate('/login')}>Login</Button>
//       </Card>
//     </Container>
//   );
// };

// export default SignUp;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore, storage } from '../firebase'; // Import Firebase services
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSelectImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file, userId) => {
    const storageRef = ref(storage, `profilePictures/${userId}/${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');

      if (!name || !email || !password || !mobileNumber || !profileImage) {
        setError('Please fill in all fields and select a profile picture.');
        return;
      }

      if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
        setError('Password must be at least 8 characters long and include at least one letter and one number.');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError('Please enter a valid email address.');
        return;
      }

      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        setError('This email is already associated with an account.');
        return;
      }

      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      let profileImageUrl = '';
      if (profileImage) {
        const response = await fetch(profileImage);
        const file = await response.blob();
        profileImageUrl = await uploadImage(file, user.uid);
      }

      await setDoc(doc(firestore, 'users', user.uid), {
        name,
        email,
        mobileNumber,
        profileImageUrl,
      });

      localStorage.setItem('userEmail', email);
      await sendEmailVerification(user);
      alert('User account created successfully. Please verify your email.');
      navigate('/login');

    } catch (error) {
      console.error('Error during sign up:', error.message);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4 bg-gray-50 h-full">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center p-6 h-full w-full">
          <form className="max-w-lg w-full mx-auto" onSubmit={handleSignUp}>
            <div className="mb-12">
              <h3 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">Create an account</h3>
            </div>

            <div>
              <label className="text-gray-800 text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Mobile Number</label>
              <div className="relative flex items-center">
                <input
                  name="mobileNumber"
                  type="text"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter mobile number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                required
                className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                onChange={handleSelectImage}
              />
            </div>

            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <svg
                  onClick={handleTogglePasswordVisibility}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center mt-6">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 rounded"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                I accept the <a href="javascript:void(0);" className="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <div className="mt-12">
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none"
              >
                Create an account
              </button>
              <p className="text-sm mt-6 text-gray-800">Already have an account? <a href="/login" className="text-blue-500 font-semibold hover:underline ml-1">Login here</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
