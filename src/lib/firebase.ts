// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6zelZ91Z4uN3fx5U2Jh27uprEB3r7u9c",
    authDomain: "mattfordtree.firebaseapp.com",
    projectId: "mattfordtree",
    storageBucket: "mattfordtree.appspot.com",
    messagingSenderId: "318874287142",
    appId: "1:318874287142:web:06e6722be546970cc63ae7",
    measurementId: "G-S8JY8F8JMV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();