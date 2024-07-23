// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQktKTCRjPIMMHKmsxK0EWFO_HkX9sHP8",
  authDomain: "excellent-glam.firebaseapp.com",
  projectId: "excellent-glam",
  storageBucket: "excellent-glam.appspot.com",
  messagingSenderId: "151317245885",
  appId: "1:151317245885:web:e8288ecca87ef058a3ecd4",
  measurementId: "G-RM7RNMHREP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
