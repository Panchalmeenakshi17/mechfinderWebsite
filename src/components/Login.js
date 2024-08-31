import React, { useState } from 'react';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust path as needed
import { useNavigate } from 'react-router-dom'; // For navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPasswordLoading, setIsForgotPasswordLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); // For routing

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
        setIsLoading(false);
        return;
      }

      navigate('/Landing'); // Navigate to Home page
    } catch (error) {
      let errorMessage = 'Incorrect email or password. Please try again.';
      console.error('Login Error:', error);
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email format. Please check your email.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'User not found. Please check your email or sign up.';
      }
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
      console.error('Forgot Password Error:', error);
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Invalid email format. Please check your email.';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'No user found with this email address.';
      }
      setError(errorMessage);
    } finally {
      setIsForgotPasswordLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      border: '1px solid #ddd',
    },
    heading: {
      fontSize: '28px',
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
    subheading: {
      fontSize: '16px',
      textAlign: 'center',
      marginBottom: '30px',
      color: '#666',
    },
    error: {
      color: 'red',
      marginBottom: '20px',
      fontSize: '14px',
      textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        marginBottom: '15px',
        fontSize: '16px',
        boxSizing: 'border-box', // Ensure padding is included in the width
      },
    passwordContainer: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
    },
    passwordInput: {
      flex: 1,
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #ddd',
      marginBottom: '15px',
      fontSize: '16px',
    },
    eyeIcon: {
      position: 'absolute',
      right: '10px',
      cursor: 'pointer',
      fontSize: '18px',
      color: '#007bff',
    },
    button: {
      width: '100%',
      padding: '15px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      textAlign: 'center',
      marginBottom: '15px',
    },
    buttonDisabled: {
      backgroundColor: '#ddd',
      cursor: 'not-allowed',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
    },
    linkContainer: {
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Log In to Your Account</h2>
      <p style={styles.subheading}>Welcome back! Please log in to continue.</p>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleLogin}>
      <div style={styles.passwordContainer}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}

          />
        </div>
        <div>
          <div style={styles.passwordContainer}>
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.passwordInput}
            />
            <span
              onClick={togglePasswordVisibility}
              style={styles.eyeIcon}
            >
              {isPasswordVisible ? '👁' : '👁‍🗨'}
            </span>
          </div>
        </div>
        <button
          type="submit"
          style={isLoading ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
        <button
          type="button"
          onClick={handleForgotPassword}
          style={isForgotPasswordLoading ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
          disabled={isForgotPasswordLoading}
        >
          {isForgotPasswordLoading ? 'Sending...' : 'Forgot Password?'}
        </button>
      </form>
      <div style={styles.linkContainer}>
        <p>
          Don't have an account?{' '}
          <a href="/Sign" style={styles.link}>Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;