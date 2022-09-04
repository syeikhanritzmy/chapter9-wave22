// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyBJUtlFK723qIqX9xdtkmrJyQKSKJzy5WM',
  authDomain: 'fsw22-kelompok1.firebaseapp.com',
  databaseURL:
    'https://fsw22-kelompok1-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'fsw22-kelompok1',
  storageBucket: 'fsw22-kelompok1.appspot.com',
  messagingSenderId: '874770909723',
  appId: '1:874770909723:web:8220f3162e720fe43c46be',
  measurementId: 'G-YMNLCECQFP',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const db = getDatabase(firebase);
export const auth = getAuth(firebase);
// const analytics = getAnalytics(app);
