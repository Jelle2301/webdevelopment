const setup = () => {
    calculateTimeBetween();
}

const calculateTimeBetween = () => {
    let birthDate = new Date('January 23, 2004');
    let dateToday = new Date();
    let lifeTime = Math.floor((dateToday - birthDate) / (1000 * 60 * 60 * 24));

    console.log(lifeTime + ' Days');
}
window.addEventListener("load", setup);