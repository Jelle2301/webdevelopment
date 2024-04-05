let global = {
    AMOUNT_HORIZONTAL: 4, //aantal kaarten horizontaal
    AMOUNT_VERTICAL: 3, //aantal kaarten verticaal
    AMOUNT_CARDS: 6, //aantal koppels
    FOULS: 0, //aantal fouten
    CARD1: null,
    CARD2: null,
    TURNED_CARDS: 0,
    PAIRS: [] //hier worden de gevonden koppels opgeslagen
}
const setup = () => {
    let buttonStart = document.getElementById('start');
    buttonStart.addEventListener('click',startGame);
}
const startGame = () => {
    resetGame();
    createField(); //Bij het starten van het spel moeten we eerst een speelveld creeren
}
const resetGame = () => {
    let arrayImages = document.querySelectorAll('img');
    for(let i = 0; i < arrayImages.length; i++){
        arrayImages[i].remove();
    }
    global.CARD1 = null;
    global.CARD2 = null;
    global.PAIRS = [];
    global.CHOSEN = false;
}
const createField = () => {
    let gameGrid = document.getElementById('GameGrid');
    let backCard = 'images/backCard.png';
    let arrayImages = ['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png',
        'images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png']; //deze array houdt de mogelijke kaart opties bij
    for(let i = 0; i < (global.AMOUNT_VERTICAL * global.AMOUNT_HORIZONTAL); i++){
        let randomCard = Math.floor(Math.random() * arrayImages.length); //de random zal een random getal weergeven om een index op te geven bij de for
        let newCard = document.createElement('img'); // we maken een nieuwe kaart
        newCard.setAttribute('src', backCard); //we zetten standaard de kaart omgedraaid
        newCard.setAttribute('data-card', arrayImages[randomCard]); //we geven een image mee aan de kaart
        newCard.addEventListener('click',turnCard); //elke kaart moet kunnen "draaien"
        gameGrid.append(newCard);
        arrayImages.splice(randomCard,1); //als we een kaart een image hebben gegeven moet deze ook uit de array gehaald worden
    }
}
const turnCard = (event) => {
    let turnedCards = document.getElementsByClassName('turned');
    if(turnedCards.length >= 2) return;
    let gameGrid = document.getElementById('GameGrid');
    let image = event.currentTarget; //dit is de kaart die momenteel is aangetikt
    image.classList.add('turned');
    turnedCards = document.getElementsByClassName('turned');
    let backCard = 'images/backCard.png'; //achterkant van de kaart
    let imageView = image.getAttribute('data-card'); //de img die gekoppeld is aan de kaart
        if(turnedCards.length === 2){ //indien we al een kaart hebben aangeklikt slaan we de volgende op in de 2de kaart
            global.CARD2 = image;
            global.CARD2.src = imageView;
                if (global.CARD1.getAttribute('data-card') === global.CARD2.getAttribute('data-card')) {
                    //indien de 2 kaarten correct zijn geven we de groene border mee en wordt het paar in de pairs opgeslagen
                    correctImage();
                    setTimeout(() => {
                        global.CARD1.style.visibility = 'hidden';
                        global.CARD1.classList.remove('turned');
                        global.CARD1.classList.remove('correct');
                        global.CARD1 = null;
                        global.CARD2.style.visibility = 'hidden';
                        global.CARD2.classList.remove('turned');
                        global.CARD2.classList.remove('correct');
                        global.CARD2 = null;
                        if(global.PAIRS.length === 6) gameFinished();
                    }, 1500);
                    global.PAIRS.push(imageView);
                }
                else {
                    //indien de kaarten niet overeenkomen worden ze terug omgedraaid door de src op achterkant van de kaart te zetten
                    foulImage();
                    global.FOULS++;
                    setTimeout(() => {
                        global.CARD1.src = backCard;
                        global.CARD1.classList.remove('foul');
                        global.CARD1.classList.remove('turned');
                        global.CARD2.src = backCard;
                        global.CARD2.classList.remove('foul');
                        global.CARD2.classList.remove('turned');
                    }, 1500);
                }
        }
        else {
            global.CARD1 = image; //hier stellen we de eerste kaart gelijk aan de eerste kaart die wordt gedraaid
            global.CARD1.src = imageView; //hiermee draaien we onze kaart om
        }
}
const gameFinished = () => {
    //melding die wordt weergegeven indien het spel is uitgespeeld
    window.alert(`Well done !! You have found every pair with only ${global.FOULS} fouls, if u want to play the again use the start button !!`);
}
const foulImage = () => {
    //indien de images niet dezelfde zijn krijgen ze een rode border
    global.CARD1.classList.add('foul');
    global.CARD2.classList.add('foul');
}
const correctImage = () => {
    //indien de images gelijk zijn krijgen ze een groene border
    global.CARD1.classList.add('correct');
    global.CARD2.classList.add('correct');
}
window.addEventListener("load", setup);