// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPeqLM1gixl2_itsIaQM2VTu0LpkssnGE",
  authDomain: "book-store-999.firebaseapp.com",
  projectId: "book-store-999",
  storageBucket: "book-store-999.firebasestorage.app",
  messagingSenderId: "496222605931",
  appId: "1:496222605931:web:b0265d7e7d5ec747c1172e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);