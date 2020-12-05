import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA78TYuQXaKMZ3w5t_wvhQpRvdMAt6MCns",
  authDomain: "theapprentice-efe75.firebaseapp.com",
  databaseURL: "https://theapprentice-efe75.firebaseio.com",
  projectId: "theapprentice-efe75",
  storageBucket: "theapprentice-efe75.appspot.com",
  messagingSenderId: "532839982427",
  appId: "1:532839982427:web:39fe7140f73da28761e67e",
  measurementId: "G-P39RLG641B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;