import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGHtoZImZxem2EmNWsA2HJzM-q3Vw8Q_Y",
  authDomain: "ig-clone-208e0.firebaseapp.com",
  projectId: "ig-clone-208e0",
  storageBucket: "ig-clone-208e0.appspot.com",
  messagingSenderId: "118882187361",
  appId: "1:118882187361:web:1dc67f1c3e4b92fce69220",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
