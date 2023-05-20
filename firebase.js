import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDI6fII6A7ufbqMh554jHS9qtt_zI5_XWE",
    authDomain: "experiment01-3a30a.firebaseapp.com",
    projectId: "experiment01-3a30a",
    storageBucket: "experiment01-3a30a.appspot.com",
    messagingSenderId: "10209386206",
    appId: "1:10209386206:web:0fb801f310c267bd87ac4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
