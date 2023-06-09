import * as general from './general.js'
import * as data from "./data.js"
import { displayDemographics } from './demographics.js';

var answers = {};
var container = document.createElement("div");

function getAnswerCardID(answerID){
    return "answer_card" + answerID;
}
function resetAnswerButtons(img_id){
    for (let [id, _] of Object.entries(data.images[img_id].answers)) {
        let btn = document.getElementById(getAnswerCardID(id));
        btn.classList.remove("selected");
    }
}

function displayAnswerButtons(img_id, next_btn) {
    let div = document.createElement("div");
    div.classList.add("questions_container");

    for (let [id, txt] of Object.entries(data.images[img_id].answers)) {
        var btn = create_answer_card(txt);
        btn.id = getAnswerCardID(id);
        btn.addEventListener("click", function(e) {
            resetAnswerButtons(img_id);
            answers[img_id] = e.target.id;
            e.target.classList.add("selected");
            next_btn.disabled = false;
        });
        
        div.appendChild(btn);
    }

    container.appendChild(div);
}

function create_answer_card(text) {
    let card = document.createElement("button");
    card.classList.add("answer_card");
    card.innerHTML = text;
    return card;
}

var imagesIndex = Object.keys(data.images);
var shuffledImages = imagesIndex.sort((a, b) => 0.5 - Math.random());

export function displayQuestion(index){
    container.innerHTML = "";

    //Title
    let title = general.createTitle(index+1 + "/" + shuffledImages.length);
    container.appendChild(title);

    //Image
    let img = document.createElement("img");
    let img_id = shuffledImages[index];
    img.src = "images/" + data.images[img_id].image;
    img.classList.add("question_image");
    container.appendChild(img);

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
        // if (index == 1) {
        if (index+1 == shuffledImages.length) {
            displayDemographics(answers);
        } else {
            displayQuestion(index+1);
        }
    })
    btn.disabled = true;

    //Answers 
    displayAnswerButtons(img_id, btn);

    container.appendChild(btn);

    general.updateView(container);
}
