const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);
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