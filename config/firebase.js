// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "gdsc-coreteam-submission.firebaseapp.com",
  projectId: "gdsc-coreteam-submission",
  storageBucket: "gdsc-coreteam-submission.appspot.com",
  messagingSenderId: "42384617450",
  appId: "1:42384617450:web:c6485841f22a06d6e14c93",
  measurementId: "G-CLWYXP4Z4J",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
