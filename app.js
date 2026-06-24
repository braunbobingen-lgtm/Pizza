import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmDcVbJpn-YCi9tcx4NjRduU8MI5k6oWg",
  authDomain: "pizza-augsburg.firebaseapp.com",
  projectId: "pizza-augsburg",
  storageBucket: "pizza-augsburg.firebasestorage.app",
  messagingSenderId: "32158398908",
  appId: "1:32158398908:web:46a09cf5bed10eefb113b9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadMenu() {
  const querySnapshot = await getDocs(collection(db, "menu"));

  querySnapshot.forEach((doc) => {
    console.log(doc.id, doc.data());
  });
}

loadMenu();
