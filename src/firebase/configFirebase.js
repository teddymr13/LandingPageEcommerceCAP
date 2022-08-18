
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
 } from "firebase/auth";

import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnQ24qJgXwXx5tL9TbrFbSlJuUgBv5Xi0",
  authDomain: "landing-page-ecommerce-cap.firebaseapp.com",
  projectId: "landing-page-ecommerce-cap",
  storageBucket: "landing-page-ecommerce-cap.appspot.com",
  messagingSenderId: "786924208046",
  appId: "1:786924208046:web:7451b59b6f9f0d0095523f",
  measurementId: "G-NJ93XPY5WS"
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
console.log("auth-users", auth);

export {
  app, 
  auth, 
  db, 
  logInWithEmailAndPassword, 
  registerWithEmailAndPassword,
  logout
};


