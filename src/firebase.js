// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDZNfQ8bJbD4JYlIcszw-TsmwvauE39V8",
  authDomain: "mechfinder-952b4.firebaseapp.com",
  projectId: "mechfinder-952b4",
  storageBucket: "mechfinder-952b4.appspot.com",
  messagingSenderId: "22209228363",
  appId: "1:22209228363:web:9cc3b3b310daa59b6a67ce",
  measurementId: "G-X1XMPPTY7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { auth, firestore, storage ,db };