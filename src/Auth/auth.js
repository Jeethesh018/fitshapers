// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABhSquzIWJ-c_CTHzKTbm5Z81P4uZGO5c",
  authDomain: "fitshapers-91832.firebaseapp.com",
  projectId: "fitshapers-91832",
  storageBucket: "fitshapers-91832.appspot.com",
  messagingSenderId: "1046712360961",
  appId: "1:1046712360961:web:5fb481c852e04bd62c6000",
  measurementId: "G-LPZZ4RN8DT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const db = getFirestore(app);