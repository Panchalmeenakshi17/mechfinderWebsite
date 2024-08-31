import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth, firestore, storage } from '../firebase'; // Import Firebase services
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, sendEmailVerification } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #391f99;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-decoration: underline;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 80%;
  border: 1px solid #391f99;
  border-radius: 25px;
  outline: none;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #391f99;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ImageInput = styled.input`
  margin-bottom: 20px;
`;

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
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
    const storageRef = ref(storage, `profilePictures/${userId}/${file.name}`); // Corrected this line
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };
  

  const handleSignUp = async () => {
    try {
      setLoading(true);

      if (!name || !email || !password || !mobileNumber || !profileImage) {
        alert('Please fill in all the fields and select a profile picture.');
        return;
      }

      if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
        alert('Password must be at least 8 characters long and include at least one letter and one number.');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        alert('This email is already associated with an account.');
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

      // Set user email in local storage
      localStorage.setItem('userEmail', email);

      // Send email verification
      await sendEmailVerification(user);

      alert('User account created successfully. Please verify your email.');
      navigate('/login');

    } catch (error) {
      console.error('Error during sign up:', error.message);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Join Our Community!</Title>
      {profileImage && (
        <ImagePreview src={profileImage} alt="Profile Preview" />
      )}
      <ImageInput type="file" accept="image/*" onChange={handleSelectImage} />
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="button" onClick={handleTogglePasswordVisibility}>
        {showPassword ? 'Hide Password' : 'Show Password'}
      </Button>
      <Input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        maxLength={10}
      />
      {loading ? (
        <Button disabled>Loading...</Button>
      ) : (
        <Button onClick={handleSignUp}>Sign Up</Button>
      )}
      <Button onClick={() => navigate('/login')}>Login</Button>
    </Container>
  );
};

export default SignUp;