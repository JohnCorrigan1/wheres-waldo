import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCIZaujMKuuco7OtPt8KnA1KNz3UWpmtqQ",
  authDomain: "wheres-waldo-86d9a.firebaseapp.com",
  projectId: "wheres-waldo-86d9a",
  storageBucket: "wheres-waldo-86d9a.appspot.com",
  messagingSenderId: "406553745107",
  appId: "1:406553745107:web:d7e074399dcc1adce0a626",
  measurementId: "G-VT19SDTB30"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);