import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDuWtZdAaYOzDUb_dajJf_WhYvpkxYN7v0",
  authDomain: "coffeandcode-97f91.firebaseapp.com",
  projectId: "coffeandcode-97f91",
  storageBucket: "coffeandcode-97f91.appspot.com",
  messagingSenderId: "648898861729",
  appId: "1:648898861729:web:085ba7438d65f05d8b6ee0",
  measurementId: "G-9JBNQ8PEC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  