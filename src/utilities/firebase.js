// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD75-4ZFUGShFwgg7AcdFTeZOz_3vUTw5w",
  authDomain: "project-from-dhunjam.firebaseapp.com",
  projectId: "project-from-dhunjam",
  storageBucket: "project-from-dhunjam.appspot.com",
  messagingSenderId: "876218672074",
  appId: "1:876218672074:web:a5e852ef4093a0844d2533",
  measurementId: "G-R1SVNPV37C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);