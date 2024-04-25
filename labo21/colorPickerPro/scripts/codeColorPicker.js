const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for(let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("change",update);
        sliders[i].addEventListener("input",update);
    }

    let btnSave = document.getElementById("save");
    btnSave.addEventListener("click",save);

    initialize();
}
const applyColorBlock = (event) => {
    let sliders = document.getElementsByClassName("slider");
    let colorPalet = document.getElementById("colorPalet");
    let spans = document.getElementsByTagName("span");

    let rgb = event.currentTarget.style.backgroundColor.match(/\d+/g);
    let red = rgb[0].trim();
    let green = rgb[1].trim();
    let blue = rgb[2].trim();

    colorPalet.style.backgroundColor = "rgb("+red+","+green+","+blue+")";

    spans[0].textContent = red;
    spans[1].textContent = green;
    spans[2].textContent = blue;

    sliders[0].value = red;
    sliders[1].value = green;
    sliders[2].value = blue;

    localStorage.setItem('lastColor', JSON.stringify(colorPalet.style.backgroundColor));
}
const save = () => {
    let sliders = document.getElementsByClassName("slider");
    restore(sliders[0].value,sliders[1].value,sliders[2].value);
    saveToLocalStorage();
}
const deleteBlock = (event) => {
    event.stopPropagation();
    let colorBlock = event.currentTarget.parentNode;
    let colorContainer = document.getElementById("colorContainer");
    colorContainer.removeChild(colorBlock);
    saveToLocalStorage();
}
const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorPalet = document.getElementById("colorPalet");

    colorPalet.style.backgroundColor = "rgb(" + sliders[0].value + "," + sliders[1].value + "," + sliders[2].value + ")";

    let span = document.getElementsByTagName("span");
    span[0].textContent = sliders[0].value;
    span[1].textContent = sliders[1].value;
    span[2].textContent = sliders[2].value;

    localStorage.setItem('lastColor', JSON.stringify(colorPalet.style.backgroundColor));
}
const restore = (red,green,blue) => {
    let colorContainer = document.querySelector("#colorContainer");
    let colorBlock = document.createElement("div");
    colorBlock.className = "square";
    colorBlock.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    colorBlock.addEventListener("click", applyColorBlock);

    let btnDelete = document.createElement("input");
    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value","x");
    btnDelete.addEventListener("click", deleteBlock);

    console.log(colorContainer);
    colorBlock.appendChild(btnDelete);
    colorContainer.appendChild(colorBlock);
}
const saveToLocalStorage = () => {
    let blocksSavedColor = [];
    let blocksSaved = document.querySelectorAll(".square");
    blocksSaved.forEach(block => {
        let rgb = block.style.backgroundColor.match(/\d+/g);
        let saveBlock = {
            red: rgb[0],
            green: rgb[1],
            blue: rgb[2]
        }
        blocksSavedColor.push(saveBlock);
    });
    localStorage.setItem('savedBlocks',JSON.stringify(blocksSavedColor));
}
const loadFromLocalStorage = () => {
    let savedBlocksJSON = localStorage.getItem('savedBlocks');
    if(savedBlocksJSON){
        JSON.parse(savedBlocksJSON).forEach(block => {
            restore(block.red,block.green,block.blue);
        });
    }
}
const initialize = () => {
    let standaardValue = 50;

    let sliders = document.querySelectorAll(".slider");
    let span = document.querySelectorAll("span");
    let colorPalet = document.querySelector("#colorPalet");

    let lastColor = localStorage.getItem("lastColor");
    if(lastColor){
        colorPalet.style.background = JSON.parse(lastColor);
        let rgb = colorPalet.style.backgroundColor.match(/\d+/g);
        console.log(rgb);
        for(let i = 0; i < sliders.length; i++){
            span[i].textContent = `${rgb[i]}`;
            sliders[i].value = rgb[i];
        }
    }
    else {
        colorPalet.style.background = `rgb(${standaardValue},${standaardValue},${standaardValue})`;
        for(let i = 0; i < sliders.length; i++){
            span[i].textContent = `${standaardValue}`;
            sliders[i].value = standaardValue;
        }
    }
    loadFromLocalStorage();
}
window.addEventListener("load", setup);