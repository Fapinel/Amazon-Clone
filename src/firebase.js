import firebase from "firebase";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyC36VwVZbtx6AOl33gAOC2vdVCPay3Yqtg",
    authDomain: "challenge-41c2sd.firebaseapp.com",
    projectId: "challenge-41c2sd",
    storageBucket: "challenge-41c2sd.appspot.com",
    messagingSenderId: "503046350632",
    appId: "1:503046350632:web:24e8fa24e3b4f39a54921d",
    measurementId: "G-009KXFCF29"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};