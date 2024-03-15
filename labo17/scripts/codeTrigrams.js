const setup = () => {
    let woord = "onhoorbaar";
    let indexStart = 0;
    let indexEnd = 2;
    while(indexEnd < woord.length){
        if(woord.length === 3){
            console.log(woord);
        }
        else if(woord.length < 3){
            console.log("Kan geen trigrams vormen woord is kleiner dan 3 letters!!");
        }
        else{
            indexEnd++;
            console.log(woord.slice(indexStart,indexEnd));
            indexStart++;
        }
    }
}

window.addEventListener("load", setup);