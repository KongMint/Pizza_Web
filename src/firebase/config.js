// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKHeKloA3Rwif_19JlYK8kk8wXcbbiHuk",
  authDomain: "pizzaweb-b969f.firebaseapp.com",
  projectId: "pizzaweb-b969f",
  storageBucket: "pizzaweb-b969f.appspot.com",
  messagingSenderId: "430806436181",
  appId: "1:430806436181:web:ee8e82b45b3b52298447dc",
  measurementId: "G-23V98MMW8H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
