import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUqjHKpCTlUcqM7sY1iB0ff_Y_9YrXMnI",
  authDomain: "web-portfolio-a77da.firebaseapp.com",
  projectId: "web-portfolio-a77da",
  storageBucket: "web-portfolio-a77da.appspot.com",
  messagingSenderId: "145646420308",
  appId: "1:145646420308:web:c6815026f6d2c9002d48c1",
};

firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();
//referncia completa
export const storageRef = storage.ref();
//firestore
export const db = getFirestore();
