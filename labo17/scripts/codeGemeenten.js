const setup = () => {
    let select = document.getElementById("select");
    let gemeenten = [];
    while(1){
        let gemeente = prompt("Geef gemeenten op indien je wilt stoppen type stop.");
        if(gemeente === "stop") break;
        gemeenten.push(gemeente);
    }
    gemeenten.sort();
    for(let i = 0; i < gemeenten.length; i++){
        select.innerHTML += `<option value="${gemeenten[i]}">${gemeenten[i]}</option>`;
    }
}
window.addEventListener("load", setup);