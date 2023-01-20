import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    serverTimestamp,
    doc,
    orderBy,
    limit,
    onSnapshot,
    query,
  } from 'firebase/firestore';
  import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth';
  

const firebaseConfig = {
  apiKey: "AIzaSyBrpAqpuCBozfMphwYc3TcACifU04FWL7c",
  authDomain: "expense-user-authentication.firebaseapp.com",
  projectId: "expense-user-authentication",
  storageBucket: "expense-user-authentication.appspot.com",
  messagingSenderId: "572374963664",
  appId: "1:572374963664:web:13319edea84dfa0e7095d5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export {
  db,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  doc,
  auth,
  orderBy,
  limit,
  onSnapshot,
  query,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};