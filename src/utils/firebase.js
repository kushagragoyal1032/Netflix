// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCl9fLMr7TU5EWk6q99Q25vvmPYQwqau0",
    authDomain: "netflixgpt-43b1d.firebaseapp.com",
    projectId: "netflixgpt-43b1d",
    storageBucket: "netflixgpt-43b1d.appspot.com",
    messagingSenderId: "30934658577",
    appId: "1:30934658577:web:d43c787205e8dddcfb0bb0",
    measurementId: "G-PMKJKLKXXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();