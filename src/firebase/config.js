
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAVVmjKJPUAjabonsVLOLHJUCZ2Nd7S-sw",
    authDomain: "arpit--clone-app.firebaseapp.com",
    projectId: "arpit--clone-app",
    storageBucket: "arpit--clone-app.appspot.com",
    messagingSenderId: "572973071975",
    appId: "1:572973071975:web:876637fd50b0d6adfc1ec2"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};