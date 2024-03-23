const setup = () => {
    staatKip();
}
const staatKip = () => {
    let staat = document.getElementById("staatKip");
    let img = document.getElementById("img");
    let note = document.getElementById("note");
    let metEi;
    let zonderEi;
    let kiezen;
    for(let i = 0; i < staat.length; i++){
        if(staat[i].selected === "Met een ei"){
            metEi = true;
        }
        else if(staat[i] === "Zonder een ei"){
            zonderEi = true;
        }
        else {
            metEi = false;
            kiezen = true;
            zonderEi = false;
        }
    }
    if(metEi){
        img.className = "img.with-egg";
        note.innerHTML = "Hierboven, een kip met een ei";
    }
    else {
        if(kiezen){
            img.className = "hidden";
        }
        if(zonderEi) {
            img.className = "img";
            note.innerHTML = "Hierboven, een kip zonder een ei";
        }
    }

}
window.addEventListener("load", setup);