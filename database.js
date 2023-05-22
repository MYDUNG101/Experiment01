import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, addDoc, collection, doc, setDoc} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDI6fII6A7ufbqMh554jHS9qtt_zI5_XWE",
    authDomain: "experiment01-3a30a.firebaseapp.com",
    projectId: "experiment01-3a30a",
    storageBucket: "experiment01-3a30a.appspot.com",
    messagingSenderId: "10209386206",
    appId: "1:10209386206:web:0fb801f310c267bd87ac4f"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const dataKey = "test"; //TODO Rename

export async function writeData(data, onSuccess){
    try {
        const docRef = await addDoc(collection(db, dataKey), data);
        onSuccess(docRef.id);
      } catch (e) {
        console.error("Error saving answers: ", e);
        onFailure();
      }
}

/*export async function writeDataWithKey(dataID, data, onSuccess){
    try {
        await setDoc(doc(db, dataKey, dataID), data);
        onSuccess(dataID);
      } catch (e) {
        console.error("Error saving answers: ", e);
        alert("An error occurred. Please try again.");
      }
}
*/