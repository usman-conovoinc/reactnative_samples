// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAp1YBlE1vpvpWSKdNgsr57tZmE4BRy4Hg",
    authDomain: "ulmo-353905.firebaseapp.com",
    projectId: "ulmo-353905",
    storageBucket: "ulmo-353905.appspot.com",
    messagingSenderId: "574027356927",
    appId: "1:574027356927:web:46e00cf313322da2f34aca",
    measurementId: "G-77G6V423FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);