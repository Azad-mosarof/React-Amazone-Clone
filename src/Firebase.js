// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "FIREBASE API KEY",
    authDomain: "AUTH-DOMAIN",
    projectId: "PROJECT-ID",
    storageBucket: "e-clone-ee3fd.appspot.com",
    messagingSenderId: "MESSAGING-SENDER-ID",
    appId: "APP-ID",
    measurementId: "MESUREMENT-ID"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
