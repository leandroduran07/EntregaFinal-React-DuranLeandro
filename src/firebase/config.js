// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiQjfU_MkHojqZOSjWYB1jUQaL3DG_eNs",
    authDomain: "e-commerce360sports.firebaseapp.com",
    projectId: "e-commerce360sports",
    storageBucket: "e-commerce360sports.appspot.com",
    messagingSenderId: "360676552805",
    appId: "1:360676552805:web:c1330cc4ac14593bb2168c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);