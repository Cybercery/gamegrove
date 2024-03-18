// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlwzLXxjlAiUOJDO81imGMmzsbEEHCAEk",
  authDomain: "game-grove-final.firebaseapp.com",
  projectId: "game-grove-final",
  storageBucket: "game-grove-final.appspot.com",
  messagingSenderId: "82861925563",
  appId: "1:82861925563:web:7d1c3ec90fb1bad89ab59e",
  measurementId: "G-MTL8E0EG1X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { auth };