import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import * as introduction from './introduction.js'

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


// $('#demographics_form').submit(function(e) {
//     e.preventDefault();
//     submit();
//     updateDisplay("debrief");
// });

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
/*
Question page
- Task question should reflect the definition of semantic transparency.

Which of the following descriptions most immediately and accurately describes the symbol for the relation in the image?

- Highlight keywords in report (Definition and task question)



*/