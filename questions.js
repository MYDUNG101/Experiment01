import * as general from './general.js'
import * as data from "./data.js"
import { displayDemographics } from './demographics.js';


var selected_answer;
var answers = [];

function resetButtons(answer_buttons){
    for (let b of answer_buttons) {
        b.classList.remove("selected");
        selected_answer = null;
    }
}

function displayAnswerButtons(next_btn) {
    let div = document.createElement("div");
    div.classList.add("questions_container");

    let answer_buttons = [];
    for (let ans of data.answers) {
        var btn = create_answer_card(ans);
        answer_buttons.push(btn);
    }

    for (let btn of answer_buttons){
        btn.addEventListener("click", function() {
            resetButtons(answer_buttons);
            btn.classList.add("selected");
            selected_answer = btn;
            next_btn.disabled = false;
        });
        div.appendChild(btn);
    }
    container.appendChild(div);
    /*let next = document.getElementById("answer_button");
    next.addEventListener("click", function(){
        
    });*/
}


function create_answer_card(text) {
    let card = document.createElement("button");
    card.classList.add("answer_card");
    card.innerHTML = text;
    return card;
}


export function displayQuestion(index){
    container.innerHTML = "";

    //Title
    let title = general.createTitle(index+1 + "/" + data.shuffledImages.length);
    container.appendChild(title);

/*
    if (currentButtons != null){
        for(var i = 0; i < currentButtons.length; i++){
            currentButtons[i].disabled = false;
        }
    }*/

    //Image
    let img = document.createElement("img");
    img.src = "images/" + data.images[data.shuffledImages[index]].image;
    img.classList.add("question_image");
    container.appendChild(img);

    console.log(data.images[data.shuffledImages[index]].image);
    console.log(index);


    // Notation for representing the events
    // let eventNotation = general.createParagraph(data.pages.questions.text_events);
    // eventNotation.classList.add("pcenter");
    // eventNotation.classList.add("p_inline_block");
    // container.appendChild(eventNotation);

    // Task
    let task = general.createParagraph(data.pages.questions.text_task);
    task.classList.add("pcenter");
    task.classList.add("p_inline_block");

    let task_container = document.createElement("div");
    task_container.appendChild(task);

    let tooltip_badge = document.createElement("span");
    tooltip_badge.classList.add("tooltip_badge");
    tooltip_badge.innerText = "?";
    let tooltip_text = document.createElement("span");
    tooltip_text.classList.add("tooltip_text");
    tooltip_text.innerHTML = data.pages.questions.tooltip;
    tooltip_badge.appendChild(tooltip_text);

    task_container.appendChild(tooltip_badge);
    container.appendChild(task_container);

    //Next button
    let btn = general.createButton(data.pages.questions.button, function() {
        answers.push(selected_answer);
        if (index+1 == data.shuffledImages.length) {
            displayDemographics();
        } else {
            displayQuestion(index+1);
        }
    })
    btn.disabled = true;

    //Answers 
    displayAnswerButtons(btn);

    container.appendChild(btn);
}

