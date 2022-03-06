import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3-0MfiHX8gi-IW-sB9LGP-EgtCU2c5dM",
  authDomain: "clone-d9d62.firebaseapp.com",
  projectId: "clone-d9d62",
  storageBucket: "clone-d9d62.appspot.com",
  messagingSenderId: "901196152643",
  appId: "1:901196152643:web:5f4aef3c786dd42c19f9f6",
  measurementId: "G-E42GNDT67G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
