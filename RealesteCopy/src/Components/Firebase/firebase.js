// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByph66MmChfqElCfC1FpvMVqRnU5peoVk",
  authDomain: "tantarealstate-a92d5.firebaseapp.com",
  projectId: "tantarealstate-a92d5",
  storageBucket: "tantarealstate-a92d5.appspot.com",
  messagingSenderId: "723335438758",
  appId: "1:723335438758:web:076240bc67a9c1dc986f67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
