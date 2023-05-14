// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBqGUwdjuiZAXE_gY3tnSGOL7eBGg_moGM",
    authDomain: "e-clone-ee3fd.firebaseapp.com",
    projectId: "e-clone-ee3fd",
    storageBucket: "e-clone-ee3fd.appspot.com",
    messagingSenderId: "1022295368049",
    appId: "1:1022295368049:web:abf39963c3ff7d903956d0",
    measurementId: "G-34HKXDXD79"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
