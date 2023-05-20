import * as data from "./data.js"
import * as general from './general.js'

function createInputLabel(input_field){
    let lbl_container = document.createElement("div");
    lbl_container.classList.add("lbl_container");

    let lbl = document.createElement("label");
    lbl.htmlFor = input_field.label;
    lbl.innerHTML = input_field.label;
    lbl_container.appendChild(lbl);

    if(input_field.tooltip){
        let tooltip_badge = document.createElement("span");
        tooltip_badge.classList.add("tooltip_badge");
        tooltip_badge.innerText = "?";
        let tooltip_text = document.createElement("span");
        tooltip_text.classList.add("tooltip_text");
        tooltip_text.innerHTML = input_field.tooltip;
        tooltip_badge.appendChild(tooltip_text);

        lbl_container.appendChild(tooltip_badge);
    }

    return lbl_container;
}

function appendTextInput(form, input_field){
    let lbl = createInputLabel(input_field);

    let inp = document.createElement("input");
    inp.type = input_field.type;    
    inp.id = input_field.label;
    inp.placeholder = input_field.placeholder;
    inp.required = input_field.required;

    if(input_field.regex) {
        inp.oldValue = "";
        inp.addEventListener("input", function(e){
            if(!e.target.value.match(input_field.regex)){
                e.target.value = e.target.oldValue;
            }
            e.target.oldValue = e.target.value;
        });
    }

    form.appendChild(lbl);
    form.appendChild(inp);
}

function appendRadioInput(form, input_field){
    let radioForm = document.createElement("div");
    radioForm.classList.add("radio_form");

    let lbl = createInputLabel(input_field);

    let inp = document.createElement("input");
    inp.type = input_field.type;    
    inp.id = input_field.label;
    inp.required = input_field.required;

    for(let opt of input_field.options) {
        let opt_lbl = document.createElement("label");
        opt_lbl.htmlFor = opt;
        opt_lbl.innerHTML = opt;
        let opt_inp = document.createElement("input");
        opt_inp.type = "radio";
        opt_inp.id = opt
        opt_inp.name = input_field.label;
        opt_inp.required = input_field.required;
        radioForm.appendChild(opt_inp);
        radioForm.appendChild(opt_lbl);
    }
    form.appendChild(lbl);
    form.appendChild(radioForm);
}

export function createForm(){
    let form = document.createElement("form");
    form.classList.add("demographics_form");

    for(let input_field of data.demographics_form){
        if (input_field.type == "text"){
            appendTextInput(form, input_field);
        } else if (input_field.type == "radio"){
            appendRadioInput(form, input_field);
        }
    }
    return form;
}

export function displayDemographics(){
    container.innerHTML = "";
    let title = general.createTitle("DEMOGRAPHICS");
    container.appendChild(title);

    let para = general.createParagraph(data.pages.demographics.text);
    para.classList.add("pcenter")
    container.appendChild(para);

    let submit_btn = document.createElement("input");
    submit_btn.innerHTML = data.pages.demographics.button;
    submit_btn.classList.add("navigation_btn");
    submit_btn.type = "submit";

    let form = createForm();
    form.appendChild(submit_btn);
    form.addEventListener("submit", submitAnswers);

    container.appendChild(form); 
}

function submitAnswers(e){
    console.log("done");
    e.preventDefault();
    displayThanks()
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
    return true;
}

export function displayThanks(){
    container.innerHTML = "";
    let title = general.createTitle(data.pages.thanks.title);
    container.appendChild(title);

    let para = general.createParagraph(data.pages.thanks.text);
    para.classList.add("pcenter")
    container.appendChild(para);
}