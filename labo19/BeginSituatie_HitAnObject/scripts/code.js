const setup = () => {
    let start = document.getElementById('start');
    let img = document.getElementById('img');
    img.addEventListener('click',clickImage);
    start.addEventListener('click',startGame);
};
let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 2500,
    score: 0,
    timeoutId: 0
};
const changeImage = () => {
    let img = document.getElementById('img');
    let playfield = document.getElementById('playField');
    let maxWidth = playfield.offsetWidth - global.IMAGE_SIZE;
    let minHeight = playfield.offsetHeight - global.IMAGE_SIZE;
    img.setAttribute('src',global.IMAGE_PATH_PREFIX + (Math.floor(Math.random() * global.IMAGE_COUNT)) + global.IMAGE_PATH_SUFFIX);
    img.style.left = Math.random() * maxWidth + "px";
    img.style.top = Math.random() * minHeight + "px";
};
const startGame = () => {
    let img = document.getElementById('img');
    img.addEventListener('click',clickImage);
    let start = document.getElementById('start');
    start.setAttribute('hidden','hidden');
    changeImage();
    global.timeoutId = setInterval(changeImage, global.MOVE_DELAY);
};
const clickImage = (event) => {
    let span = document.querySelector('span');
    let img = parseInt(event.target.getAttribute("src").slice(7,8),10);
    if (img !== 0) {
        clearInterval(global.timeoutId);
        global.score++;
        span.textContent = global.score;
        changeImage();
        global.timeoutId = setInterval(changeImage, global.MOVE_DELAY);
    } else {
        clearInterval(global.timeoutId);
        window.alert('Game over !');
    }
};
window.addEventListener("load", setup);


