import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBqMXFBgr7O39Sg477as2AWdakITK4a0zQ",
  authDomain: "react-bancodedados.firebaseapp.com",
  projectId: "react-bancodedados",
  storageBucket: "react-bancodedados.appspot.com",
  messagingSenderId: "573618658962",
  appId: "1:573618658962:web:e3391b27ff66a67421d04b",
  measurementId: "G-3HLFG45LJS"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };