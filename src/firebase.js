import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Sign Up
const doCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Sign In
const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
const doSignOut = () =>
  auth.signOut();

const firestore = firebase.firestore();
firestore.settings({
  timestampsInSnapshots: true
});

const booksCollection = firestore.collection("books");

export {
  // Firebase auth
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
  doSignOut,

  // Firesotre collections
  booksCollection,
}