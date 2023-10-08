// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_cYZ9Kn6HhSfxBJLfNQsKBAtmDImddCU",
  authDomain: "private-routing-b42e3.firebaseapp.com",
  projectId: "private-routing-b42e3",
  storageBucket: "private-routing-b42e3.appspot.com",
  messagingSenderId: "209163448195",
  appId: "1:209163448195:web:179128abd55098910310b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;