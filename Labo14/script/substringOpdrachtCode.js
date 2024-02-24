const setup = () => {
   let btnSubstring = document.getElementById("btnSubstr");
   btnSubstring.addEventListener("click",substring);
}
const substring = () => {
    let txtInput = document.getElementById("txtInput");
    let text = txtInput.value;
    let indexFirst = document.getElementById("firstIndex");
    let firstIndex = indexFirst.value;
    let indexLast = document.getElementById("lastIndex");
    let lastIndex = indexLast.value;
    let txtOutput = document.getElementById("txtOutput");
    txtOutput.innerHTML = text.substring(firstIndex,lastIndex);
}
window.addEventListener("load", setup);