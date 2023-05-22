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

    let paraImage = general.createParagraph(data.pages.dcr.text_image);
    container.appendChild(paraImage);

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
    let para_exclude = general.createParagraph(data.pages.example.text_exclude);
    container.appendChild(para_exclude);
    // //Image
    // let img_exclude = document.createElement("img");
    // img_exclude.src = "images/Instructions/exclude.png";
    // img_exclude.classList.add("instructions_image");
    // container.appendChild(img_exclude);

    let para_condition = general.createParagraph(data.pages.example.text_condition);
    container.appendChild(para_condition);
    // //Image
    // let img_condition = document.createElement("img");
    // img_condition.src = "images/Instructions/condition.png";
    // img_condition.classList.add("instructions_image");
    // container.appendChild(img_condition);


    let para_response = general.createParagraph(data.pages.example.text_response);
    container.appendChild(para_response);
    // //Image
    // let img_response = document.createElement("img");
    // img_response.src = "images/Instructions/response.png";
    // img_response.classList.add("instructions_image");
    // container.appendChild(img_response);

    let para_include = general.createParagraph(data.pages.example.text_include);
    container.appendChild(para_include);
    // //Image
    // let img_include = document.createElement("img");
    // img_include.src = "images/Instructions/include.png";
    // img_include.classList.add("instructions_image");
    // container.appendChild(img_include);

    let para_milestone = general.createParagraph(data.pages.example.text_milestone);
    container.appendChild(para_milestone);
    
    // //Image
    // let img_milestone = document.createElement("img");
    // img_milestone.src = "images/Instructions/milestone.png";
    // img_milestone.classList.add("instructions_image");
    // container.appendChild(img_milestone);

    // //Image
    // let img = document.createElement("img");
    // img.src = "images/example.png";
    // img.classList.add("question_image_example");
    // container.appendChild(img);

    // let paraEvent = general.createParagraph(data.pages.instructions.text_events);
    // container.appendChild(paraEvent);

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
    img.src = "images/example.png";
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