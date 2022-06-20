import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const settings = { timestampsInSnapshots: true };
const config = {
    apiKey: "AIzaSyAXjjghYf86GkbRJnDt3Ddj2YbQdztSf-A",
    authDomain: "pemrograman-berbasis-framework.firebaseapp.com",
    projectId: "pemrograman-berbasis-framework",
    storageBucket: "pemrograman-berbasis-framework.appspot.com",
    messagingSenderId: "467435478586",
    appId: "1:467435478586:web:0b7b11c9e4492db9be1f03",
    measurementId: "G-JBX330GKPQ",
    measurementId: "G-C8CXTNMWFG"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;