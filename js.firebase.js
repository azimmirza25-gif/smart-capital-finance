// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOxE_E0fPh72elFBskNwkJ2U1oq8CRNis",
  authDomain: "smart-capital-loans-75420.firebaseapp.com",
  projectId: "smart-capital-loans-75420",
  storageBucket: "smart-capital-loans-75420.firebasestorage.app",
  messagingSenderId: "265036372809",
  appId: "1:265036372809:web:df065ee7cb483bc370d898",
  measurementId: "G-TXP68FLY2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
