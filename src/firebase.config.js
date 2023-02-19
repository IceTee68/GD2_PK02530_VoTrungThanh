import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBx8_6YpYPJS0_7nUWnLBM2q22htkO9FyU",
  authDomain: "multimart-a3c5e.firebaseapp.com",
  projectId: "multimart-a3c5e",
  storageBucket: "multimart-a3c5e.appspot.com",
  messagingSenderId: "772331869004",
  appId: "1:772331869004:web:9772011c11ef0c3056f5e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;