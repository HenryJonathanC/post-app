import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA11mSPGMoyda8VUkUu3oX5dVhGxUkXtBI",
    authDomain: "post-app-37b07.firebaseapp.com",
    projectId: "post-app-37b07",
    storageBucket: "post-app-37b07.appspot.com",
    messagingSenderId: "22466298504",
    appId: "1:22466298504:web:5b55a3ba08b7bc363fd53d",
    measurementId: "G-ZBH55Z8EHE"
  };

  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

export const db= getFirestore(app);

