const setup = () => {
    let button = document.getElementById("submit");
    let button2 = document.getElementById("submit2");
    button.addEventListener("click",update);
    button2.addEventListener("click",update2);
}

const update = () => {
    let inputTxt = document.getElementById("input");
    let inputTxtKleineLetters = inputTxt.value.toLowerCase();
    let index = 0;
    let counter = 0;
    let stoppen = false;
        while(!stoppen){
            if(inputTxtKleineLetters.indexOf("an",index) !== -1){
                index = inputTxtKleineLetters.indexOf("an",index) + 1;
                counter++;
            }
            else {
                stoppen = true;
            }
        }
    console.log(counter);
}

const update2 = () => {
    let inputTxt = document.getElementById("input");
    let inputTxtKleineLetters = inputTxt.value.toLowerCase();
    let index = inputTxtKleineLetters.length - 1;
    let counter = 0;
    let stoppen = false;
    while(!stoppen){
        if(inputTxtKleineLetters.lastIndexOf("an",index) !== -1){
            index = inputTxtKleineLetters.lastIndexOf("an",index) - 1;
            counter++;
        }
        else {
            stoppen = true;
        }
    }
    console.log(counter);
}

window.addEventListener("load", setup);