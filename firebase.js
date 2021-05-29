import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBQtQo18b50Sm5pm8ou0MTz_JqrtcJhea8",
    authDomain: "letschat-fd931.firebaseapp.com",
    projectId: "letschat-fd931",
    storageBucket: "letschat-fd931.appspot.com",
    messagingSenderId: "689064843515",
    appId: "1:689064843515:web:522f0ef70d8ccdacb2b85e",
    measurementId: "G-3XP79W7N4M"
  };
  const app = !firebase.apps.length
            ? firebase.initializeApp(firebaseConfig)
            : firebase.app();
            const db = firebase.firestore();
            const auth = app.auth();
            const provider = new firebase.auth.GoogleAuthProvider();
            export { db, auth, provider};