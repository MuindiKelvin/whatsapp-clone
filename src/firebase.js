import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC9XTBG3wje5mC78lHd_idIegfdiEvSeEg",
    authDomain: "whats-app-clone-f8c85.firebaseapp.com",
    projectId: "whats-app-clone-f8c85",
    storageBucket: "whats-app-clone-f8c85.appspot.com",
    messagingSenderId: "71980028693",
    appId: "1:71980028693:web:0be9a8c00eb3abb8ec0f1c",
    measurementId: "G-2PGSLXS8ZV", 
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;