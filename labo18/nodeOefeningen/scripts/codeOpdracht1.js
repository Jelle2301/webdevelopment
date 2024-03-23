const setup = () => {
    const pElements = document.querySelectorAll("p");
    pElements.item(0).innerHTML = "Good job!";
}

window.addEventListener("load", setup);