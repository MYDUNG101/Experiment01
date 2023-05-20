export function createTitle(text) {
    let h1 = document.createElement("h1");
    h1.innerHTML = text;
    return h1;
}

export function createParagraph(text) {
    let p = document.createElement("p");
    p.innerHTML = text;
    return p;
}

export function createButton(text, clickFn) {
    let btn = document.createElement("button");
    btn.innerHTML = text;
    btn.classList.add("navigation_btn");
    btn.addEventListener("click", clickFn);
    return btn;
}