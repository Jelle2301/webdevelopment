const setup = () => {
    let btnResultaat = document.getElementById("resultaat");
    btnResultaat.addEventListener("click",resultaat);
}

const resultaat = () => {
    let roker = document.getElementById("roker").checked;
    let moederT = document.getElementsByName("moedertaal");
    let buurland = document.getElementById("buurland");
    let bestelling = document.getElementById("bestelling");
    let gevondenMoeder = false;
    let gevondenBuur = false;

    if(roker){
        console.log('Is een roker');
    }
    else {
        console.log('Is geen roker');
    }

    let checkedMoeder = false;
    for(let i = 0; i < moederT.length;i++){
        if(moederT[i].checked){
            console.log(`Moedertaal is ${moederT[i].value}`);
            checkedMoeder = true;
        }
    }
    if(!checkedMoeder)console.log('Moedertaal werd niet opgegeven.');

    let checkedBuurland = false;
    for(let j = 0; j < buurland.length; j++){
        if(buurland[j].selected){
            console.log(`Favoriet buurland is ${buurland[j].value}`);
            checkedBuurland = true;
        }
    }
    if(!checkedBuurland)console.log('Buurland werd niet opgegeven.');

    let checkedBestelling = false;
    let answer = 'Bestelling is';
    for(let k = 0; k < bestelling.length; k++){
        if(bestelling[k].selected){
            answer += ' ' + bestelling[k].value;
            checkedBestelling = true;
        }
    }
    if(!checkedBestelling)answer += ' niet opgegeven.';
    console.log(answer.trim());
}

window.addEventListener("load", setup);