// // import React, { useState } from 'react';
// // import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
// // import { auth } from '../firebase'; // Adjust path as needed
// // import { useNavigate } from 'react-router-dom'; // For navigation

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [isForgotPasswordLoading, setIsForgotPasswordLoading] = useState(false);
// //   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
// //   const [error, setError] = useState('');

// //   const navigate = useNavigate(); // For routing

// //   const handleLogin = async (event) => {
// //     event.preventDefault();

// //     if (!email || !password) {
// //       setError('Please fill in all fields');
// //       return;
// //     }

// //     setIsLoading(true);

// //     try {
// //       const { user } = await signInWithEmailAndPassword(auth, email, password);

// //       if (!user.emailVerified) {
// //         setError('Please verify your email before logging in.');
// //         setIsLoading(false);
// //         return;
// //       }

// //       navigate('/Allshops'); // Navigate to Home page
// //     } catch (error) {
// //       let errorMessage = 'Incorrect email or password. Please try again.';
// //       console.error('Login Error:', error);
// //       if (error.code === 'auth/invalid-email') {
// //         errorMessage = 'Invalid email format. Please check your email.';
// //       } else if (error.code === 'auth/wrong-password') {
// //         errorMessage = 'Incorrect password. Please try again.';
// //       } else if (error.code === 'auth/user-not-found') {
// //         errorMessage = 'User not found. Please check your email or sign up.';
// //       }
// //       setError(errorMessage);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleForgotPassword = async () => {
// //     if (!email) {
// //       setError('Please enter your email address');
// //       return;
// //     }

// //     setIsForgotPasswordLoading(true);

// //     try {
// //       await sendPasswordResetEmail(auth, email);
// //       alert('An email with instructions to reset your password has been sent to your email address.');
// //     } catch (error) {
// //       let errorMessage = 'An error occurred while sending the password reset email.';
// //       console.error('Forgot Password Error:', error);
// //       if (error.code === 'auth/invalid-email') {
// //         errorMessage = 'Invalid email format. Please check your email.';
// //       } else if (error.code === 'auth/user-not-found') {
// //         errorMessage = 'No user found with this email address.';
// //       }
// //       setError(errorMessage);
// //     } finally {
// //       setIsForgotPasswordLoading(false);
// //     }
// //   };

// //   const togglePasswordVisibility = () => {
// //     setIsPasswordVisible(!isPasswordVisible);
// //   };

// //   // Inline styles
// //   const styles = {
// //     container: {
// //       maxWidth: '400px',
// //       margin: '0 auto',
// //       padding: '20px',
// //       background: '#ffffff',
// //       borderRadius: '12px',
// //       boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
// //       border: '1px solid #ddd',
// //     },
// //     heading: {
// //       fontSize: '28px',
// //       fontWeight: '600',
// //       textAlign: 'center',
// //       marginBottom: '20px',
// //       color: '#333',
// //     },
// //     subheading: {
// //       fontSize: '16px',
// //       textAlign: 'center',
// //       marginBottom: '30px',
// //       color: '#666',
// //     },
// //     error: {
// //       color: 'red',
// //       marginBottom: '20px',
// //       fontSize: '14px',
// //       textAlign: 'center',
// //     },
// //     input: {
// //         width: '100%',
// //         padding: '20px',
// //         borderRadius: '8px',
// //         border: '1px solid #ddd',
// //         marginBottom: '15px',
// //         fontSize: '16px',
// //         boxSizing: 'border-box', // Ensure padding is included in the width
// //       },
// //     passwordContainer: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       position: 'relative',
// //     },
// //     passwordInput: {
// //       flex: 1,
// //       padding: '12px',
// //       borderRadius: '8px',
// //       border: '1px solid #ddd',
// //       marginBottom: '15px',
// //       fontSize: '16px',
// //     },
// //     eyeIcon: {
// //       position: 'absolute',
// //       right: '10px',
// //       cursor: 'pointer',
// //       fontSize: '18px',
// //       color: '#007bff',
// //     },
// //     button: {
// //       width: '100%',
// //       padding: '15px',
// //       borderRadius: '8px',
// //       border: 'none',
// //       backgroundColor: '#007bff',
// //       color: 'white',
// //       fontSize: '16px',
// //       fontWeight: '600',
// //       cursor: 'pointer',
// //       textAlign: 'center',
// //       marginBottom: '15px',
// //     },
// //     buttonDisabled: {
// //       backgroundColor: '#ddd',
// //       cursor: 'not-allowed',
// //     },
// //     link: {
// //       color: '#007bff',
// //       textDecoration: 'none',
// //     },
// //     linkContainer: {
// //       textAlign: 'center',
// //     },
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h2 style={styles.heading}>Log In to Your Account</h2>
// //       <p style={styles.subheading}>Welcome back! Please log in to continue.</p>
// //       {error && <p style={styles.error}>{error}</p>}
// //       <form onSubmit={handleLogin}>
// //       <div style={styles.passwordContainer}>
// //           <input
// //             type="email"
// //             placeholder="Enter your email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             style={styles.input}

