import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg0rEmOSajQFsjr_uJyUavUuo07H4N03I",
  authDomain: "mannat-7fcf2.firebaseapp.com",
  projectId: "mannat-7fcf2",
  storageBucket: "mannat-7fcf2.appspot.com",
  messagingSenderId: "214883455871",
  appId: "1:214883455871:web:5c55064dc01d044d27004a",
  measurementId: "G-M1RJC65JVG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
