import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwxZVm6GF6e-EkSES9aoWFDbMm66EKABs",
  authDomain: "crobasket-a8660.firebaseapp.com",
  databaseURL: "https://crobasket-a8660.firebaseio.com",
  projectId: "crobasket-a8660",
  storageBucket: "crobasket-a8660.appspot.com",
  messagingSenderId: "952400360271",
  appId: "1:952400360271:web:d628d2ef8a35e68e994b3a",
  measurementId: "G-V66X8FJV9Z"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(); //eslint-disable-line
//const db = firebase.firestore();

export default app;
