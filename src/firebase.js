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
  apiKey: "AIzaSyD_qrp-1yzNTIlLWIqMM50wZ_NTrQrxOoU",
  authDomain: "mechfinder-113c8.firebaseapp.com",
  projectId: "mechfinder-113c8",
  storageBucket: "mechfinder-113c8.appspot.com",
  messagingSenderId: "865813282701",
  appId: "1:865813282701:web:e9958cd29f439fd81507c4",
  measurementId: "G-2TLHN25VLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { auth, firestore, storage ,db };