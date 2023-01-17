
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-dFsAPN8tAKLAr9V-932uGEtSIGkeQLQ",
  authDomain: "ecommerce31145-e4b0c.firebaseapp.com",
  projectId: "ecommerce31145-e4b0c",
  storageBucket: "ecommerce31145-e4b0c.appspot.com",
  messagingSenderId: "1067689861679",
  appId: "1:1067689861679:web:fe3871467dceee2b005cda",
  measurementId: "G-LYMQVYLYB6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);
