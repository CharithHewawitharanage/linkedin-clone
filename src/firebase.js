import firebase from "firebase";
const firebaseConfig = {
  apiKey: "Your Key",
  authDomain: "linkedin-clone-94286.firebaseapp.com",
  projectId: "linkedin-clone-94286",
  storageBucket: "linkedin-clone-94286.appspot.com",
  messagingSenderId: "282818048788",
  appId: "1:282818048788:web:86367a8ecb058d08ab0801",
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
export { db, auth };
