
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDCo3SOoDVBQmpxD6TEP0tuSdTE6zVzN5E",
  authDomain: "pop-c0b20.firebaseapp.com",
  projectId: "pop-c0b20",
  storageBucket: "pop-c0b20.appspot.com",
  messagingSenderId: "135709359159",
  appId: "1:135709359159:web:7aa9d6116aa24bcf7453b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider

export {auth,provider}