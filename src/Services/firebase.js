import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAoVG3BJesrtjj3AI98Dn0yUUTOnlmztQg",
  authDomain: "clone-583ed.firebaseapp.com",
  databaseURL: "https://clone-583ed.firebaseio.com",
  projectId: "clone-583ed",
  storageBucket: "clone-583ed.appspot.com",
  messagingSenderId: "399848207843",
  appId: "1:399848207843:web:a8a29c9724ed0bc97fdcd6",
  measurementId: "G-055VJBW4N5"


});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };