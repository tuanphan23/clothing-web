import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBepL_0J7nNLTPRjrY6oY3CGPZdG_yMM_Q",
    authDomain: "clothing-db-29a0b.firebaseapp.com",
    databaseURL: "https://clothing-db-29a0b.firebaseio.com",
    projectId: "clothing-db-29a0b",
    storageBucket: "clothing-db-29a0b.appspot.com",
    messagingSenderId: "860407452492",
    appId: "1:860407452492:web:6327df5b22e138865d35e9",
    measurementId: "G-EDJGNRQFT9"
  };

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;