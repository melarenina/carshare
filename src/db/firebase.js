import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCI3r7jMOvz_9Iy4LDjblW1SQlufHKr6ok",
  authDomain: "carshare-if.firebaseapp.com",
  projectId: "carshare-if",
  storageBucket: "carshare-if.appspot.com",
  messagingSenderId: "364648596141",
  appId: "1:364648596141:web:49589fe7cab1d7244e7c24",
  measurementId: "G-RYF9KKV5NW"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;