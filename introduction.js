import * as general from './general.js'
import * as data from "./data.js"
import * as questions from './questions.js'

import { displayDemographics } from './demographics.js';
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
        displayDCR();
    })
    container.appendChild(btn);
}

export function displayDCR(){
    container.innerHTML = "";
    let title = general.createTitle(data.pages.dcr.title);
    container.appendChild(title);

    let para = general.createParagraph(data.pages.dcr.text);
    container.appendChild(para);

    //Image
    let img = document.createElement("img");
    img.src = "images/example.png";
    img.classList.add("question_image_example");
    container.appendChild(img);

    // Markings
    let paraPreMarkings = general.createParagraph(data.pages.dcr.text_pre_markings);
    container.appendChild(paraPreMarkings);

    let imgMarkings = document.createElement("img");
    imgMarkings.src = "images/Markings.png";
    imgMarkings.classList.add("question_image_example");
    container.appendChild(imgMarkings);

    let paraMarkings = general.createParagraph(data.pages.dcr.text_markings);
    container.appendChild(paraMarkings);

    let paraNext = general.createParagraph(data.pages.dcr.text_next);
    container.appendChild(paraNext);

    let btn = general.createButton(data.pages.dcr.button, function() {
        displayInstructionsExample();
    })
    container.appendChild(btn);
}

export function displayInstructionsExample(){
    container.innerHTML = "";
    let title = general.createTitle(data.pages.example.title);
    container.appendChild(title);

    let para = general.createParagraph(data.pages.example.text);
    container.appendChild(para);

    //Image
    let img = document.createElement("img");
    img.src = "images/example2.png";
    img.classList.add("question_image_example");
    container.appendChild(img);

    let para_exclude = general.createParagraph(data.pages.example.text_exclude);
    container.appendChild(para_exclude);

    let para_condition = general.createParagraph(data.pages.example.text_condition);
    container.appendChild(para_condition);

    let para_include = general.createParagraph(data.pages.example.text_include);
    container.appendChild(para_include);

    let para_response = general.createParagraph(data.pages.example.text_response);
    container.appendChild(para_response);

    let para_milestone = general.createParagraph(data.pages.example.text_milestone);
    container.appendChild(para_milestone);

    let para_next = general.createParagraph(data.pages.example.text_next);
    container.appendChild(para_next);

    let btn = general.createButton(data.pages.example.button, function() {
        displayInstructions();
    })
    container.appendChild(btn);
}

export function displayInstructions(){
    container.innerHTML = "";
    let title = general.createTitle(data.pages.instructions.title);
    container.appendChild(title);

    //Image
    let img = document.createElement("img");
    img.src = "images/example3.png";
    img.classList.add("question_image_example");
    container.appendChild(img);

    let para = general.createParagraph(data.pages.instructions.text);
    container.appendChild(para);

    let btn = general.createButton(data.pages.example.button, function() {
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
        questions.displayQuestion(0);
    })
    container.appendChild(btn);
}