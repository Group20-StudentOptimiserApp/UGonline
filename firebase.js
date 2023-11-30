import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBtE7DikFVaegmFbDN6HNZPRRgKE86eSbk",
    authDomain: "ugonline-fd1fb.firebaseapp.com",
    projectId: "ugonline-fd1fb",
    storageBucket: "ugonline-fd1fb.appspot.com",
    messagingSenderId: "1049358467143",
    appId: "1:1049358467143:web:9a35b006f2973155943162"
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