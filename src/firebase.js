// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBdJi7nmJmHhjskl7Bv6QrFThdA3tyXKLw",
    authDomain: "saveme-7564a.firebaseapp.com",
    projectId: "saveme-7564a",
    storageBucket: "saveme-7564a.appspot.com",
    messagingSenderId: "1015934095819",
    appId: "1:1015934095819:web:0dd65d4288ec4c8cc0a64e",
    measurementId: "G-V28D0QZ6ZD"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth= firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;