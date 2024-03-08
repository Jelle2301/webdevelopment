const setup = () => {
    let submit = document.getElementById("submit");
    submit.addEventListener("click",update)
}

const update = () => {
    let input = document.getElementById("input");
    let inputCharacters = input.value.replace(/\s+/g, "").split("");
    let answer = "";
    for(let i = 0; i < inputCharacters.length; i++){
         answer += (inputCharacters[i] + " ");
    }
    console.log(answer);
    console.log(maakMetSpaties("Ge moogd naar huis gaan"));
}

const maakMetSpaties = (inputTxt) => {
    let inputCharacters = inputTxt.replace(/\s+/g, "").split("");
    let answer = "";
    for(let i = 0; i < inputCharacters.length; i++){
        answer += (inputCharacters[i] + " ");
    }
    return answer;
}
window.addEventListener("load", setup);