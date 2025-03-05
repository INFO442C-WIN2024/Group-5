import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBaAAApaZsgp197kmnX6KhP9Z8amePfQE0",
  authDomain: "info442-518fd.firebaseapp.com",
  projectId: "info442-518fd",
  storageBucket: "info442-518fd.firebasestorage.app",
  messagingSenderId: "125558132623",
  appId: "1:125558132623:web:e22c4958a29a39ce9245fa",
  measurementId: "G-CDSC2VQPSM"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };