// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyN7oYsIwE5-wHqKkO_SaChPDZTSlbsOs",
  authDomain: "hostel-management-system-c660c.firebaseapp.com",
  projectId: "hostel-management-system-c660c",
  storageBucket: "hostel-management-system-c660c.appspot.com",
  messagingSenderId: "1014526682483",
  appId: "1:1014526682483:web:7a776b21a5ea710cf6d106"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth