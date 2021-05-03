import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB95YNz9XwEsX1cH5UcYOQhgX4-35vcDvs",
  authDomain: "clone-b5608.firebaseapp.com",
  projectId: "clone-b5608",
  storageBucket: "clone-b5608.appspot.com",
  messagingSenderId: "1069681367665",
  appId: "1:1069681367665:web:10cedd30c2e0961f2699d0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
