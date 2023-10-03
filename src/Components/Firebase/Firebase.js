// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB4O5A85kgpKB1YvdZNZ5g4AHtAtQEwEY",
  authDomain: "email-auth-34ce3.firebaseapp.com",
  projectId: "email-auth-34ce3",
  storageBucket: "email-auth-34ce3.appspot.com",
  messagingSenderId: "1068130119217",
  appId: "1:1068130119217:web:bcbccaa2e3927c91d22f10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth