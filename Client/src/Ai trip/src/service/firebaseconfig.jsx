// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "ai-travel-planner-a7021.firebaseapp.com",
  projectId: "ai-travel-planner-a7021",
  storageBucket: "ai-travel-planner-a7021.appspot.com", // Corrected
  messagingSenderId: "727177344736",
  appId: "",
  measurementId: "G-JFZJ1LX2ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Initialize Firestore

export { app, db }; // Export for use in other parts of the application