// //           />
// //         </div>
// //         <div>
// //           <div style={styles.passwordContainer}>
// //             <input
// //               type={isPasswordVisible ? 'text' : 'password'}
// //               placeholder="Enter your password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //               style={styles.passwordInput}
// //             />
// //             <span
// //               onClick={togglePasswordVisibility}
// //               style={styles.eyeIcon}
// //             >
// //               {isPasswordVisible ? '👁' : '👁‍🗨'}
// //             </span>
// //           </div>
// //         </div>
// //         <button
// //           type="submit"
// //           style={isLoading ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
// //           disabled={isLoading}
// //         >
// //           {isLoading ? 'Loading...' : 'Login'}
// //         </button>
// //         <button
// //           type="button"
// //           onClick={handleForgotPassword}
// //           style={isForgotPasswordLoading ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
// //           disabled={isForgotPasswordLoading}
// //         >
// //           {isForgotPasswordLoading ? 'Sending...' : 'Forgot Password?'}
// //         </button>
// //       </form>
// //       <div style={styles.linkContainer}>
// //         <p>
// //           Don't have an account?{' '}
// //           <a href="/Sign" style={styles.link}>Sign Up</a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState, useEffect } from 'react';
// import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase'; // Adjust path as needed
// import { useNavigate } from 'react-router-dom'; // For navigation
// import styled from 'styled-components';

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
//   width: 100%;
//   max-width: 400px;
// `;

// const Title = styled.h2`
//   font-size: 28px;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const SubTitle = styled.p`
//   font-size: 16px;
//   text-align: center;
//   margin-bottom: 30px;
//   color: #666;
// `;

// const ErrorMessage = styled.p`
//   color: red;
//   font-size: 14px;
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 15px;
//   border-radius: 8px;
//   border: 1px solid #ddd;
//   margin-bottom: 15px;
//   font-size: 16px;
//   box-sizing: border-box;

//   &:focus {
//     border-color: #391f99;
//     outline: none;
//   }
// `;

// const PasswordContainer = styled.div`
//   display: flex;
//   align-items: center;
//   position: relative;
// `;

// const PasswordInput = styled(Input)`
//   flex: 1;
//   margin-bottom: 0; // To remove extra margin
// `;

// const EyeIcon = styled.span`
//   position: absolute;
//   right: 10px;
//   cursor: pointer;
//   color: #007bff;
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 15px;
//   border-radius: 8px;
//   border: none;
//   background-color: #007bff;
//   color: white;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;
//   text-align: center;
//   margin-bottom: 15px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }

//   &:disabled {
//     background-color: #ddd;
//     cursor: not-allowed;
//   }
// `;

// const LinkContainer = styled.div`
//   text-align: center;
// `;

// const Link = styled.a`
//   color: #007bff;
//   text-decoration: none;
// `;

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [isForgotPasswordLoading, setIsForgotPasswordLoading] = useState(false);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const [error, setError] = useState('');

//   const navigate = useNavigate(); // For routing

