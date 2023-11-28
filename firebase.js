import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBEGTfwIUo5jdNZPrr7SxURcvIuYNCJBvI",
    authDomain: "group-20-92566.firebaseapp.com",
    projectId: "group-20-92566",
    storageBucket: "group-20-92566.appspot.com",
    messagingSenderId: "766275521716",
    appId: "1:766275521716:web:e86497b3c3a43575479be1",
    measurementId: "G-8S25ZXX9R8"
};


let app;

if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();


export {db, auth};