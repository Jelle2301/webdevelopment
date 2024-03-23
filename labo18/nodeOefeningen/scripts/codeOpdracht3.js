const setup = () => {
    let btnAppendDIV = document.querySelector("#buttonValidate");
    btnAppendDIV.addEventListener("click", appendToDIV);
}

const appendToDIV = () => {
    let textInput = document.querySelector("#textInput").value.trim();
    let pElementInput = document.createElement("p");
    let pElementInputText = document.createTextNode(textInput);
    document.querySelector("#myDIV").appendChild(document.createElement("br"));
    document.querySelector("#myDIV").appendChild(pElementInput.appendChild(pElementInputText));
}

window.addEventListener("load", setup);