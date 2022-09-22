import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbxsA6mTPmZdAz8thSzOUQT6RcHp0ONwY",
  authDomain: "chat-4fab8.firebaseapp.com",
  projectId: "chat-4fab8",
  storageBucket: "chat-4fab8.appspot.com",
  messagingSenderId: "915211351291",
  appId: "1:915211351291:web:20708d9d1993f68808ec5e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
