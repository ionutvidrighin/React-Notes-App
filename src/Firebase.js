import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGIDqjQCZZP8djX0VPmsJ9_es4Z_xZoDY",
  authDomain: "notes-app-2cdfa.firebaseapp.com",
  projectId: "notes-app-2cdfa",
  storageBucket: "notes-app-2cdfa.appspot.com",
  messagingSenderId: "1004292708292",
  appId: "1:1004292708292:web:d02b12d873306aef5a3691",
  measurementId: "G-29WSPVH3YG"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const dataBase = firebaseApp.firestore();
export const auth = firebase.auth();
export const signIn = async () => {
await auth.signInWithPopup(provider)
}

export default dataBase;