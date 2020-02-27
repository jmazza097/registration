import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCrAfQ8t1dC7GpkhKdiqHSnzPLI2yKY7rM",
    authDomain: "registration-project-86414.firebaseapp.com",
    databaseURL: "https://registration-project-86414.firebaseio.com",
    projectId: "registration-project-86414",
    storageBucket: "registration-project-86414.appspot.com",
    messagingSenderId: "957846367264",
    appId: "1:957846367264:web:92dba887a7b25240eb6045",
    measurementId: "G-5JVK2LN4FV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
  firebase.firestore();

export default firebase;