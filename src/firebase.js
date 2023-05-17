// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABiqw5XP1-0tx0ONQb-bowTFlGli-8MA0",
  authDomain: "react-blog-197b2.firebaseapp.com",
  projectId: "react-blog-197b2",
  storageBucket: "react-blog-197b2.appspot.com",
  messagingSenderId: "355119192644",
  appId: "1:355119192644:web:f330a8e34a4adca34cba11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);