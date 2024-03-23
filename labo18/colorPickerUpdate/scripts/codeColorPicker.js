const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let btnSave = document.getElementById("save");
    btnSave.addEventListener("click",save);

    for(let i = 0; i < sliders.length; i++){
         sliders[i].addEventListener("change",update);
         sliders[i].addEventListener("input",update);
    }
    update();
}

const blocks = () => {
    let blocksSaved = document.querySelectorAll(".square");
    for(let i = 0; i < blocksSaved.length; i++){
        blocksSaved[i].addEventListener("click", applyColorBlock);
    }
}

const applyColorBlock = (event) => {
    let sliders = document.getElementsByClassName("slider");
    let blocks = document.getElementsByClassName("square");
    let spans = document.getElementsByTagName("span");

    let rgb = event.target.getAttribute("style").slice(21).trim().replace("(","").replace(")","").replace(";","").split(",");

    let red = rgb[0].trim();
    let green = rgb[1].trim();
    let blue = rgb[2].trim();

    blocks[0].style.backgroundColor = "rgb("+red+","+green+","+blue+")";

    spans[0].textContent = red;
    spans[1].textContent = green;
    spans[2].textContent = blue;

    sliders[0].value = red;
    sliders[1].value = green;
    sliders[2].value = blue;
}

const save = () => {
    let newOuterDIV = document.createElement("div");
    let newInnerDIV = document.createElement("div");
    newOuterDIV.className = "colorSquare";
    newInnerDIV.className = "square";

    let btnDelete = document.createElement("input");
    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value","x");
    btnDelete.className = "delete";

    newOuterDIV.appendChild(newInnerDIV);
    newInnerDIV.appendChild(btnDelete);
    document.body.appendChild(newOuterDIV);

    let squares = document.getElementsByClassName("square");
    let sliders = document.getElementsByClassName("slider");
    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;
    squares[squares.length-1].style.backgroundColor = "rgb("+red+","+green+","+blue+")";

    let buttonsDelete = document.querySelectorAll(".delete");
    for(let i = 0; i < buttonsDelete.length; i++){
        buttonsDelete[i].addEventListener("click",deleteBlock);
    }
    blocks();
}

const deleteBlock = (event) => {
    event.target.parentElement.parentElement.remove();
}
const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let square = document.getElementsByClassName("square");

    let valueRed = sliders[0].value;
    let valueGreen = sliders[1].value;
    let valueBlue = sliders[2].value;

    square[0].style.backgroundColor = "rgb(" + valueRed + "," + valueGreen + "," + valueBlue + ")";

    let span = document.getElementsByTagName("span");

    span[0].textContent = valueRed;
    span[1].textContent = valueGreen;
    span[2].textContent = valueBlue;

}
window.addEventListener("load", setup);