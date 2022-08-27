// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJUtlFK723qIqX9xdtkmrJyQKSKJzy5WM",
  authDomain: "fsw22-kelompok1.firebaseapp.com",
  databaseURL: "https://fsw22-kelompok1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fsw22-kelompok1",
  storageBucket: "fsw22-kelompok1.appspot.com",
  messagingSenderId: "874770909723",
  appId: "1:874770909723:web:8220f3162e720fe43c46be",
  measurementId: "G-YMNLCECQFP"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default firebase;