//   // Check for existing user session
//   useEffect(() => {
//     const userToken = localStorage.getItem('userToken');
//     if (userToken) {
//       navigate('/IndividualList'); // Navigate to IndividualList if already logged in
//     }
//   }, [navigate]);

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     if (!email || !password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     setIsLoading(true);
//     setError('');

//     try {
//       const { user } = await signInWithEmailAndPassword(auth, email, password);

//       if (!user.emailVerified) {
//         setError('Please verify your email before logging in.');
//         setIsLoading(false);
//         return;
//       }

//       // Store user token and email in local storage
//       localStorage.setItem('userToken', user.uid);
//       localStorage.setItem('userEmail', email);

//       navigate('/Allshops'); // Navigate to Home page
//     } catch (error) {
//       let errorMessage = 'Incorrect email or password. Please try again.';
//       console.error('Login Error:', error);
//       if (error.code === 'auth/invalid-email') {
//         errorMessage = 'Invalid email format. Please check your email.';
//       } else if (error.code === 'auth/wrong-password') {
//         errorMessage = 'Incorrect password. Please try again.';
//       } else if (error.code === 'auth/user-not-found') {
//         errorMessage = 'User not found. Please check your email or sign up.';
//       }
//       setError(errorMessage);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleForgotPassword = async () => {
//     if (!email) {
//       setError('Please enter your email address');
//       return;
//     }

//     setIsForgotPasswordLoading(true);
//     setError('');

//     try {
//       await sendPasswordResetEmail(auth, email);
//       alert('An email with instructions to reset your password has been sent to your email address.');
//     } catch (error) {
//       let errorMessage = 'An error occurred while sending the password reset email.';
//       console.error('Forgot Password Error:', error);
//       if (error.code === 'auth/invalid-email') {
//         errorMessage = 'Invalid email format. Please check your email.';
//       } else if (error.code === 'auth/user-not-found') {
//         errorMessage = 'No user found with this email address.';
//       }
//       setError(errorMessage);
//     } finally {
//       setIsForgotPasswordLoading(false);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   return (
//     <Container>
//       <Card>
//         <Title>Log In to Your Account</Title>
//         <SubTitle>Welcome back! Please log in to continue.</SubTitle>
//         {error && <ErrorMessage>{error}</ErrorMessage>}
//         <form onSubmit={handleLogin}>
//           <Input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <PasswordContainer>
//             <PasswordInput
//               type={isPasswordVisible ? 'text' : 'password'}
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <EyeIcon onClick={togglePasswordVisibility}>
//               {isPasswordVisible ? '👁' : '👁‍🗨'}
//             </EyeIcon>
//           </PasswordContainer>
//           <Button type="submit" disabled={isLoading}>
//             {isLoading ? 'Loading...' : 'Login'}
//           </Button>
//           <Button type="button" onClick={handleForgotPassword} disabled={isForgotPasswordLoading}>
//             {isForgotPasswordLoading ? 'Sending...' : 'Forgot Password?'}
//           </Button>
//         </form>
//         <LinkContainer>
//           <p>
//             Don't have an account?{' '}
//             <Link href="/Sign">Sign Up</Link>
//           </p>
//         </LinkContainer>
//       </Card>
//     </Container>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPasswordLoading, setIsForgotPasswordLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setIsLoading(true);
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (!user.emailVerified) {
        setError('Please verify your email before logging in.');
        return;
      }
      localStorage.setItem('userToken', user.uid);
      localStorage.setItem('userEmail', email);
      navigate('/MyQuries');
    } catch (error) {
      let errorMessage = 'Incorrect email or password. Please try again.';
      if (error.code === 'auth/invalid-email') errorMessage = 'Invalid email format. Please check your email.';
      else if (error.code === 'auth/wrong-password') errorMessage = 'Incorrect password. Please try again.';
      else if (error.code === 'auth/user-not-found') errorMessage = 'User not found. Please check your email or sign up.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    setIsForgotPasswordLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      alert('An email with instructions to reset your password has been sent to your email address.');
    } catch (error) {
      let errorMessage = 'An error occurred while sending the password reset email.';
      if (error.code === 'auth/invalid-email') errorMessage = 'Invalid email format. Please check your email.';
      else if (error.code === 'auth/user-not-found') errorMessage = 'No user found with this email address.';
      setError(errorMessage);
    } finally {
      setIsForgotPasswordLoading(false);
    }
  };

  return (
    <div className="h-screen w-full font-Poppins bg-gray-100 text-gray-900">
      <Header />
      <div className="flex h-full">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white shadow sm:rounded-lg">
          <div className="p-6 max-w-md w-full">
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold">Log In to Your Account</h1>
              {error && <p className="mt-2 text-red-600">{error}</p>}
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  className="w-full px-3 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <input
                  className="w-full px-3 py-4 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-lg bg-indigo-500 text-gray-100 font-semibold hover:bg-indigo-700 transition duration-300 focus:outline-none"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Log In'}
              </button>
            </form>
            <div className="mt-6 text-center">
              <button
                className="w-full py-3 bg-indigo-100 text-gray-800 font-bold rounded-lg hover:shadow transition duration-300 focus:outline-none"
                onClick={handleForgotPassword}
                disabled={isForgotPasswordLoading}
              >
                Forgot Password?
              </button>
              <p className="mt-4 text-sm text-gray-600">
                Don't have an account? <a href="/SignUp" className="text-indigo-500 border-b border-dotted">Sign Up</a>
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:flex w-1/2 bg-indigo-100">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1608613304899-ea8098577e38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
