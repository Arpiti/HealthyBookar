
import firebase from 'firebase';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB9y834lqiqH7tQwNnFnwg8Q9FfYA6wwNU",
    authDomain: "healthybookar.firebaseapp.com",
    projectId: "healthybookar",
    storageBucket: "healthybookar.appspot.com",
    messagingSenderId: "890349419608",
    appId: "1:890349419608:web:bba4da26394b01f1525e2d",
    measurementId: "G-EF5M6TYCEJ"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.addScope('https://www.googleapis.com/auth/userinfo.profile');

  const fbProvider = new firebase.auth.FacebookAuthProvider();
  fbProvider.addScope('user');

  export {db, auth, googleProvider, fbProvider};