// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-EY5VB0RPKua4XS0jPyELrGQjVZVBIvE",
  authDomain: "booklibrary-eac9c.firebaseapp.com",
  projectId: "booklibrary-eac9c",
  storageBucket: "booklibrary-eac9c.appspot.com",
  messagingSenderId: "31049936847",
  appId: "1:31049936847:web:4ef4db44e0a2373deb2cba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;