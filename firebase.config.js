import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyClh6Oop16HshbV1MfXMRWzDPWT2remlao",
  authDomain: "traxx-io.firebaseapp.com",
  projectId: "traxx-io",
  storageBucket: "traxx-io.appspot.com",
  messagingSenderId: "167432846366",
  appId: "1:167432846366:web:5dfa5bd430affde6d2020f",
  measurementId: "G-D41SXXDYES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);