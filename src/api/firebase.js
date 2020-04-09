import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDs_iomTi_UQNvgH-HfU1bMZ2fI-2myTAc",
    authDomain: "fir-toyswer.firebaseapp.com",
    databaseURL: "https://fir-toyswer.firebaseio.com",
    projectId: "fir-toyswer",
    storageBucket: "fir-toyswer.appspot.com",
    messagingSenderId: "696568199237",
    appId: "1:696568199237:web:e240ebad358bf62b8b4b2c",
    measurementId: "G-FWP1E7JV12"
  };
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
