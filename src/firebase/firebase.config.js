import { initializeApp } from "firebase/app";

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

console.log("Firebase Config Debug:", firebaseConfig); // Debug to check config values

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

