import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC98EIxw6T8UHC_2jiERGclng5MQjkuPoI",
    authDomain: "to-do-react-b6490.firebaseapp.com",
    projectId: "to-do-react-b6490",
    storageBucket: "to-do-react-b6490.appspot.com",
    messagingSenderId: "1076952916855",
    appId: "1:1076952916855:web:6c0ffc6122b4b7f4fb7772",
    measurementId: "G-5TBPB1QXHS"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const dataBase = firebaseApp.firestore();
export const auth = firebase.auth();
export const signIn = async () => {
await auth.signInWithPopup(provider)
}

export default dataBase;