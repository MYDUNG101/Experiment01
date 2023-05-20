import * as general from './general.js'
import * as data from "./data.js"
import * as questions from './questions.js'

var index = 0;

export function displayStart(){
    container.innerHTML = "";
    let title = general.createTitle(data.pages.start.title);
    container.appendChild(title);

    let btn = general.createButton(data.pages.about.button, function() {
        displayAbout();
    })
    container.appendChild(btn);
}

export function displayAbout(){
    container.innerHTML = "";
    let title = general.createTitle(data.pages.about.title);
    container.appendChild(title);

    let para = general.createParagraph(data.pages.about.text);
    container.appendChild(para);

    let btn = general.createButton(data.pages.about.button, function() {
        displayInstructions();
    })
    container.appendChild(btn);
}

export function displayInstructions(){
    container.innerHTML = "";
    let title = general.createTitle(data.pages.instructions.title);
    container.appendChild(title);

    let para = general.createParagraph(data.pages.instructions.text);
    container.appendChild(para);

    //Image
    let img = document.createElement("img");
    img.src = "images/example.png";
    img.classList.add("question_image_example");
    container.appendChild(img);

    let paraEvent = general.createParagraph(data.pages.instructions.text_events);
    container.appendChild(paraEvent);

    let btn = general.createButton(data.pages.instructions.button, function() {
        displayInstructions2();
    })
    container.appendChild(btn);
}

export function displayInstructions2(){
    container.innerHTML = "";
    let title = general.createTitle("");
    container.appendChild(title);

    let para = general.createParagraph(data.pages.instructions2.text);
    para.classList.add("pcenter")
    container.appendChild(para);

    let btn = general.createButton(data.pages.instructions2.button, function() {
        questions.displayQuestion(index);
    })
    container.appendChild(btn);
}