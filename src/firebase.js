// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD2qhu42rARx40t3HYP44OsT-WeISfmGwU",
    authDomain: "linked-in-80c0d.firebaseapp.com",
    projectId: "linked-in-80c0d",
    storageBucket: "linked-in-80c0d.appspot.com",
    messagingSenderId: "153437302901",
    appId: "1:153437302901:web:91ca13e916f07b6c18883c",
    measurementId: "G-415QV954L0"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};