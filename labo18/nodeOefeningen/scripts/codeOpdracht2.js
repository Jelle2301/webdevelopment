const setup = () => {
    let liElements = document.querySelectorAll("li");
    let image = document.createElement("img");
    image.setAttribute("src","images/leider.jpg");
    document.body.appendChild(image);
    for(let i = 0; i < liElements.length; i++){
        liElements[i].classList += "listItem";
    }
}

window.addEventListener("load", setup);