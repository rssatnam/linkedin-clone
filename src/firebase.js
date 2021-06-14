import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcUn6Pq-CUTIkGz-Ao1xe4HOQtF6yjLuk",
  authDomain: "linkedin-clone-77022.firebaseapp.com",
  projectId: "linkedin-clone-77022",
  storageBucket: "linkedin-clone-77022.appspot.com",
  messagingSenderId: "862283523439",
  appId: "1:862283523439:web:3a62a347c1eddf547b749a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
