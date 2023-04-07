
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBOodpytVSAw2vo4H7WfGu0JuIWcgZe8i8",
  authDomain: "clonetiktok-fb.firebaseapp.com",
  projectId: "clonetiktok-fb",
  storageBucket: "clonetiktok-fb.appspot.com",
  messagingSenderId: "907114041496",
  appId: "1:907114041496:web:79665998e20ab6c80380ed"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;