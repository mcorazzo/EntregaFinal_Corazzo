import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtbh3NNNyY67lQujYgewr3yTob2zZmOt8",
  authDomain: "comision-47140-80704.firebaseapp.com",
  projectId: "comision-47140-80704",
  storageBucket: "comision-47140-80704.appspot.com",
  messagingSenderId: "199111290079",
  appId: "1:199111290079:web:ddd8d26093b87613688d6a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);