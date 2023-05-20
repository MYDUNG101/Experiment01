import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import * as data from "./data.js"
import * as demographics from './demographics.js'
import * as introduction from './introduction.js'
import * as questions from './questions.js'

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

export async function test() {
    console.log(db);
    console.log(data.questions[0].title);
    // try {
    //     const docRef = await addDoc(collection(db, "users"), {
    //       first: "Ada",
    //       last: "Lovelace",
    //       born: 1815
    //     });
    //     console.log("Document written with ID: ", docRef.id);
    //   } catch (e) {
    //     console.error("Error adding document: ", e);
    //   }
    
}

var order = [];


var index = 0;

function createOrder() {
    for (var i = 0; i < images.length; i++){
        order.push(i);
    }
}
var container = document.getElementById("container");


(function () {
    introduction.displayStart();
}());

function displayPart1(){
    displayQuestion(0);
}

var index = 0;
var selected_answer;
var answers = [];



//var key = firebase.database().ref().push().key;

/*function submit() {
    var age = $("#age").val();
    var gender = $("#gender").val();
    var ethnicity = $("#ethnicity").val();
    var nationality = $("#nationality").val();
    var education = $("#education").val();
    var occupation = $("#occupation").val();

    firebase.database().ref(key).push({
        "age": age,
        "gender": gender,
        "ethnicity": ethnicity,
        "nationality": nationality,
        "education": education,
        "occupation": occupation
    });
};*/

// $(window).load(function () {
//     $("#demographics_form").submit(submit);

// });

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var answers = [];




// $('#demographics_form').submit(function(e) {
//     e.preventDefault();
//     submit();
//     updateDisplay("debrief");
// });

var displayed = "instructions0";
// export function updateDisplay(newDisp){
//     document.getElementById(displayed).style.display = "none";
//     displayed = newDisp;
//     document.getElementById(displayed).style.display = "block";   
// }

//function testDatabase(){
//    firebase.database().ref("questions").set(questions); 
//    for(j = 0; j < 70; j++){
//        console.log(questions.length);
//        var key = firebase.database().ref().push().key; 
//        firebase.database().ref(key+"/questions").update({
//            [questions[0]]: questions
//        });
//    }
//}

function submitAnswers(){
    console.log("done");
}